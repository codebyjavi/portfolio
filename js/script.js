const copyButton = document.getElementById('copy-btn');
const userOutput = document.getElementById('userOutput');
const tooltip = document.querySelector('.tooltip');

copyButton.addEventListener('click', copyPassword);
copyButton.addEventListener('focusout', resetTooltip);

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
