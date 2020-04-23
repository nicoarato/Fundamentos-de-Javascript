const prod1 = 'Pizza',
    precio1 = 30,
    prod2 = 'Hamburguesa',
    precio2 = 40;

let html;


//forma vieja
// html = '<ul>' +
//     '<li> Orden: ' + prod1 + '</li>' +
//     '<li> Orden: ' + precio1 + '</li>' +
//     '<li> Orden: ' + prod2 + '</li>' +
//     '<li> Orden: ' + precio2 + '</li>' +
//     '<li> Total: ' + (precio1 + precio2) + '</li>' +
//     '</ul>';

html = `
    <ul>
        <li>Orden: ${prod1}</li>
        <li>Precio: ${precio1}</li>
        <li>Orden: ${prod2}</li>
        <li>Precio: ${precio2}</li>
        <li>Total: ${total(precio1,precio2)}</li>
`;

function total(p1, p2) {
    return p1 + p2;
}

document.getElementById('app').innerHTML = html;