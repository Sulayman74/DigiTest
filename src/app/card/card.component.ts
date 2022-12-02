import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';



// class User {
//   nom!:string|number  //** attribut le ! est un "bang", on doit définir son type */

//   surname:string = "test"

//   // surname = "test"; une autre manière inférence;

// constructor() {
//   this.nom = 3
// }

//   getNom() { // ** ceci est une méthode*/
//     return 
//   }
// };

@Component({  //** meta data */
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})



export class CardComponent implements OnInit {

  @Input() dataUSer: any
  @Input() data: any
  name!: string
  age!: number
  city!: string
  firstname!: string
  imageUrl!: string
  isActive = false



  // @Input() test1!:boolean;
  test1 = { id: 5, name: "Jojo" }


  onClick() {
    // alert("ok")
    this.age = 38
    this.name = "Jo"
    this.firstname = "La Banane"
    this.city = "London"
    this.imageUrl = "https://picsum.photos/200/300?random"
    this.isActive = !this.isActive

  }





  constructor(dataService: DataService) {
    this.age = 35
    this.name = "Bravo"
    this.city = "Los Angeles"
    this.firstname = "Jonny"
    this.imageUrl = "https://blog.fr.playstation.com/tachyon/sites/10/2022/06/17beeefc8aa6008903d5f4fe83c276e6266c75fc.jpg?resize=1088%2C612&crop_strategy=smart"



  }

  ngOnInit(): void {


  }


}
