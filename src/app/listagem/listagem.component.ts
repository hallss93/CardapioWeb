import {CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, NgModule, OnInit } from '@angular/core';
import { CardapioService } from '../listagem/cardapio.service';
import {initializeApp, database} from 'firebase';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent implements OnInit {
public cardapios: string[] = [];
cardapioService: CardapioService;

public lista: Object[];
editar(id){
    this.cardapioService.setID(id);
    console.log(this.cardapioService.getID());
    this.router.navigate(['./editar']);
}

remove(id){
var descendentes = document.querySelectorAll("#"+ id);
    var database = firebase.database();
  firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
  .then(function(user) {
    console.log(id);
      var fruitRef = database.ref('cardapio/');
      fruitRef.child(id).remove();
      console.log(id);
      document.getElementById(id).remove();
  })  
}
carrega(cardapio){ 
    var database = firebase.database();
  firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
  .then(function(user) {
      var fruitRef = database.ref('cardapio/');
      fruitRef.once('value', (snap) => {
            snap.forEach((chi) => {
            cardapio.push({
                id: chi.key,
                descricao: chi.val().descricao,
                nome: chi.val().nome,
                valor: chi.val().valor
              });
            console.log(cardapio);
            return false;
          });
      })
  })
  
}
constructor(private router: Router){
  this.carrega(this.cardapios);
  console.log(this.cardapios);
}

  ngOnInit() {
  }

}
