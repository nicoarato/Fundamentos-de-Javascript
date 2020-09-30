const notificationBtn = document.querySelector('#notificar');

notificationBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(resultado);
        })
});