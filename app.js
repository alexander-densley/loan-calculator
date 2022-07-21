//Listen for submit

document.getElementById('loan-form').addEventListener('submit', calculateResults)

function calculateResults(e){
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
        
    }

    e.preventDefault()
}