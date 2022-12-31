export function showEmptyError() {
    const emptyInput = document.querySelector<HTMLElement>('#emptyInput');
    emptyInput.style.display = 'block';
}

export function showInvalidError() {
    const invalidCity = document.querySelector<HTMLElement>('#invalideName');
    invalidCity.style.display = 'block';

}