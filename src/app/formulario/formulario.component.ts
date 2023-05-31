import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = ''; // Variable para almacenar el nombre del formulario
  email: string = ''; // Variable para almacenar el email del formulario
  isFormValid: boolean = false; // Variable para verificar si el formulario es válido

  // Método que se ejecuta cuando se realiza un cambio en los campos de entrada
  onInputChange() {
    this.isFormValid = this.nombre !== '' && this.email !== '';
    // Actualiza la variable isFormValid para habilitar o deshabilitar el botón de envío
  }

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      console.log('Formulario enviado');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);

      // Abre una nueva ventana con los datos del formulario
      const nuevaVentana = window.open('', '_blank');
      if (nuevaVentana) {
        nuevaVentana.document.write(`
          <!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <title>Bootstrap demo</title>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
            </head>
            <body>
              <div class="container">
                <h2>Datos del formulario</h2>
                
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Email:</strong> ${this.email}</p>
              </div>
        
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
            </body>
          </html>
        `);
      } else {
        console.error('No se pudo abrir la nueva ventana');
      }
    }
  }
}
