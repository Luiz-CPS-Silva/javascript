function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('ERRO')
   } else {
    var fsex = window.document.getElementsByName('radsex') 
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = ('Homem')
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'foto-bebe-h.jpg')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'foto-jovem-h.jpg')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'foto-adulto-h.jpg')
        } else {
            //Idoso
            img.setAttribute('src', 'foto-idoso-h.jpg')
        }
    } else if (fsex[1].checked) {
        gênero = ('Mulher')
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'foto-bebe-m.jpg')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'foto-jovem-m.jpg')
        } else if (idade < 50) {
            //Adulta
            img.setAttribute('src', 'foto-adulta-m.jpg')
        } else {
            //Idosa
            img.setAttribute('src', 'foto-idosa-m.jpg')
        }
    }
    res.style.textAlign = 'center' 
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
   }
}