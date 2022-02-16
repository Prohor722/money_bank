
// input string to number function 
function getValue(id){
    let text = document.getElementById(id).value;
    
    //blank input error
    if(text == ""){
        text= 0;
    }
    return parseFloat(text);
}

// Total and balance calculation
document.getElementById('calculate').addEventListener('click',function(){
    const income = getValue('income');
    const rent = getValue('rent');
    const food = getValue('food');
    const clothes = getValue('clothes');
    const expense = rent + food + clothes;

    // negative input error checking 
    if(income>=0 && expense>=0 && food>=0 && rent>=0 &&clothes>=0){

        // expense error checking 
        if(expense<=income){
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

document.getElementById('save-btn').addEventListener('click',function(){
    const percent = getValue('save')/100;
    const income = getValue('income');
    const balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText);
    const savingAount = income*percent;

    // Negative percent error 
    if(percent>=0){

        // saving more then balance 
        if(balanceValue>=savingAount){
            document.getElementById('savingAmount').innerText = savingAount;
            document.getElementById('remaningAmount').innerText = balanceValue-savingAount;
        }
        else{
            alert('Not sufficient balance!!');
        }
    }
    else{
        alert('Please enter correct Value');
    }
})