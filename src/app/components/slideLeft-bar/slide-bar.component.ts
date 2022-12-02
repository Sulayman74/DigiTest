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


  constructor(private _countriesService: DataService,
    private _fb: FormBuilder
  ) { }


  ngOnInit(): void {

    this.userForm = this._fb.group({
      pays: [this.options]
    })

    this._countriesService.getCountries().subscribe((pays: any) => {
      this.countries = pays
      this.options = this.sortCountries()
      console.log("first log de countries", this.countries);
      console.warn(this.options);
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
