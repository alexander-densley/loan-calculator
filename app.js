//Listen for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'block'
    setTimeout(calculateResults, 2000)

    e.preventDefault();
})

function calculateResults(){
    console.log('Calculationg')
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monPay = document.getElementById('monthly-payment')
    const totalPay = document.getElementById('total-payment')
    const totInt = document.getElementById('total-interest')

    const principle = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthlyPayment = (principle*x*calculatedInterest)/(x-1)

    if(isFinite(monthlyPayment)){
        monPay.value = monthlyPayment.toFixed(2)
        totalPay.value = (monthlyPayment * calculatedPayments).toFixed(2);
        totInt.value = ((monthlyPayment * calculatedPayments) - principle).toFixed(2);
        document.getElementById('results').style.display = 'block'
        document.getElementById('loading').style.display = 'none'


    }
    else {
        showError('Please check your numbers')
    }

}

function showError(error){

    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'none'
    const errDiv = document.createElement('div');
    
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    
    errDiv.className = 'alert alert-danger'
    errDiv.appendChild(document.createTextNode(error))

    card.insertBefore(errDiv, heading)
    
    setTimeout(clearError, 3000)
}

function clearError(){
    document.querySelector('.alert').remove();
}