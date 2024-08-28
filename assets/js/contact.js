document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      tel: document.getElementById('tel').value,
      message: document.getElementById('message').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwd67ssBQQnQ3YLKJ1A0dckgXgs7Zmf-ENDwILTgaAKjkBOwX6y76aom-qnxHL_vYTA/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      console.log('Success:', response);
      alert('Your message has been sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    });
  });