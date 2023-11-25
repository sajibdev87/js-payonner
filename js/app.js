document.getElementById("Deposit-button").addEventListener('click',function (){
          // after click get the input from the input field
          const DepositInputField =document.getElementById('Deposit-input');
          const depositInputText =DepositInputField.value
          if(parseFloat(depositInputText)<=0){
                    return alert('please provide more then 0')     
          }
           // get the previous deposite and update deposite total 
          const previousDepositeTotal =document.getElementById('Deposit-total');
          const depositText =previousDepositeTotal.innerText
          const totalDeposit = parseFloat(depositInputText) + parseFloat(depositText)
          previousDepositeTotal.innerText=totalDeposit;

          // balance update
          const previousBalance =document.getElementById('Balance-total');
          const previousBalanceText = previousBalance.innerText;
          const newBalance = parseFloat(previousBalanceText) + parseFloat(depositInputText);
          previousBalance.innerText=newBalance
        
          // clear the input Field
          DepositInputField.value='';
         
          
})

document.getElementById('Withdraw-button').addEventListener('click',function(){
          const WithdrawInputField = document.getElementById('Withdraw-input');
          const WithdrawInputText =WithdrawInputField.value;
          const WithdrawInputNumber = parseFloat(WithdrawInputText)
          if(WithdrawInputNumber<=0){
                    return alert('please provide more then 0')
          }

          const previousWithdrawTotal =document.getElementById('Withdraw-total');
          const previousWithdrawTotalText =previousWithdrawTotal.innerText;
          const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalText); 

          const newWithdrawTotal =WithdrawInputNumber + previousWithdrawTotalNumber;
          previousWithdrawTotal.innerText=newWithdrawTotal


          const previousBalance =document.getElementById('Balance-total');
          const previousBalanceText = previousBalance.innerText;
          const previousBalanceNumber = parseFloat(previousBalanceText)
          const newBalance=  previousBalanceNumber -WithdrawInputNumber;
          previousBalance.innerText =newBalance

          WithdrawInputField.value = '';

})