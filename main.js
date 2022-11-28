const key = '969b2ddf4e224eccb47230525222711';
const error = document.getElementById('errorMsg');
const form = document.querySelector('form');
const displayDiv = document.getElementById('displayResult');

document.getElementById('city').onfocus=function(){
    this.value=''; 
    error.innerHTML = "";
}

form.addEventListener('submit', e=>{
    e.preventDefault();
    formValidate();
    clearContent();
    const cityName = document.getElementById('city').value;
    if (formValidate()) {
        const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}&aqi=no`;
        fetch(url).then(response=> response.json()).then(data => {
        console.log(data);
        const p = document.createElement('p');
        const textContent = `
                <img src=${data.current.condition.icon}>${data.current.condition.text}<span class="tem"> ${data.current.temp_c} &#8451;</span>
                <h2 class="city-name">${data.location.name}, ${data.location.country}</h2><br>
                <br>
                ` ;
        p.innerHTML = textContent;
        displayDiv.appendChild(p);
            })
            .catch(() => {
                error.innerHTML = "<font color='red'>Please search for a valid city</font> 😩";
              });
        } 

    }

)

function  formValidate() {
    const cityName = document.getElementById('city').value;
    if (cityName == ""){
        error.innerHTML = "<font color='red'>*City name must be identified.</font>";
        return false;
    }
    return true;

}

function clearContent() {
    if (error.innerHTML != ""){
        error.innerHTML = "";
    }
    if (displayDiv.innerHTML != "") {
        displayDiv.innerHTML = "";
    }
}