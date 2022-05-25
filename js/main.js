let comp = prompt("¿Quieres conocer el mayor, menor, múltiplo de 2, Mútiplo de 3 o si el 3° es la suma del 1° y el 2°?","mayor menor mul2 mul3 suma");
let a,b,c;

switch (comp) {

// 1.-Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor

    case "mayor":
        a=prompt("Ingresa el Pirmer Número", "");
        if(a>100){
            a=prompt("Que sea menor al 100, mijo :)", "");
        }
        b=prompt("Ingresa el Segundo Número", "");
        if(b>100){
            a=prompt("Que sea menor al 100, mijo :)", "");
        }
        c=prompt("Ingresa el Tercer Número", "");
        if(c>100){
            a=prompt("Que sea menor al 100, mijo :)", "");
        }
        if(a<b){//paso 1
            if(b>c){//paso 2
                alert(b+" es el mayor UNO");
            }else{
                alert(c+" es el mayor DOS");
            }
        }else if(a>c){//paso 3
            alert(a+" es el mayor TRES");
        }else{
            alert(c+" es el mayor FOUR");
        }
    break;

// 2.-Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números

    case "menor":
        a=prompt("Ingresa el Pirmer Número", "");
        if(a>100){
            a=prompt("Que sea menor al 100, mijo :)", "");
        }
        b=prompt("Ingresa el Segundo Número", "");
        if(b>100){
            a=prompt("Que sea menor al 100, mijo :)", "");
        }
        c=prompt("Ingresa el Tercer Número", "");
        if(c>100){
            a=prompt("Que sea menor al 100, mijo :)", "");
        }
        alert("No eres Michael Jackson, ¿Verdad...?");
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
        if((a<100)||(a>200)){
            a=prompt("Pon atención, paps. Te doy otra oportunidad: ", "");
        }
        if(a%3 == 0){
            alert("El número "+a+" sí es múltiplo de 3");
        }else{
            alert("El número "+a+" NO es múltiplo de 3");
        }
    break;    

// 5.-Elaborar un algoritmo para leer 3 números y determinar si uno es la suma de los otros dos

    case "suma":
        a=prompt("Ingresa el Pirmer Número", "");
        b=prompt("Ingresa el Segundo Número", "");
        c=prompt("Ingresa el Tercer Número", "");
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
        console.log("En algo la cagaste");    
        break;

//6.-Elabora un algoritmo para leer un número y determinar si es par o impar
        
        case "mul2":
            a=prompt("Ingresa un número: ", "");
            if(a%2 == 0){
                alert("El número "+a+" es par");
            }else{
                alert("El número "+a+" NO es par");
            }
        break;

        default:
        alert("¿Entonces para qué me ejecutas?");
        break;
}