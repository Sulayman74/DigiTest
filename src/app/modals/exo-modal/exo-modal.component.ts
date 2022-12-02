import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-exo-modal',
  templateUrl: './exo-modal.component.html',
  styleUrls: ['./exo-modal.component.scss']
})
export class ExoModalComponent implements OnInit {

  formModal!: FormGroup
  show: boolean = false

  constructor(private _datas: WeatherService,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) private _donnees: any) { }

  ngOnInit(): void {

    this.formModal = this._fb.group(
      {
        rue: [this._donnees.rue, Validators.required],
        codePostale: [this._donnees.codePostale, Validators.required],
        ville: [this._donnees.ville, Validators.required],
        temperature: this._donnees.temperature
      }
    )

  }


  onSubmit() {
    const formDatas = this.formModal.value
    this._datas.getLocation(formDatas.rue, formDatas.codePostale, formDatas.ville).pipe(take(1), switchMap((responseFromServerGPS: any) => {
      const dataGps = {
        latitude: responseFromServerGPS.features[0].geometry.coordinates[0],
        longitude: responseFromServerGPS.features[0].geometry.coordinates[1]
      };

      return this._datas.getMeteo(dataGps.longitude, dataGps.latitude)
    })).subscribe((responseFromWeatherServer: any) => {
      let now = new Date();
      let heure = now.getHours();

      responseFromWeatherServer.hourly.temperature_2m[heure],
        responseFromWeatherServer.hourly.time[heure]
      this._donnees.close({
        temperature: responseFromWeatherServer.hourly.temperature_2m[heure],
        rue: formDatas.rue,
        codePostale: formDatas.codePostale,
        ville: formDatas.ville
      })

      this.show = true
    })
  }


}
