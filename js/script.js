// const themeButton = document.getElementById('theme-Btn');
const copyButton = document.getElementById('copy-btn');
const userOutput = document.getElementById('userOutput');
const tooltip = document.querySelector('.tooltip');

// themeButton.addEventListener('click', changeTheme)
copyButton.addEventListener('click', copyPassword);
copyButton.addEventListener('focusout', resetTooltip);

// function changeTheme() {
//     document.documentElement.classList.toggle('dark')
//     if (document.documentElement.classList.contains('dark')) {
//         themeButton.innerHTML = `<i class='bx bxs-sun p-3 text-neutral-200 text-4xl cursor-pointer'></i>`
//     }
//     else {
//         themeButton.innerHTML = `<i class='bx bx-moon p-3 text-neutral-200 text-4xl cursor-pointer'></i>`
//     }
// }

function copyPassword() {
    userOutput.select();
    navigator.clipboard.writeText(userOutput.value);
    window.getSelection().removeAllRanges();

    tooltip.textContent = 'Copied!';
    tooltip.parentElement.classList.add('tooltip-active');

    setTimeout(() => {
        resetTooltip();
    }, 1000);
}

function resetTooltip() {
    tooltip.parentElement.classList.remove('tooltip-active');

    // Esperar al final de la transición antes de restablecer el texto
    tooltip.addEventListener('transitionend', function transitionEnd() {
        tooltip.removeEventListener('transitionend', transitionEnd);
        tooltip.textContent = 'Copy';
    });
}



