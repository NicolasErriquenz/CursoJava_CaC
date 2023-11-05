const valorTicket = 2000;

function calcular(){
    
    let cantidad = document.getElementById("cantidadTickets").value;
    let descuento = document.getElementById("selectDescuento").value;

    if(!cantidad || !descuento) {
        resetearForm();
        return;
    };

    let tempValue = parseInt(cantidad) * valorTicket;
    totalPago.innerHTML = (tempValue - (tempValue * descuento / 100)) + `$ ${getDescuentoString(descuento)}`;
}

btnResume.addEventListener("click", calcular);
selectDescuento.addEventListener("change", calcular);
cantidadTickets.addEventListener("input", calcular);

function resetearForm(){
    totalPago.innerHTML = '';
}

function getDescuentoString(desc){
    return desc == 0 ? "" : ` (${desc}% descuento)`;
}

btnBorrar.addEventListener("click", resetearForm);