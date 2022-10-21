/* ==============  Mixitup Filter ========= */

let mixer = mixitup('.projects__container', {
  selectors: {
    target: '.project__item',
  },
  animation: {
    duration: 300,
  },
});

/* ==============  Contact Form ========= */

const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact_name'),
  contactEmail = document.getElementById('contact_email'),
  Message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (
    contactName.value === '' ||
    contactEmail.value === '' ||
    Message.value === ''
  ) {
    // Add and remove color
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');

    // Show message
    contactMessage.textContent = 'Write on all of the input fields';
  } else {
    // serviceID  - templateID -- #form - publicID
    emailjs
      .sendForm(
        'service_563kur5',
        'template_pngubgm',
        '#contact-form',
        '-sOjgUUE4OH5fFXKH'
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add('color-light');
          contactMessage.textContent = 'Message sent';

          // Remove message after 5seconds
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 5000);
        },
        (error) => {
          alert('OOPS! SOMETHING WENT WRONG...', error);
        }
      );
  }
};

contactForm.addEventListener('submit', sendEmail);
