
function printTable(){
    
    let numInput = document.querySelector(`#numInput`).value

    for( let i = 0; i < 10; i++){

        console.log(`${numInput} x ${i+1} = ${numInput * (i+1)}`)

    }
}