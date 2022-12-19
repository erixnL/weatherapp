const invalidCity = document.getElementById('invalideName');
const displayDiv = document.getElementById('weatherResult');
const emptyInput = document.getElementById('emptyInput');

const clearContent = function clearContent(): void {
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
    if (displayDiv.innerHTML != '') {
        displayDiv.innerHTML = '';
    }
}

export {clearContent};