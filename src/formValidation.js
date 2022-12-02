const validation = function  formValidate() {
    if (city.value === ''){
        emptyInput.style.display = 'block';
        return false;
    }
    return true;

}

export {validation};