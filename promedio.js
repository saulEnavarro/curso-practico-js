const lista=[
    100,
    200,
    300,
    500,
]

function CalcularMediaAritmetica(lsita_array){
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



