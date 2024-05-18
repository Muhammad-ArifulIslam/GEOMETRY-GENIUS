
function calculatePentagonArea (){

    const PentagonAreaPInput = document.getElementById ('pentagon-p');
    const PentagonAreaPText = PentagonAreaPInput.value;
    const p = parseFloat(PentagonAreaPText);
    console.log(p);

    const PentagonAreaBInput = document.getElementById ('pentagon-b');
    const PentagonAreaBText = PentagonAreaBInput.value;
    const b = parseFloat(PentagonAreaBText);
    console.log(b);

    const PentagonArea = 0.5 * p * b; 
    console.log('Pentagon Area is :', PentagonArea);

    const PentagonAreaSpan = document.getElementById('pentagon-area');
    PentagonAreaSpan.innerText = PentagonArea;

}