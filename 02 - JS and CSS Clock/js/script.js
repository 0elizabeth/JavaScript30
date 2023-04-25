//Constante con el valor del objeto div
const sencondHand = document.querySelector('.second-hand');
const minutHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    //Toma valor del tiempo actual
    const now = new Date();
    //Toma los segundos del tiempo actual
    const seconds = now.getSeconds();
    //Variable que almaena los grados a recorrer
    const secondsDegrees = ((seconds / 60) * 360) + 90; //90 más por el angulo original del objeto
    //Movimiento del div
    sencondHand.style.transform = `rotate(${secondsDegrees}deg)`; //'deg' es la unidad de medida de grados en css

    const minuts = now.getMinutes();
    const minutsDegrees = ((minuts / 60) * 360) + 90;
    minutHand.style.transform = `rotate(${minutsDegrees})deg`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees})deg`;
    console.log(minuts);
}
setInterval(setDate,1000);
setDate();