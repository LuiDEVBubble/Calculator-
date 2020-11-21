
function display(val)
{
    document.getElementById("displayResult").value +=val;
 }
//function for evaluation
function solve()
{

    let x = document.getElementById("displayResult").value;
    document.getElementById("previousResult").value = x;
    // if (x == null)
    // {
    //     return;
    // }
    let y = eval(x);
    
    document.getElementById("displayResult").value = y;
}
//function for clearing the display
function clr()
{
    document.getElementById("displayResult").value = "";
    document.getElementById("previousResult").value = "";
}