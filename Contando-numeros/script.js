function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var ress = document.getElementById('ress')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        window.alert('[ERRO] Faltam dados.')
    } else {
        ress.innerHTML = 'Contando: <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p <= 0){
            window.alert('Passo Invalido. Considerando passo 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
             for(var c = i; c <= f; c += p){
            ress.innerHTML += ` ${c} \u{1F449}`
        }
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
                ress.innerHTML += `${c} \u{1F449}`
            }
        }
        ress.innerHTML += `\u{1F3C1}`
    }
}