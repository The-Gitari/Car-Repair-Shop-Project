// Get references to the form and form fields
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const carMakeInput = document.getElementById('car-make');
const carModelInput = document.getElementById('car-model');
const serviceTypeInput = document.getElementById('service-type');
const appointmentDateInput = document.getElementById('appointment-date');
const appointmentTimeInput = document.getElementById('appointment-time');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();
  
  // Get the values of the form fields
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const carMake = carMakeInput.value;
  const carModel = carModelInput.value;
  const serviceType = serviceTypeInput.value;
  const appointmentDate = appointmentDateInput.value;
  const appointmentTime = appointmentTimeInput.value;
  
  // Create a new appointment object
  const appointment = {
    name: name,
    email: email,
    phone: phone,
    carMake: carMake,
    carModel: carModel,
    serviceType: serviceType,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentTime
  };
  
  // Send the appointment data to the server
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/appointments');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Appointment successfully added
      alert('Appointment successfully scheduled!');
      form.reset();
    } else {
      // Error adding appointment
      alert('Error scheduling appointment. Please try again later.');
    }
  };
  xhr.send(JSON.stringify(appointment));
});
