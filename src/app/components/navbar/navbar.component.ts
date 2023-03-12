import { Component, Injectable, Input, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() arrayNbr!: number
  hadith!: any
  constructor(private dataService: DataService) {

  }


  ngOnInit(): void {



  }
  getHadith() {
    this.dataService.getHadith().subscribe((values: any) => this.hadith = values.data.contents.arab)
  }
}
