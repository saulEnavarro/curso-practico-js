const lista=[
    1,
    2,1,2,1,2,2,12,1,2,3,1,2,3,4,4,3,3,4,3,3,3,2,3,,3,4,3,2,2,3,4,5,4,2,3,2,2
]


const listaCount={}

lista.map(
function(elemeto){
    if(listaCount[elemeto]){
        listaCount[elemeto]+=1
    }else{
        listaCount[elemeto]=1
    }
}
)


const listArray=Object.entries(listaCount).sort(
    function(valorAcumulado,nuevoValor){
        return valorAcumulado[1]-nuevoValor[1]
    }
    )
const moda = listArray[listArray.length-1][1];