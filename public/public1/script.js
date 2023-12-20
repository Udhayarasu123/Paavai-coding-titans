
const socket = io();

document.querySelectorAll('.crop-button1').forEach(button => {
  button.addEventListener('click', () => {
    const cropId = button.id;
    socket.emit('activateIrrigation1', { cropId });
  });
});

document.querySelectorAll('.crop-button2').forEach(button => {
  button.addEventListener('click', () => {
    const cropId = button.id;
    socket.emit('activateIrrigation2', { cropId });
  });
});

document.querySelectorAll('.crop-button4').forEach(button => {
  button.addEventListener('click', () => {
    const cropId = button.id;
    socket.emit('deactivateIrrigation', { cropId });
  });
});

document.querySelectorAll('.button1').forEach(button => {
  button.addEventListener('click', () => {
    const cropId = button.id;
    socket.emit('activateIrrigation11', { cropId });
  });
});

document.querySelectorAll('.button2').forEach(button => {
  button.addEventListener('click', () => {
    const cropId = button.id;
    socket.emit('deactivateIrrigation', { cropId });
  });
});




