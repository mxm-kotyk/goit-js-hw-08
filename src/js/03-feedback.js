import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};
let formData = {};
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
    Object.keys(formData).forEach(key => (formData[key] = ''));
  }
}

function handleFormOnInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillInForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (localStorage.getItem(STORAGE_KEY)) {
    formData = savedData;

    for (const key in formData) {
      refs.form.elements[key].value = formData[key];
    }
  }
}
