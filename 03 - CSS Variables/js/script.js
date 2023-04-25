const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){ 
    //busca data-sizing y si no hay devuelve valor vacio
    const suffix = this.dataset.sizing || '';
    //establece nuevas propiedades al css
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//el evento change se activa al cambio de valores despues del desenfoque
inputs.forEach(input => input.addEventListener('change', handleUpdate));
//el evento mousemove se activa al movimiento del cursor
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
//lo mejor es que vayan ambas escuchas para matener actualizada la información de la interfaz