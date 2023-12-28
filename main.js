 const amountInput=document.querySelector("#amount");
 const firstOption=document.querySelector("#firstCurrencyOption");
 const secondOption=document.querySelector("#secondCurrencyOption");
 const resultInput=document.querySelector("#result");

 const currency = new Currency()
 runEventListener()

 function runEventListener(){
    amountInput.addEventListener("input",change);
    firstOption.addEventListener("change",change);
    secondOption.addEventListener("change",change)
}

function change(){
    const amount=Number(amountInput.value.trim())
    const firstOptionValue=firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue=secondOption.options[secondOption.selectedIndex].textContent;

    currency.exchange(amount,firstOptionValue,secondOptionValue)
    .then(res=>resultInput.value=res.toFixed(3))
}