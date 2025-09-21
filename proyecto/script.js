document.addEventListener('DOMContentLoaded', () => {
    console.log('Professional website loaded successfully.');

    document.getElementById('giftButton').addEventListener('click', () => {
        const message = document.getElementById('giftMessage');
        message.style.display = 'block';
    });
});