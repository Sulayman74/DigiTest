import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// ** j'importe mes classes dans l'enfat Output, Input, EventEmitter
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  isOverComponent = false


// ? @ le décorateur

  @Output() myJob = new EventEmitter<any>() // ** j'instancie ici mon nouvel objet avec new
  @Input() ballonOr!: any

 // TODO je peux créer un attribut pour le faire passer dans mon emit exemple : tableau = { skill: 'UX', id: 3, name: 'jojo' } //
  
  constructor(public dataService : DataService) {

   }
  
  onClick(){
  
  this.isOverComponent = true
}
  

  ngOnInit(): void {
    // ** pour faire apparaitre mon objet directement sans event je peux ici écrire this.add() *//
  this.dataService.dataToSend$.subscribe((value:boolean) => this.isOverComponent = value)
  }

// ! on implémente une méthode


  add(){
    this.myJob.emit({ skill: 'UX', id: 3, name: 'jojo' })
    // TODO autre syntaxe pour emettre mon objet this.myJob.emit({this.tableau})
  }
}
