<form id="appointmentForm">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <input type="tel" name="phone" placeholder="Phone Number">
  <input type="date" name="preferredDate">
  <textarea name="message" placeholder="Reason for visit"></textarea>
  <button type="submit">Request Appointment</button>
</form>

<script>
document.getElementById('appointmentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  
  console.log('Form submitted:', formProps);
  alert('Appointment request submitted successfully (Demo Mode)');
  // Clear form fields
  e.target.reset();
});
</script>