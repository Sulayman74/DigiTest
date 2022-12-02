import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExoModalComponent } from 'src/app/modals/exo-modal/exo-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exo-components',
  templateUrl: './exo-components.component.html',
  styleUrls: ['./exo-components.component.scss']
})
export class ExoComponentsComponent implements OnInit {
  @Output() monTest = new EventEmitter<boolean>()
  @Input() nombre!: number

  meteo = {
    rue: "117 clos des Oches",
    codePostale: "74130",
    ville: "Bonneville",
    temperature: 0
  }


  constructor(private _dialog: MatDialog,
    private _fb: FormBuilder) { }

  ngOnInit(): void {

  }


  openModal(): void {
    const dialog = this._dialog.open(ExoModalComponent,

      {
        height: "50vh",
        width: "100%",
        exitAnimationDuration: "300ms",
        enterAnimationDuration: "700ms",
        data: {
          rue: this.meteo.rue,
          codePostale: this.meteo.codePostale,
          ville: this.meteo.ville
        }
      }
    );
    dialog.afterClosed()
      .subscribe((responseFromModal: any) => {
        console.warn('response de la modal lors de la cloture ', responseFromModal);
        this.meteo = responseFromModal

      })
  }



}
