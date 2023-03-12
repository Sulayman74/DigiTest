import { Component, OnInit, } from '@angular/core';

import { DataService, } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TestModalComponent } from './../../modals/test-modal/test-modal.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  footBall = [{ mark: 'henry', name: 'titi', bOr: 'KB9' }]
  isOverComponent!: boolean
  monPost!: any
  users!: any

  subcription = Subscription
  // public/private = portée de ce qu'y arrive après
  constructor(public dataService: DataService,
    private _dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataService.dataToSend$.subscribe((value: boolean) => this.isOverComponent = value)
    this.dataService.getData().subscribe((user: any) => {
      this.users = user
    })
  }
  getData(myEvent: any) {
    this.monPost = myEvent
  }

  onClick() {
    this.isOverComponent = false
    this._dialog.open(TestModalComponent,
      {
        width: "60%",
        height: "50%",
        enterAnimationDuration: "600ms",
        exitAnimationDuration: "500ms",
        data: this.users
      })
  }

}
