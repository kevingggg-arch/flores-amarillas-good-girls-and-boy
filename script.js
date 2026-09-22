window.onload = () => {
    document.body.classList.remove("container");

    const musica = document.getElementById("musica");
    const boton = document.getElementById("botonMusica");

    musica.volume = 0.5;

    musica.play().then(() => {
        boton.style.display = "none";
    }).catch(() => {
        boton.style.display = "block";
    });
    
    boton.addEventListener("click", () => {
        musica.play();
        boton.style.display = "none";
    });
};
