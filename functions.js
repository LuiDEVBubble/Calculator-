let calculator = {

    Array: [],

    Add: (par1, par2) => {
        return par1 + par2;
    },

    Subtract: (par1, par2) =>{
        return par1 - par2;
    },

    Multiply: (par1, par2) =>{
        return  par1 * par2;
    },

    Divide: (par1, par2) =>{
        return par1 / par2;
    },

    AC: () =>{
        return 0;
    }


}


function display(clicked_id){
    // alert(clicked_id);

    //value is assigned to x variable
    let x = document.getElementById(clicked_id).value;

    document.getElementById("displayResult").innerHTML = x;

}