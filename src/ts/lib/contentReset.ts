const emptyInput = document.querySelector<HTMLElement>('#emptyInput');
const invalidCity = document.querySelector<HTMLElement>('#invalideName');
const displayDiv = document.querySelector<HTMLDivElement>('#weatherResult');

export function clearContent() {
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
    if (displayDiv.innerHTML != '') {
        displayDiv.innerHTML = '';
    }
}

export function onfocusReset() {
    const city = (<HTMLInputElement>document.querySelector<HTMLInputElement>('#city'));
    city.onfocus = function() {
    city.value=''; 
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
}

}