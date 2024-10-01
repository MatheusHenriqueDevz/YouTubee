function pesquisa() {
    alert("Achamos seu video")
}

function comentario(){
    alert("Comentario enviado")
}

function dados(){
    const ds = [
        {id:"1", login:"Matheus", senha:"1234"},
        {id:"2", login:"Walisom", senha:"5678"}
    ]
    const json = JSON.stringify(ds)
    localStorage.setItem("banco", json)
}