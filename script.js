 
 let listItem1=document.querySelector('.listItem1');
let listItem2=document.querySelector('.listItem2');


let exchangeInfo=document.querySelector('#exchange-info')

let countryListArr=Object.keys(countryList);
// let value1="USD";
// let value2="PKR";

for(let item of countryListArr){
        listItem1.insertAdjacentHTML('beforeend',
            `<option value="${item}">${item}</option>`
        )
        listItem2.insertAdjacentHTML('beforeend',
            `<option value="${item}">${item}</option>`
        )
}



function fetchData(){
    let value1=listItem1.value;
    let value2=listItem2.value;
    let inputValue=document.querySelector('#amount');
 let amountValue=inputValue.value;
 if(amountValue==="" || amountValue<1){
    inputValue.value="1"
    amountValue=1
 }
let url=`https://v6.exchangerate-api.com/v6/9f5e6d42449a0c05ba034fa4/latest/${value1}`
fetch(url)
.then(res=>res.json())
.then((data)=>{

exchangeInfo.textContent=`${amountValue}${value1} = ${((data.conversion_rates
[value2])*(amountValue)).toFixed(2)}${value2}`
})
}




listItem1.addEventListener('change',(e)=>{
    e.preventDefault()
        let value1=e.target.value;
        let value;
        if(countryList.hasOwnProperty(value1)){
             value=countryList[value1]
        }
        listItem1.parentElement.firstElementChild.src=`https://flagsapi.com/${value}/flat/64.png`
        fetchData();
})
listItem2.addEventListener('change',(e)=>{
    e.preventDefault()

        let value2=e.target.value;
        let value;
        if(countryList.hasOwnProperty(value2)){
            value=countryList[value2]
        }
        listItem2.parentElement.firstElementChild.src=`https://flagsapi.com/${value}/flat/64.png`
        fetchData();
})
// console.log(value1);
