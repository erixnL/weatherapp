const key = '969b2ddf4e224eccb47230525222711';
const emptyInput = document.getElementById('emptyInput');
const invalidCity = document.getElementById('invalideName');
const form = document.querySelector('form');
const displayDiv = document.getElementById('weatherResult');
const city = document.getElementById('city');

document.getElementById('city').onfocus=function(){
    this.value=''; 
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
}

form.addEventListener('submit', e=>{
    e.preventDefault(); 
    formValidate();
    clearContent();
    if (formValidate()) {
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city.value}&aqi=no`;
        fetch(url).then(response=> response.json()).then(data => {
            displayDiv.innerHTML = `
                    <span id='weather'><img class = 'icon' src=${data.current.condition.icon}>${data.current.condition.text}<span class='tem'> ${data.current.temp_c} &#8451;</span></span>
                    <span class='cityName'>${data.location.name}, ${data.location.country}</span>
                    ` ; 
        }).catch(() => {
            invalidCity.style.display = 'block';
        });
    }
    }
)

function  formValidate() {
    if (city.value === ''){
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