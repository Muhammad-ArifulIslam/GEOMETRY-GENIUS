
function calculateEllipseArea (){

    const ellipseAreaInput = document.getElementById('ellipse-area');
    const ellipseAreaText = ellipseAreaInput.value;
    const area = parseFloat(ellipseAreaText);
    console.log(area);

    const ellipseBaseInput = document.getElementById('ellipse-base');
    const ellipseBaseText = ellipseBaseInput.value;
    const base = parseFloat(ellipseBaseText);
    console.log(base);

    const ellipseArea = 0.5 * area * base;
    console.log('Ellipse Area is:', ellipseArea);

    const ellipseAreaSpan = document.getElementById('ellipse-span');
    ellipseAreaSpan.innerText = ellipseArea;
    
}