
function display(val)
{
    document.getElementById("displayResult").value +=val;
 }
 
//function for evaluation
function solve()
{

    //Grabs the value from the element
    let x = document.getElementById("displayResult").value;

    //Checks to see if you've already put a calculation inside.
    if ( x == "")
    {
        // alert("Please insert a number first");
        return;
    }
    else{
        document.getElementById("previousResult").value = x;
        
        let y = eval(x);
        
        document.getElementById("displayResult").value = y;
    }
}

//function for clearing the display
function clr()
{
    document.getElementById("displayResult").value = "";
    document.getElementById("previousResult").value = "";
}