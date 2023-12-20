const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelect = document.querySelector(".currency-select")


function convertValues () {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  console.log(currencySelectFrom.value)
  console.log(currencySelect.value)
  
  const poundsToday = 6.19
  const ieneToday = 0.034
  const euroToday = 5.31
  const dolarToday = 5.2

  const convertedValue = inputCurrencyValue / dolarToday



  //if(currencySelectFrom.value == "dolar" && currencySelect.value == "real"){
    //const convertedValueBr = inputCurrencyValue * dolarToday;
    //currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
     // style: "currency",
     // currency: "BRL"
   // }).format(convertedValueBr)
   // currencyValueConverted.innerHTML = `US$ ${convertedValueBr.toFixed(2)} (R$ ${formattedValueBRL})`;
  
 //}

 
 //currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
  //style: "currency",
  //currency: "USD"
//}).format(inputCurrencyValue)

    

  if(currencySelect.value == "dolar"){
    const convertedValue = inputCurrencyValue / dolarToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(convertedValue)
  } else if (currencySelect.value == "euro") {
    const convertedValue = inputCurrencyValue / euroToday
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(convertedValue)
  } else if(currencySelect.value == "libra") {
    const convertedValue = inputCurrencyValue / poundsToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(convertedValue)
    }else if(currencySelect.value == "iene") {
      const convertedValue = inputCurrencyValue / ieneToday
      currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(convertedValue)

  }



  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)



  console.log(convertedValue)

  


}



convertButton.addEventListener("click", convertValues)






















