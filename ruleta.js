function numrandom (a,b) {
    return (Math.floor(Math.random() * (b-a+1))+a)%37;
}
function numtotal(a, b) {
    return (Math.floor(Math.random() * (b-a+1))+a);
}

 

cont=0;
while (cont<10) {
    num=numrandom (185,370);
    rand=numtotal(400,700);
    console.log("Numero de la ruleta:"+num);
    console.log("Valor aleatorio: "+rand)
    cont+=1
    console.log("Numero de intento/s: "+cont);
    console.log("----------------------------------------");
}