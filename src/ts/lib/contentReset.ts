const emptyInput = document.querySelector<HTMLElement>('#emptyInput');
const invalidCity = document.querySelector<HTMLElement>('#invalideName');
const displayDiv = document.querySelector<HTMLDivElement>('#weatherResult');

export function clearContent() {
    const emptyInput = document.querySelector<HTMLElement>('#emptyInput');
    const invalidCity = document.querySelector<HTMLElement>('#invalideName');
    const displayDiv = document.querySelector<HTMLDivElement>('#weatherResult');
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
    if (displayDiv.innerHTML != '') {
        displayDiv.innerHTML = '';
    }
}

export function onfocusReset() {
    const city = (<HTMLInputElement>document.getElementById('city'));
    city.onfocus = function(): void {
    city.value=''; 
    emptyInput.style.display = 'none';
    invalidCity.style.display = 'none';
}

}