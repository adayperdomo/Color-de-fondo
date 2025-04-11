document.getElementById("cuadrado").addEventListener("click", colorAleatorio);

function colorAleatorio(){
    let digitoHexadecimal = "0123456789abcdef";
    let color = "";

    // Para conseguir un número entre 0 y 16 == Math.random() *16;

    color = "#";
    for (let i = 0; i < 6; i++){
        color += digitoHexadecimal[Math.floor(Math.random() *16)]
    }

    document.getElementById("cuadrado").style.backgroundColor = color;
    document.getElementById("textoColor").innerHTML = "Color: " + color;

    console.log(color);
}
