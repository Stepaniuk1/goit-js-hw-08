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
  const infoFromeLocal = localStorage.getItem('feedback-form-state');
  // console.log(infoFromeLocal);
  const formState = infoFromeLocal
    ? JSON.parse(infoFromeLocal)
    : { email: '', message: '' };

  emailElement.value = formState.email;
  messageElement.value = formState.message;
}

infoDownload();

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
