var valores = [ 1, 2 , 7 ,4 , 8 , 9]
valores.sort()
//console.log(valores[0])
/*
for(var pos=0;pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


