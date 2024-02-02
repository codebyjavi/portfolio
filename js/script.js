// script.js
document.getElementById('descargarCV').addEventListener('click', function() {
    // Simular un enlace de descarga
    let link = document.createElement('a');
    link.href = 'cv-javier-gonzalez.pdf';
    link.download = 'cv-javier-gonzalez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
