import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

fillInForm();

refs.form.addEventListener('submit', handleFormOnSubmit);
refs.form.addEventListener('input', throttle(handleFormOnInput, 500));

function handleFormOnSubmit(e) {
  e.preventDefault();

  if (refs.email.value === '' || refs.textarea.value === '') {
    alert('Please fill in all the fields');
  } else {
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  }
}

function handleFormOnInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillInForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (localStorage.getItem(STORAGE_KEY)) {
    // Розгалуження що йдуть нижче потрібні для того, аби у відповідні поля форми не записувалося undefined, якщо в локальному сховищі не зберглися їхні value

    if (savedData.email) {
      refs.email.value = savedData.email;
      formData[refs.email.name] = refs.email.value;
    }
    if (savedData.message) {
      refs.textarea.value = savedData.message;
      formData[refs.textarea.name] = refs.textarea.value;
    }
  }
}
