                /* NOTES HERE */
/*
        Script Output Doesn't Work As I Wanted 
        When Running In A Function With Other
        InnerHTML Functions.. Will Fix Later!

*/

window.onload = (event) => {
    /*
    document.getElementById("Enable").innerHTML = "Nothing Is Needed To Be Re-Enabled"
    document.getElementById('Enable').style.backgroundColor = '#ccc';
    document.getElementById('Enable').style.color = 'black';
    document.getElementById('Enable').disabled = true;
    */

    const Text = document.getElementById('OText').innerHTML
  };
  
function FunButton(){
    const Text = document.getElementById('OText').innerHTML
    alert("You clicked me!")
    document.getElementById("Fun").innerHTML = "You Clicked Me..."
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button InnerHTML Set To 'You Clicked Me...'";
    document.getElementById('Fun').style.backgroundColor = '#ccc';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Background Color Set To '#ccc'";
    document.getElementById('Fun').style.color = 'black';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Color Set To 'black'";
    document.getElementById("Fun").disabled = true;
}

function EnableButton(){
    const Text = document.getElementById('OText').innerHTML
    alert("Re-enabling The Button!")
    document.getElementById('OText').innerHTML = Text + "<br> " + "Sent An Alert";
    document.getElementById("Fun").innerHTML = "Click For Fun"
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button InnerHTML to 'Click For Fun'";
    document.getElementById('Fun').style.backgroundColor = '#f01414';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Background Color Set To '#f01414'";
    document.getElementById('Fun').style.color = 'white';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Color Set To 'white'";
    document.getElementById("Fun").disabled = false;
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Was Re-enabled";
}

function ColorChangeEnter(){
    const Text = document.getElementById('OText').innerHTML
    document.getElementById('Color').style.backgroundColor = '#ccc';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Background Color Set To '#ccc'";
    document.getElementById('Color').style.color = 'black';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Color Set To 'black'";
}

function ColorChangeLeave(){
    const Text = document.getElementById('OText').innerHTML
    document.getElementById('Color').style.backgroundColor = '#f01414';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Background Color Set To '#f01414'";
    document.getElementById('Color').style.color = 'white';
    document.getElementById('OText').innerHTML = Text + "<br> " + "Button Color Set To 'white'";
}

function OutTest(){
    const Text = document.getElementById('OText').innerHTML
    document.getElementById('OText').innerHTML = Text + "<br> " + "This Is A Test Message";
}

function TabTest(){
    openedWindow = window.open('https://example.com');
}

function UnTabTest(){
    openedWindow.close();
}

/* 
function xoox(){
    myWindow = window.open("", "myWindow", "width=200, height=100");
    myWindow.innerHTML = "<h1>hi</h1>";
}
*/