function pegarDados() {
    let usuario = document.getElementById("usuarios");
    let foto = document.getElementById("foto");
    
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(
        response => response.json()
    )
    .then(
        data => {
          
                console.log(data)
                usuario.innerHTML = data.id;
                foto.src = data.url;
            
            
        }
    )
}
