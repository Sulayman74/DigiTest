import { Component, OnInit, } from '@angular/core';
import { Subject, map, tap } from "rxjs";

import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit {

  dataAPI!: any[]
  dataUser!: any
  newTest!: boolean
  monChiffre!: number
  monTableau: number[] = []
  title = "test"
  image!: string
  background = ""
  testIf = false
  numbers = [3, 6, 9, 15, 27, 2]
  tableauTest = [1, 2, 3]

  ayah!: string


  tableauMohammed = [
    {
      logo: 'https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
      societyName: 'Spotify',
      rating: 4.8,
      jobTitle: 'Senior UI/UX',
      wage: 5000,
      location: 'New-Yor, USA',
    },
    {
      logo: 'https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
      societyName: 'Google',
      rating: 4.5,
      jobTitle: 'Senior UI/UX Designer',
      wage: 100000,
      location: 'New-Yor, USA',
    },
    {
      logo: 'https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
      societyName: 'Youtube',
      rating: 4.8,
      jobTitle: 'Senior UI/UX Designer',
      wage: 120000,
      location: 'Bonneville',
    },
    {
      logo: 'https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg',
      societyName: 'Share',
      rating: 5,
      jobTitle: 'Senior Web',
      wage: 10000,
      location: 'Annemasse',
    }
  ]


  constructor(private dataService: DataService, private user: UserService) {


  }




  ngOnInit(): void {

    this.dataService.getAyah().pipe(tap(value => console.log(value.data.text))).subscribe((ayah: any) => {
      this.ayah = ayah.data.text
    })

    this.dataService.getData().subscribe((value: any) => { this.dataAPI = value.data; })
    this.user.getSingleUser().subscribe((user: any) => this.dataUser = user.data)

  }


  changeState(event: boolean) {
    this.newTest = event
  }
  changeColor(newColor: string) {
    return newColor
  }

  onClick() {
    this.title = "Mon test"
    this.testIf = true
    this.monTableau = [1, 2, 3]
    this.newTest = !this.newTest

  }



}
