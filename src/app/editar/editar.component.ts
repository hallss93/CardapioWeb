import {CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, NgModule, OnInit } from '@angular/core';
import {initializeApp, database} from 'firebase';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {
  
public cardapios: string[] = [];


public lista: Object[];
salva(){
  var id = (<HTMLInputElement>document.getElementById('id'));
  console.log(id.value);
  var descricao = (<HTMLInputElement>document.getElementById('descricao'));
  var nome = (<HTMLInputElement>document.getElementById('nome'));
  var valor = (<HTMLInputElement>document.getElementById('valor'));
  console.log(descricao.value);
  var database = firebase.database();
  firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
  .then(function(user) {
    
      var caminho = database.ref('cardapio/');
      var task= {};
      task[id.value]=
        {
          nome: nome.value,
          valor:valor.value,
          descricao: descricao.value
        };

        caminho.update(task);
      
      //alert("O item foi atualizado com sucesso!");
      //this.limpar();
      limpar();
      window.location.reload();
  })  
}

editar(id){
  var id_atual = document.getElementById('id');
  var nome = document.getElementById('nome');
  var valor = document.getElementById('valor');
  var descricao = document.getElementById('descricao');
  var database = firebase.database();
  id_atual.setAttribute("value",id);
  firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
  .then(function(user) {
      var fruitRef = database.ref('cardapio/');
      fruitRef.child(id).once('value', (snap) =>{
        descricao.setAttribute("value",snap.val().descricao);
        nome.setAttribute("value",snap.val().nome);
        valor.setAttribute("value",snap.val().valor);
      });
  })  

  

  
}

remove(){
  var nome = document.getElementById('nome').getAttribute("value");
  var id_atual = document.getElementById('id').getAttribute("value");
  alert(id_atual);
  var database = firebase.database();
  firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
  .then(function(user) {
      var fruitRef = database.ref('cardapio/');
      fruitRef.child(id_atual).remove();
      document.getElementById(id_atual).remove();
      alert("O item " + nome + " foi removido com sucesso!");
      this.limpar();
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
function limpar(){
  document.getElementById('id').setAttribute("value","");
  document.getElementById('nome').setAttribute("value","");
  document.getElementById('valor').setAttribute("value","");
  document.getElementById('descricao').setAttribute("value","");
}
function atualizaDivs(){
var database = firebase.database();
  firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
  .then(function(user) {
      var fruitRef = database.ref('cardapio/');
      fruitRef.once("value",(snap)=>{
        snap.forEach(snap2 =>{
        (<HTMLInputElement>document.getElementById(snap2.key)).remove();  
          return false;
        });
        console.log(snap.val());
        
      });
  })  
}