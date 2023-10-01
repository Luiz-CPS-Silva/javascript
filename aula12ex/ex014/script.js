function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'foto-manha.jpg'
        document.body.style.background = '#FBCB83'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#F29C50'
    } else {
        //Boa Noite
        img.src = 'foto-noite.jpg'
        document.body.style.background = '#023373'
    }
}

