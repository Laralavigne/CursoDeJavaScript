
function contar() {
    var ini =document.getElementById('txti') //inicialização
    var fim = document.getElementById('txtf') //fim
    var pass = document.getElementById('txtp') //passo
    var res = document.getElementById('res') //resultado

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = `Impossível contar`
        //window.alert('[ERRO] Faltam Dados!')
       
    } else {
       res.innerHTML = 'contando: <br>' 
        
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p= Number(pass.value)
        if (p <=0) {
            window.alert(`Passo inválido! considerando PASSO 1`)
            p = 1
        }

        if( i < f) {
            //contagem crescente
        for (var c = i; c <= f; c += p) {
           res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //contagem regressiva
            for(var c = i; c >=f; c -= p ){
                res.innerHTML += ` ${c} \u{1f449}`
            }     
        }
        res.innerHTML +=`\u{1f3c1}`
    }
}