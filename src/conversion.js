document.addEventListener('DOMContentLoaded', function(){
  const calculation = document.querySelector('.total');
  const reset = document.querySelector('.clear');

  calculation.addEventListener('click' , function(){
    const principal = parseFloat((document.getElementById('input-amount').value));
    const intrest = parseInt((document.getElementById('input-intrest').value));
    const tenure = parseInt((document.getElementById('input-tenure').value));

    if (isNaN(principal) || isNaN(intrest) || isNaN(tenure)) {
      const errormsg = 'Invalid';
      document.querySelector('.error').innerHTML = `${errormsg}`
    }
    else {

      const compoundIntrest = Math.round(principal * Math.pow((1 + intrest / 100), tenure));
      document.querySelector('.principal-output').innerHTML = `Total Amount : ${compoundIntrest} /-`

      const intrestamount = compoundIntrest - principal;
      document.querySelector('.intrest-output').innerHTML = `Intrest Amount : ${intrestamount} /-`
    }

  });

  reset.addEventListener('click',function(){
    document.querySelector('.error').innerHTML = '';
    document.getElementById('input-amount').value = '';
    document.getElementById('input-intrest').value = '';
    document.getElementById('input-tenure').value = '';
    document.querySelector('.principal-output').innerHTML = '';
    document.querySelector('.intrest-output').innerHTML = '';
    document.querySelector('.emi-output').innerHTML = '';
  })
});
