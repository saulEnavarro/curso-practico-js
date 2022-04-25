const prelista= [
    100,
    200,
    1,
    7654,12,089090,
    756,432,2,268,
    300,
    500, 
    600,
    4000000
]

function comparar ( a, b ){ return a - b; }

const lista=prelista.sort(comparar)

const mitadLista=parseInt(lista.length/2);


function espar(numero){

    if (numero%2===0) {
        return true
    }else{
        return false
    }
}

let mediana;

if (espar(lista.length)) {
    const val1=lista[mitadLista-1]
    const val2=lista[mitadLista]
    const promedio=CalcularMedianaAritmetica([val1,val2])
    mediana=promedio;
}else{
    mediana=lista[mitadLista]
}


function CalcularMedianaAritmetica(lsita_array){
/*     let sumLista=0

    for (let index = 0; index < lsita_array.length; index++) {
         sumLista+= lsita_array[index];
    } */
    //REDUCE: nos permite ir sumando cada uno de los elemetos uno a uno
    const sumaLista=lsita_array.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento
        }
    )
    const promedioLista=sumaLista/lsita_array.length;
    return promedioLista
}



