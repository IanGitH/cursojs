function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'hB.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'hJ.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'hA.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'hI.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mB.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mJ.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mA.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'mI.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}