let comp = prompt("¿Quieres conocer el mayor, menor, múltiplo de 2, Mútiplo de 3 o si el 3° es la suma del 1° y el 2° o si quieres que lo adivine?","mayor menor mul2 mul3 suma adivinar");
let a,b,c,res;
console.log((50%2));
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

//3.-

/*
Realizar un algoritmo para adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

1.-Preguntar si el número es par o impar
2.-Preguntar si el número es de 1 solo dígito
3.1.-Si el paso 2 es verdadero y en base a la respuesta del paso 1:
    3.1.-para par preguntar si es mayor o menor a 5 e ir descartando los números con el mismo procedimiento
    3.2.-Para impar preguntar si es mayor o menor a 6 e ir descartando los números con el mismo procedimiento
4.-Si el paso 2 es falso y en base al paso 1
    4.1.-Para impares, preguntar si el número es mayor o menor a 50 y seguir dividiendo por mitad el número (ej. 24, 74, 14, 86, etc.) hasta encontrar el número
    4.2.-Para pares, preguntar si el número es mayor o menor a 51 y seguir dividiendo por mitad el número (ej. 25, 75, 13, 85, etc.) hasta encontrar el número
*/
    case "adivinar":
        /*function adivinar(){
	let superior = 100;
	let inferior = 0;
	let noEncontrado = true;
	while(noEncontrado){
		let mid = parseInt( inferior + ((superior-inferior)/2));
		if((superior-inferior)/2)<1){
			noEncontrado = false;
			alert("Tu número es el "+(parseInt(mid)+1));
			break;
		}
		let res = confirm("Tu número es menor o igual a "+mid");
		if(res){
			superior=mid;
		}else{
			inferior=mid;
		}
	}
}
*/
        a=prompt("Ingresa un número entero entre 100 y 200. Por ahora solo enteros! :) : ", "");
        a=parseFloat(a);
        while((a<1)||(a>100)){
            a=prompt("Pon atención, paps. Te doy otra oportunidad: ", "");
        }
        let ask=50;
        let flag;
        let z=prompt("¿Es tu número par o impar?", "par impar");
        if(z=="par"){
            cmpr(ask);
        }else if(z=="impar"){
            ask=51;
            cmpr(ask);
        }
        function cmpr(ask){
            if( ask==a){
                z=prompt("Tu número es: "+ask+" ?", "si no");
                if(z="si"){
                    alert("¡Sospeché desde un principio que "+ask+" era tu número!");
                    flag=false;
                }else if(z="no"){
                    alert("Deberías ir a que te chequen la cabeza");
                    flag=false;
                }
            }
if(flag!=false){     
            let w,x,y;       
            if( (ask%2) >0 ){
                while(ask!=a){
                    z=prompt("¿Tu número es mayor a "+ask+" ?", "si no");// Paso 1
                    if( (z=="si") && (z<101) ){
                        w++;
                        console.log("Epale W"+w);
                        ask+=10;
                        z=prompt("¿Tu número es mayor a "+ask+" ?", "si no");
                    }else if( (z=="no") && (ask!=10) ){
                        x++;
                        console.log("Epale X"+x);
                        ask-=10;
                    }else if((z=="no")&&(ask==10)){
                        ask-2;
                        y++;
                        console.log("Epale Y"+y);
                        z=prompt("¿Tu número es mayor a "+ask+" ?", "si no");
                    }
                }
                console.log(ask);
                cmpr(ask);	
            }else if( (ask%2) == 0){
                while(ask!=a){
                    z=prompt("¿Tu número es mayor a "+ask+" ?", "si no");
                    if(z=="si"){
                        ask+=10;
                        z=prompt("¿Tu número es mayor a "+ask+" ?", "si no");
                        
                    }else if(z=="no"){
                        ask-=10;

                    }
                }
                console.log(ask);
                cmpr(ask);
            }
            return(ask);
        }
    }        
        // console.log("No puemde ser");
        //     if(a==aux){
        //         console.log("Compara el número con aux");
        //         ask=prompt("¿Tu número es el "+aux+" ?");
        //         if(ask==true){
        //             alert("Lo sospeché desde un principio");
        //         }
        //     }else{
        //     console.log("¿Por qué demonios entraste aquí?");    
        //         while((ask==true)&&(aux>100)){
        //             ask=alert("¿Es tu número mayor a "+aux+"?");
        //             aux+10;
        //             console.log("HeeHee");
        //         }    
        //     } 
    break;

/*
let num;
while(isNan(num) || (num<1||num>100)){
    num = parsInt(prompt("Escribe un número entre el 1 y el 100 ",""));
    console.log(num);
}
*/

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
