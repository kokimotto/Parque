const slideIndices = {
    mySlides1: 1
};
function showSlides(slideClass){
    const slides = document.getElementsByClassName(slideClass);
    if(slideIndices[slideClass] > slides.length){
        slideIndices[slideClass] = 1;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndices[slideClass] - 1].style.display = "block";
}
function changeSlide(n){
    slideIndices.mySlides1 += n;
    showSlides("mySlides1");
}
showSlides("mySlides1");


const themeButton = document.getElementById("themeButton");
themeButton.onclick = () => {

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i> Tema Claro';
    }else{
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i> Tema Escuro';
    }

}

async function carregarClima() {
    const cidade = "Caririaçu";
    const url = `https://wttr.in/${cidade}?format=j1&lang=pt`;
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const temperatura = dados.current_condition[0].temp_C;
        const clima = dados.current_condition[0].lang_pt[0].value;
        document.getElementById("weatherText").innerHTML =
            `${temperatura}°C | ${clima}`;
    } catch (erro) {
        document.getElementById("weatherText").innerHTML =
            "Clima indisponível";
    }
}
carregarClima();