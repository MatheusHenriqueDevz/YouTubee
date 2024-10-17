function usuarios() {
    const dados = [
      {'id':1, 'nome':'Matheus', 'email':'matheus@gmail.com', 'senha':'12345'},
      {'id':2, 'nome':'Wallison', 'email':'wallison@gmail.com', 'senha':'56789'}
    ];
    let n = JSON.stringify(dados); /* TRANSFORMA O OBJ DADOS PARA JSON */
    localStorage.setItem('banco', n); /* ARMAZENA NO LOCALSTORAGE 'banco' */
    return dados
  }
  
function login(){
    const dados = JSON.parse(localStorage.getItem('banco')); /* TRADUZ DE JSON PARA UMA LINGUAGEM QUE A MAQUINA VAI ENTENDER */
    let login = document.querySelector('#login').value; /* PEGA OS VALORES ATRIBUIDOS */
    let senha = document.querySelector('#senha').value; /* PEGA OS VALORES ATRIBUIDOS */
        
     let found = false;
    for (let i = 0; dados.length > i; i++) {
        if (login == dados[i].email && senha == dados[i].senha) {
                console.log('conectado');
                let n = JSON.stringify(dados[i]); /* TRANSFORMA EM JSON */
                sessionStorage.setItem('user', n); /* ARMAZENA NO LOCAL */
                let url = 'index1.html';
                window.open(url)
                found = true;
                break;
        }
    }
        if (!found) {
        alert('Credenciais incorretas') /* SE DIFERENTE */
        }
}