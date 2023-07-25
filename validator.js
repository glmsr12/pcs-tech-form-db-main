function applicationSubmit() {
  var result = true;

  //First Name validation
  var fname = document.getElementById('user_firstname');
  if (fname.value == '') {
    showError('Please provide firstname', 'fname_div');
    result = false;
  }

  const pattern = /[a-zA-Z]{2,20}/;
  if (!pattern.test(fname)) {
    showError(
      'Firstname must contain only letters and be from 2 to 20 characters',
      'fname_div'
    );
    result = false;
  }
  //Last Name validation
  var lname = document.getElementById('user_lastname');
  if (lname.value == '') {
    showError('Please provide lastname', 'lname_div');
    result = false;
  }

  const pattern2 = /[a-zA-Z]{2,20}/;
  if (!pattern2.test(lname)) {
    showError(
      'Lastname must contain only letters and be from 2 to 20 characters',
      'lname_div'
    );
    result = false;

    //Phone number validation
    var phone = document.getElementById('phone');
    console.log(phone.value);
    var phone_p = /[0-9]{10}/;
    if (!phone_p.test(phone.value)) {
      showError(
        'Phone must contain only digits and have 10 characters',
        'phone_div'
      );
      result = false;
    }
    return result;
  }
  //Color selection validation
  function showError(message, div_id) {
    var error = document.createElement('div');
    error.style = 'color:red;font-size:12px;margin-bottom:10px';
    error.innerHTML = message;
    document.getElementById(div_id).appendChild(error);
  }

  //Downpayment Validation

  function downPaymentValid() {
    const downPaymentInput = document.getElementById('downpayment');
    const downPaymentValue = downPaymentInput.value;

    // Convert the input to a number
    const parsedDownPayment = parseFloat(downPaymentValue);

    // Check if the input is a valid number and within the limit
    if (
      isNaN(parsedDownPayment) ||
      parsedDownPayment < 0 ||
      parsedDownPayment >= 500
    ) {
      alert(
        'Invalid down payment. Please enter a non-negative value greater or equal to $500.'
      );
    } else {
      alert('Valid down payment.');
    }
  }

  //Delivery Date Validation
  function validateDeliveryDate() {
    const deliveryDateInput = document.getElementById('delivery_date');

    // Get the current date
    const currentDate = new Date();

    // Get the selected delivery date from the input
    const deliveryDate = new Date(deliveryDateInput.value);

    // Check if the delivery date is in the past
    if (deliveryDate < currentDate) {
      errorText.style.display = 'block';
    } else {
      errorText.style.display = 'none';
    }
  }
}
