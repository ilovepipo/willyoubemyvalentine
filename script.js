function showMessage(response) {
    const resultMessage = document.getElementById('resultMessage');
    if (response === 'No') {
        resultMessage.textContent = `please choose yes :3 `;
    }
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const offsetX = Math.floor(Math.random() * 200) - 100;
    const offsetY = Math.floor(Math.random() * 200) - 100;
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function showLovePopup() {
    Swal.fire({
        title: 'I love you Pipoo <3',
        text: 'For being my Valentine. You make my heart happy.',
        icon: null, // Set the icon to null
        confirmButtonText: 'Close',
        confirmButtonColor: '#ff4d6d', /* Rose color */
    });
}
