const invalidCity = document.getElementById('invalideName');
const displayDiv = document.getElementById('weatherResult');
const emptyInput = document.getElementById('emptyInput');

export const clearContent = function clearContent(): void {
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
    if (displayDiv.innerHTML != '') {
        displayDiv.innerHTML = '';
    }
}
