function criptografar() {
    let texto = document.getElementById("textarea-texto").value;
    let fotoSaida = document.getElementById("imagem-saida");
    let tituloSaida = document.getElementById("titulo-saida");
    let textoSaida = document.getElementById("texto-saida");

    if (verificarTexto(texto)) {
        alert("NÃO digitar letras maiúsculas nem caracteres especiais.");
        console.log(textoCriptografado);
    }

    let textoCriptografado = texto
    .replace(/e/ig, "enter")
    .replace(/i/ig, "imes")
    .replace(/a/ig, "ai")
    .replace(/o/ig, "ober")
    .replace(/u/ig, "ufat");

    if (texto.length != 0) {
        if (verificarTexto(texto)) {
                alert("NÃO digitar letras maiúsculas nem caracteres especiais.");
        } else {
            document.getElementById("saida").textContent = textoCriptografado;
        }
        
    }
    
}

function descriptografar() {
    let texto = document.getElementById("textarea-texto").value;

    let textoDescriptografado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        if (verificarTexto(texto)) {
                alert("NÃO digitar letras maiúsculas nem caracteres especiais.")
        } else {
            document.getElementById("saida").innerText = textoDescriptografado;
        }
        
    } 
}


function verificarTexto(texto) {
    const regexCaractereEspecial = /[A-Z]/;
    const regexAcentuacao = /[áàãâéèêíïóôõöúüç]/i;
    const regexPontuacao = /[!@#$%¨&*(){}/+-,.^~`?]/i;
    return regexCaractereEspecial.test(texto) || regexAcentuacao.test(texto) || regexPontuacao.test(texto);
  }


  function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById("saida").innerText).then(() => {
        alert("Texto copiado!");
    })
  }