//Helpers

function espar(numero){
    return (numero%2===0)
}
//Calculadora de medianas

function mediaSalary(lista){
    const mitad = parseInt(lista.length/2);
    if(espar(lista.length)){
        const mitad1 = lista[mitad-1]
        const mitad2 = lista[mitad]

        return (mitad1+mitad2)/2
    }else{
        const personaMitad=lista[mitad]
        return personaMitad
    }
}

//Mediana General

const salaryCol=colombia.map(
    function(persona){
        return persona.salary
    }
)
const salaryColSort=salaryCol.sort(
    function(a,b){
        return a-b
    }
)
const colmedSalary = mediaSalary(salaryColSort);
//Mediana del 10 %


const splicestart= ((salaryColSort.length*90)/100)
const splicend = salaryColSort.length-splicestart

const colmediatopSalary= salaryColSort.splice(splicestart,splicend)

const coltopmedSalary = mediaSalary(colmediatopSalary);



console.log({
    colmedSalary,
    coltopmedSalary
}
)