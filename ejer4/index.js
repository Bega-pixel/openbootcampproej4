function numeros(num) {
    num = 15

    if (num > 0 ) {
        
        return console.log("Es un numero positivo");
    
    } else if ( num < 0 ) {
        
        return console.log("Es un numero negativo");
    
    }else {
        
        return console.log("es 0 tu numero");
    }
}

function numeroInferior(n) {
    n = 0;
    x = 0;

    while (n < 3) {
        n ++;
        x += n;

        console.log(n);

        if( n === 3) {
        break
        }
    }
}

function ejercicioTercero(i) {
    let result = '';
    i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 3);

    console.log(result.split(''));
}

function numeroFor () {
    
    let num = 1;
    for (let i = 1; i <= 3 ; i++) {   
        num *= i            
    }
    return console.log(num);
}

function estaciones() {
    switch (m) {
        case 0:
            m = "Primavera";
            break;
        case 1:
            m = "Verano";
            break;
        case 2:
            m = "Otoño";
            break;
        case 3:
            m = "Invierno";
            break;
            
        }
        console.log(m);       
}

// numeros
console.log(numeros());

// numerosInferiores
console.log(numeroInferior());

//ejercicioTercero
console.log(ejercicioTercero());

//numeroFor
console.log(numeroFor());

//estaciones
console.log(estaciones(3))
