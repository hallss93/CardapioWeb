import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
constructor(){

  var config = {
    apiKey: "AIzaSyBtmpSpenRyyeEv6GMKwoySErqU6jl3KzA",
    authDomain: "cardapio-12826.firebaseapp.com",
    databaseURL: "https://cardapio-12826.firebaseio.com",
    storageBucket: "cardapio-12826.appspot.com",
    messagingSenderId: "1072571183974"
  };
  firebase.initializeApp(config);
}


}