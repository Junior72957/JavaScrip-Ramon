function pegarDados() {
    let usuario = document.getElementById("usuario");
    let foto = document.getElementById("foto");
    
    
    fetch('https://api.thecatapi.com/v1/images/search')
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
