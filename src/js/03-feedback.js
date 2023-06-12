import throttle from 'lodash.throttle';

const formELement = document.querySelector(`.feedback-form`);
const emailElement = document.querySelector(`input[type="email"]`);
const messageElement = document.querySelector(`textarea`);

const infoToLocal = throttle(() => {
  const formState = {
    email: emailElement.value,
    message: messageElement.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

function infoDownload() {
  const { email = '', message = '' } = JSON.parse(
    localStorage.getItem('feedback-form-state') || '{}'
  );
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  emailInput.value = email;
  messageInput.value = message;
}

emailElement.addEventListener(`input`, infoToLocal);
messageElement.addEventListener(`input`, infoToLocal);

formELement.addEventListener(`submit`, event => {
  event.preventDefault();
  const formObj = {
    email: emailElement.value,
    message: messageElement.value,
  };

  console.log(formObj);

  localStorage.removeItem('feedback-form-state');
  emailElement.value = '';
  messageElement.value = '';

  formELement.reset();
});
