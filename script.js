window.onload = () => {
    document.body.classList.remove("container");

    setTimeout(() => {
        document.querySelector(".mensaje").classList.add("mostrar");
    }, 6000);
};
