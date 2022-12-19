const city = (<HTMLInputElement>document.getElementById('city'));
const emptyInput = document.getElementById('emptyInput');

const validation = function  formValidate() {
    if (city.value === ''){
        emptyInput.style.display = 'block';
        return false;
    }

    return true;

}

export {validation}; 