function adicionar() {
  var nome = document.getElementById('nome');
  var valor = document.getElementById('valor');
  var descricao = document.getElementById('descricao');
  var database = firebase.database();

  var newPostKey = firebase.database().ref().child('cardapio/').push().key;
  var fruitRef = database.ref('cardapio/' + newPostKey);
  if (nome.value != "" && valor.value != "" && descricao.value != "") {
    firebase.auth().signInWithEmailAndPassword('1234@hotmail.com', '123456')
      .then(function (user) {
        console.log("logado ");
        var result = fruitRef.set(
          {
            nome: nome.value,
            valor: valor.value,
            descricao: descricao.value
          });
        alert("Cadastro do Cardápio '" + nome.value + "' concluído com sucesso!")
      })
  } else alert("Preencha todos os campos!");
}
function limpar() {
  document.getElementById('nome').value = "";
  document.getElementById('valor').value = "";
  document.getElementById('descricao').value = "";
}