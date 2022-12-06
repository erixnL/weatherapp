const invalidCity = document.getElementById('invalideName');
const displayDiv = document.getElementById('weatherResult');

const clearContent = function clearContent() {
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
    if (displayDiv.innerHTML != '') {
        displayDiv.innerHTML = '';
    }
}

export {clearContent};