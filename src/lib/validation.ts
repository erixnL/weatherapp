const city = (<HTMLInputElement>document.getElementById('city'));
const emptyInput = document.getElementById('emptyInput');

export const validation = function (): boolean {
    if (city.value === ''){
        emptyInput.style.display = 'block';
        return false;
    }
    return true;
}
