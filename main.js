const text= document.querySelector('#texto');
const encriptar = document.querySelector('.encriptar');
const copiar = document.querySelector('.aside__copiar');
const desencriptar = document.querySelector('.desencriptar');

text.addEventListener('input',(e)=>{
    e.preventDefault();
    let texto = text.value;
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    text.value = texto.toLowerCase();
});

encriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    let texto = text.value;
    if(texto!=''){
        copiar.textContent='Copiar';
        copiar.style.backgroundColor='#2377e7';
        let textoModificado = texto.replace(/[aeiou]/g, function(match) {
            switch (match) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes'
            case 'o':
                return 'ober'
            case 'u':
                return 'ufat';
            default:
                return match;
            }
        });
        document.querySelector('.aside__sinInformacion').classList.add('ocultar');
        document.querySelector('.aside__encriptacion').classList.remove('ocultar');

        document.querySelector('.aside__mensaje').textContent=textoModificado;
        text.value='';
    }else{
        document.querySelector('.aside__sinInformacion').classList.remove('ocultar');
        document.querySelector('.aside__encriptacion').classList.add('ocultar');
    }
});

desencriptar.addEventListener('click',(e)=>{
    e.preventDefault();
    let texto = text.value;
    if(texto!=''){
        copiar.textContent='Copiar';
        copiar.style.backgroundColor='#2377e7';
        let textoModificado = texto.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.querySelector('.aside__sinInformacion').classList.add('ocultar');
        document.querySelector('.aside__encriptacion').classList.remove('ocultar');

        document.querySelector('.aside__mensaje').textContent=textoModificado;
        text.value='';
    }else{
        document.querySelector('.aside__sinInformacion').classList.remove('ocultar');
        document.querySelector('.aside__encriptacion').classList.add('ocultar');
    }
});

copiar.addEventListener('click',(e)=>{
    e.preventDefault();
    const textoCopia = document.querySelector('.aside__mensaje');
    
    navigator.clipboard.writeText(textoCopia.textContent)
    .then(() => {
        copiar.textContent='Texto Copiado';
        copiar.style.backgroundColor='rgb(2, 19, 66)';
    })
    .catch(err => alert('Error al copiar el texto: ', err));

});