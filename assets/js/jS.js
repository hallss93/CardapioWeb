function adicionar(){
console.log("inserindo");
  var nome = document.getElementById('nome');
  var valor = document.getElementById('valor');
  var descricao = document.getElementById('descricao');
  var database = firebase.database();

  var newPostKey = firebase.database().ref().child('cardapio/').push().key;
  var fruitRef = database.ref('cardapio/' + newPostKey);

console.log("inserindo logando");
firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
.then(function(user) {


  console.log("logado ");
    var result = fruitRef.set(
    {
      nome: nome.value,
      valor:valor.value,
      descricao: descricao.value
    });
    console.log("usuario ==>" + user);
    alert("Cadastro do Cardápio '" + nome.value + "' concluído com sucesso!")
})
}