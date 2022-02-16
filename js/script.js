document.getElementById('calculate').addEventListener('click',function(){
    const income = getValue('income');
    const expense = getValue('rent') + getValue('food')+ getValue('clothes');

    // negative input error checking 
    if(income>0 && expense>0){

        // expense error checking 
        if(expense<income){
        document.getElementById('total').innerText = expense;
        document.getElementById('balance').innerText = income - expense;
        }
        else{
            alert("Can't spend more then income");
        }
    }
    else{
        alert("wrong input given!!")
    }

})


// input string to number function 
function getValue(id){
    return parseFloat(document.getElementById(id).value)
}