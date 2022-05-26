let comp = prompt("¿Quieres conocer el mayor, menor, múltiplo de 2, Mútiplo de 3 o si el 3° es la suma del 1° y el 2°?","mayor menor mul2 mul3 suma");
let a,b,c,res;
function mayor(a,b,c){
    if(a<b){//paso 1
        if(b>c){//paso 2
            alert(b+" es el mayor");
        }else{
            alert(c+" es el mayor");
        }
    }else if(a>c){//paso 3
        alert(a+" es el mayor");
    }else{
        alert(c+" es el mayor");
    }
}

switch (comp) {

// 1.-Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor

    case "mayor":
        a=prompt("Ingresa el Pirmer Número", "");
        if((a>100)||(a<1)){
            a=prompt("Que sea entre 1 y 100, mijo :)", "");
        }
        b=prompt("Ingresa el Segundo Número", "");
        if((b>100)||(b<1)){
            b=prompt("Que sea entre 1 y 100, mijo :)", "");
        }
        c=prompt("Ingresa el Tercer Número", "");
        if((c>100)||(c<1)){
            c=prompt("Que sea entre 1 y 100, mijo :)", "");
        }
        a=parseFloat(a);
        b=parseFloat(b);
        c=parseFloat(c);
        console.log(typeof(a,b,c));
        console.log(a,b,c);
        mayor(a,b,c);

        /*
        if(a<b){//paso 1
            if(b>c){//paso 2
                alert(b+" es el mayor");
            }else{
                alert(c+" es el mayor");
            }
        }else if(a>c){//paso 3
            alert(a+" es el mayor");
        }else{
            alert(c+" es el mayor");
        }
        */
    break;

// 2.-Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

    case "menor":
        alert("No eres Michael Jackson, ¿Verdad...?");
        a=prompt("Ingresa el Pirmer Número", "");
        if((a>100)||(a<1)){
            a=prompt("Que sea entre 1 y 100, mijo :)", "");
        }
        b=prompt("Ingresa el Segundo Número", "");
        if((b>100)||(b<1)){
            b=prompt("Que sea entre 1 y 100, mijo :)", "");
        }
        c=prompt("Ingresa el Tercer Número", "");
        if((c>100)||(c<1)){
            c=prompt("Que sea entre 1 y 100, mijo :)", "");
        }
        a=parseFloat(a);
        b=parseFloat(b);
        c=parseFloat(c);
        if(a>b){//paso 1
            if(b>c){//paso 2
                alert(c+" es el menor");
            }else{
                alert(b+" es el menor");
            }
        }else if(a>c){//paso 3
            alert(c+" es el menor");
        }else{
            alert(a+" es el menor");
        }
    break;

// 4.-Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

    case "mul3":
        a=prompt("Ingresa un número entero entre 100 y 200: ", "");
        a=parseFloat(a);
        if((a<100)||(a>200)){
            a=prompt("Pon atención, paps. Te doy otra oportunidad: ", "");
        }
        if(a%3 == 0){
            alert("El número "+a+" SÍ es múltiplo de 3");
        }else{
            alert("El número "+a+" NO es múltiplo de 3");
        }
    break;    

// 5.-Elaborar un algoritmo para leer 3 números y determinar si uno es la suma de los otros dos

    case "suma":
        a=prompt("Ingresa el Pirmer Número", "");
        b=prompt("Ingresa el Segundo Número", "");
        c=prompt("Ingresa el Tercer Número", "");
        a=parseFloat(a);
        b=parseFloat(b);
        c=parseFloat(c);
        if( (a>b) && (a>c) ){
            res=b+c;
            if(a==res){
                alert(a+" es la suma de "+b+" + "+c);
            }else{
                alert(a+" NO es la suma de "+b+" + "+c);
            }
        }else if( (b>a) && (b>c) ){
            res=a+c;
            if(b==res){
                alert(b+" es la suma de "+a+" + "+c);
            }else{
                alert(b+" NO es la suma de "+a+" + "+c);
            }
        }else if( (c>a) && (c>b) ){
            res=a+b;
            if(c==res){
                alert(c+" es la suma de "+b+" + "+a);
            }else{
                alert(c+" NO es la suma de "+a+" + "+b);
            }
        }    
        /*
        if(a>b){//Paso 1
            console.log("Paso 1");
            if(a>c){//paso 3
                console.log("Paso 3");
                if((b+c)==a){//paso 4
                    console.log("Paso 4");
                    alert(a+" es igual a la suma de "+b+" y "+c);
                }else{
                    alert(a+" NO es igual a la suma de "+b+" y "+c);
                }
                }else if((a+b)==c){
                    alert(c+" es igual a la suma de "+a+" y "+b);
                }else{
                    alert(c+" NO es igual a la suma de "+a+" y "+b);
                    
                }
        }else if(b>c){
            if((a+c)==b){
                alert(b+" es igual a la suma de "+a+" y "+c);
            }else{ 
                alert(b+"NO es igual a la suma de "+a+" y "+c);
                
            }    
        }
        */    
        break;

//6.-Elabora un algoritmo para leer un número y determinar si es par o impar
        
        case "mul2":
            a=prompt("Ingresa un número: ", "");
            a=parseFloat(a);
            if(a%2 == 0){
                alert("El número "+a+" SÍ es múltiplo de 2");
            }else{
                alert("El número "+a+" NO es múltiplo de 2");
            }
        break;

        default:
        alert("¿Entonces para qué me ejecutas?");
        break;
}