//empty input validation
//invalid input validation
//invalid input should trigger after fetch data return error
//verify if there is local storage for default city
//if yes, replace city = localstorage and pass into url constructor 
const city = (<HTMLInputElement>document.getElementById('city'));
const emptyInput = document.getElementById('emptyInput');

export const validation = function (): boolean {
    if (city.value === ''){
        emptyInput.style.display = 'block';
        return false;
    }
    return true;
}

let defaultCity: string = 'wollongong';
let userDefaultCity = localStorage.getItem("defaultCity");
if (userDefaultCity == 'null'){
    userDefaultCity == defaultCity;
}
export {userDefaultCity};