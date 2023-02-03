// program to generate random strings

function rsg1(){
    const Text = document.getElementById('x').innerHTML
    const result = Math.random().toString(36).substring(2,12);
    document.getElementById("x").innerHTML = result
}

/*
function rsg2(){
    const Text = document.getElementById('x').innerHTML
    const result = Math.random().toString(36).substring(2,17);
    document.getElementById("x").innerHTML = result
}

function rsg3(){
    const Text = document.getElementById('x').innerHTML
    const result = Math.random().toString(36).substring(2,22);
    document.getElementById("x").innerHTML = result
}
*/