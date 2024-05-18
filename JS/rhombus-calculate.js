
function calculateRhombusArea (){

    const rhombusInput1 = document.getElementById('rhombus-input-1');
    const rhombusInput1Text = rhombusInput1.value;
    const d1 = parseFloat(rhombusInput1Text);
    console.log(d1);

    const rhombusInput2 = document.getElementById('rhombus-input-2');
    const rhombusInput2Text = rhombusInput2.value;
    const d2 = parseFloat(rhombusInput2Text);
    console.log(d2);

    const rhombusArea = 0.5 * d1 * d2;
    console.log('Rhombus Area is:', rhombusArea);

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;
    
}