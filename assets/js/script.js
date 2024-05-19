const OperationNameEl=document.getElementById("operationName");
const OperationAmountEl=document.getElementById("operationAmount");
const OperationBtnEl=document.querySelector(".save-btn");
const ProfitBoxEl =document.getElementById("profitbox");
const ExpenseBoxEl =document.getElementById("lossbox");
const BalanceBoxEl =document.getElementById("balance");
let OperationListEl=document.querySelector(".operation-list");


let Profit=0
let Expense=0

function HandleOperation(){
    let OperationNameValue=OperationNameEl.value;
    let OperationAmountValue=OperationAmountEl.value;


    if(OperationAmountValue>0){
        Profit=Profit + OperationAmountValue;
    }else{
        Expense=Expense + OperationAmountValue;
    }
    ProfitBoxEl.innerText =`$${Profit}`
    ExpenseBoxEl.innerText=`$${Expense}`
    console.log(`Bizim qazancimiz ${Profit}`)
    console.log(`Bizim xercimiz ${Expense}`)
    CalculateTotalProfit()
    AddOperationToOperationList(OperationNameValue,OperationAmountValue)
}

function CalculateTotalProfit (){
    const TotalProfit=Profit - Expense;
    BalanceBoxEl.innerText=`$${TotalProfit}`;
}


function AddOperationToOperationList(title,amount){
    OperationListEl.innerText += `
    <li class="operation-item profit-box">
      <button class="remove-btn">X</button>
      <span>${title}</span>
      <span>${amount}</span>
    </li>

    `
}
function HandleRemoveOperation(){
    const RemoveBtnsEl = document.querySelectorAll(".remove-btn")
    RemoveBtnsEl.forEach(function(RemoveBtn){
        RemoveBtn.addEventListener("click",function(){
            alert("silindi")
        })
    })
}
OperationBtnEl.addEventListener("click",HandleOperation)