const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const button = document.querySelector('button');


const socket = io();



socket.on('connect', () => {
    button.disabled = false;
});

socket.on('disconnect', () => {
    button.disabled = true;
});

socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.innerText = 'Ticket ' + ultimo;
});

button.addEventListener( 'click', () => {
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerText = ticket;
    });
});