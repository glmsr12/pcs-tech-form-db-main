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

  //Create array of strings and output values of this array to HTML content with an index of each value in the array using for loop.

  // Step 1: Create an array of different elements
  var mixedArray = [10, 'Hello', { name: 'John', age: 30 }, [1, 2, 3], true];

  // Step 2: Use a for loop to iterate through the array
  for (var i = 0; i < mixedArray.length; i++) {
    // Step 3: Access the current element and its index
    var element = mixedArray[i];

    // Step 4: Create an HTML element to display the element along with its index
    var displayText = i + ': ' + element;

    // Step 5: Append the HTML element to the output container
    var outputDiv = document.getElementById('outputContainer');
    var paragraphElement = document.createElement('p');
    paragraphElement.textContent = displayText;
    outputDiv.appendChild(paragraphElement);
  }

  // Create variable of type number and convert the value to the type of string. Output value to the HTML.

  // Step 1: Create a variable of type number
  var myNumber = 42;

  // Step 2: Convert the number to a string using the toString() method
  var myString = myNumber.toString();

  // Step 3: Output the converted value to the HTML
  var outputDiv = document.getElementById('outputContainer');
  var paragraphElement = document.createElement('p');
  paragraphElement.textContent = 'Converted value: ' + myString;
  outputDiv.appendChild(paragraphElement);
  //Create variable of type string and convert the value to the type of number. Output value to the HTML.
  // Step 1: Create a variable of type string
  var myString = '42';

  // Step 2: Convert the string to a number using the parseInt() or parseFloat() function
  var myNumber = parseInt(myString); // Use parseInt() for integers
  // var myNumber = parseFloat(myString); // Use parseFloat() for floating-point numbers

  // Step 3: Output the converted value to the HTML
  var outputDiv = document.getElementById('outputContainer');
  var paragraphElement = document.createElement('p');
  paragraphElement.textContent = 'Converted value: ' + myNumber;
  outputDiv.appendChild(paragraphElement);
}
