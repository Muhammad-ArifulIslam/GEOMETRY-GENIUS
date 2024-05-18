

function calculateParallelogramArea (){

    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);

    const parallelogramArea = base * height;
    console.log('Area of the triangle is:', parallelogramArea);

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;


}






// function calculateParallelogramArea (){

//     const base = getInputValueById('parallelogram-base');

// }


// function getInputValueById (inputFieldId){

//     const inputField = document.getElementById(inputFieldId);
//     console.log(inputField);



// }


















