const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento=100-descuento;

const precioConDescuento=(precioOriginal*porcentajePrecioConDescuento)/100

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = (100-descuento)/100;
    const precioConDescuento= precio*porcentajePrecioConDescuento;
    return precioConDescuento;
} 

function calcularDescuento(){

    const inpPrice = document.getElementById("inputPrice")
    const ValuePrice= inpPrice.value;
    
    const inpDesc= document.getElementById("inputDiscount")
    const ValueDiscount=  inpDesc.value;   
    
    const PrecioConDesc=calcularPrecioConDescuento(ValuePrice,ValueDiscount)
    const ResultP=document.getElementById("ResultP")
    ResultP.innerHTML="El precio con descuento son $"+PrecioConDesc
}
