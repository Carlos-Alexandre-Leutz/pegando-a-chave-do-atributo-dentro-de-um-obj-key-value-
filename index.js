let obj = {
    chave1: "valor1",
    chave2: "valor2",
    chave3: "valor3",

}
for (var [key, value] of Object.entries(obj)) {
    console.log(key, value);
    if(key == "chave1"){
        console.log("chave 1 encontrada pela chave do obj");

    }
}
