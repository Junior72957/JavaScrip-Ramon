function pegarDados() {
    let foto = document.getElementById("foto");
    
    fetch('https://dog.ceo/api/breeds/image/random ')
    .then(
        response => response.json()
    )
    .then(
        data => {             
            console.log(data)
            console.log(data.message)
            foto.src = data.message;
        }
    )
}
