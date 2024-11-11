function toggleColor() {
    const tema = document.getElementById("themeStylesheet");
    const botao = document.getElementById("toggleButton");
    const imagem = document.getElementById("imagem");
    const servicosHeader = document.getElementById("servicosLink");

    if (tema.getAttribute("href") === "Styles.css/Loja.css"){
        tema.setAttribute("href", "Styles.css/Loja_Rosa.css");
        imagem.src = "img/Logo2.png";
        localStorage.setItem("selectedTheme", "rosa");
        servicosHeader.style.backgroundColor = "pink"; // Rosa para o tema rosa
    }

    else{
        tema.setAttribute("href", "Styles.css/Loja.css");
        imagem.src = "img/Logo.png"
        localStorage.setItem("selectedTheme", "azul");
        servicosHeader.style.backgroundColor = "blue"; // Azul para o tema azul
    }
}
    
window.onload = function() {
    const savedTheme = localStorage.getItem("selectedTheme");
    const tema = document.getElementById("themeStylesheet");
    const imagem = document.getElementById("imagem");
    const servicosHeader = document.getElementById("servicosLink");

    // Verifica se está na página de "Hallowen"
    if (window.location.pathname.includes("Hallowen.HTML")) {
        return; // Não realiza a mudança de cor nesta página
    }
    
    if (savedTheme === "rosa") {
        tema.setAttribute("href", "Styles.css/Loja_Rosa.css");
        imagem.src = "img/Logo2.png";
        // Muda a cor de fundo para rosa
        servicosHeader.style.backgroundColor = "pink";
    } else {
        tema.setAttribute("href", "Styles.css/Loja.css");
        imagem.src = "img/Logo.png";
        // Restaura a cor de fundo original
        servicosHeader.style.backgroundColor = "blue"; 
    }
}