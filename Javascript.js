


// Importar la biblioteca QR Code
import QRCode from 'qrcode';

// Obtener el formulario y el botón de generación
const form = document.getElementById('qr-form');
const generateButton = document.getElementById('generate-button');

// Añadir un manejador de eventos al botón para generar el código QR al hacer clic
generateButton.addEventListener('click', (event) => {
  // Prevenir la acción por defecto del formulario (enviar los datos al servidor)
  event.preventDefault();
  
  // Obtener el texto a codificar del formulario
  const text = form.elements.text.value;

