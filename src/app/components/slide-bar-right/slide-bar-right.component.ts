import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slide-bar-right',
  templateUrl: './slide-bar-right.component.html',
  styleUrls: ['./slide-bar-right.component.scss']
})
export class SlideBarRightComponent implements OnInit {

  constructor(private _salatService: DataService) { }

  ngOnInit(): void {
    
    this._salatService.getSalat().subscribe((value: any) => {
      console.warn(value, "test");

    })

  }


}
