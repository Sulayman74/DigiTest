import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.scss']
})
export class SlideBarComponent implements OnInit {

  countries!: any
  userForm !: FormGroup
  filteredOptions!: Observable<string[]> | undefined
  options: string[] = []
  today = new Date()
  prayers!: any
  hijri !: Date
  arabicMonth!: string
  arabicDay!: string
  hijriDay!: string

  constructor(
    private _countriesService: DataService,
    private _fb: FormBuilder,
    private _salatService: DataService
  ) { }


  ngOnInit(): void {



    let now = new Date()
    let ajd = now.getDate() - 1
    console.log(ajd); this._salatService.getSalat().subscribe((value: any) => {
      console.log("objet avec horaires", value);
      this.prayers = value.data[ajd].timings
      // console.log(this.prayers);
      this.hijri = value.data[ajd].date.hijri.date
      this.arabicMonth = value.data[ajd].date.hijri.month.ar
      this.arabicDay = value.data[ajd].date.hijri.weekday.ar
      this.hijriDay = value.data[ajd].date.hijri.day
    })



    this.userForm = this._fb.group({
      pays: [this.options]
    })

    this._countriesService.getCountries().subscribe((pays: any) => {
      this.countries = pays
      this.options = this.sortCountries()

    })

    this.filteredOptions = this.userForm?.get('pays')?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    )

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options?.filter(option => option.toLowerCase().includes(filterValue));
  }

  sortCountries(): string[] {
    return this.countries.map((countryName: any) => countryName.name.common)
  }



}
