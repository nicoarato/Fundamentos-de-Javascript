let enlaces = document.querySelectorAll('#principal a:nth-child(odd)')

enlaces.forEach(function(impares) {
    impares.style.background = 'red';
    impares.style.color = 'white';
});

// enlaces[0].style.background = 'blue';
console.log(enlaces);