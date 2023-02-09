const city = document.querySelector<HTMLInputElement>('#city');
const emptyInput = document.querySelector<HTMLElement>('#emptyInput');

export const validation = function (): boolean {
    if (city.value === ''){
        emptyInput.style.display = 'block';
        return false;
    }
    return true;
}
