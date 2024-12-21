document.getElementById('qr-form').addEventListener('submit', function(event) {

    event.preventDefault();
    generateQRCode();


});

function generateQRCode() {
    const url = document.getElementById('url-input').value;
    if (url) {
        const qrCodeContainer = document.getElementById('qr-code');
        qrCodeContainer.innerHTML = '';


        const canvas = document.createElement('canvas');
        qrCodeContainer.appendChild(canvas);
        QRCode.toCanvas(canvas, url, { width: 420, height: 420 }, function(error) {
            if (error) {
                alert("Please enter a URL/Text");
            } else {
                console.log('QR code generated successfully');

            }
        });
    } else {
        alert('Please enter a URL/Text.');
    }
}

window.addEventListener('load', () => {
    document.getElementById('url-input').value = '';
    const loaderWrapper = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loaderWrapper.classList.add('fade-out');
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 500);
    }, 1000);
});
