import './style.css';
const key = '969b2ddf4e224eccb47230525222711';
const emptyInput = document.getElementById('emptyInput');
const invalidCity = document.getElementById('invalideName');
const form = document.querySelector('form');
const displayDiv = document.getElementById('weatherResult');
const city = document.getElementById('city');
document.getElementById('city').onfocus = function () {
  this.value = '';
  emptyInput.style.display = 'none';
  invalidCity.style.display = 'none';
};
form.addEventListener('submit', e => {
  e.preventDefault();
  formValidate();
  clearContent();
  if (formValidate()) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city.value}&aqi=no`;
    fetch(url).then(response => response.json()).then(data => {
      var dataSet = {
        "icon": "https://" + data.current.condition.icon.split('//')[1],
        "text": data.current.condition.text,
        "temp_c": data.current.temp_c,
        "name": data.location.name,
        "country": data.location.country
      };
      var template = document.getElementById('template').innerHTML;
      var renderedContent = Mustache.render(template, dataSet);
      displayDiv.innerHTML = renderedContent;
    }).catch(() => {
      invalidCity.style.display = 'block';
    });
  }
});
function formValidate() {
  if (city.value === '') {
    emptyInput.style.display = 'block';
    return false;
  }
  return true;
}
function clearContent() {
  emptyInput.style.display = 'none';
  invalidCity.style.display = 'none';
  if (displayDiv.innerHTML != '') {
    displayDiv.innerHTML = '';
  }
}