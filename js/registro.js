const cuerpotabla = document.getElementById('tableData');
let i = 1;
const jsonData = [];
let users= [];

const registros = () => {
  const nombre = document.getElementById('username').value.trim();
  const edad = document.getElementById('Age').value.trim();
  const telefono = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('pass').value.trim();

  // Verificar si algún campo está vacío
  if (nombre === '' || edad === '' || telefono === '' || email === '' || password === '') {
    alert('Por favor, complete todos los campos.');
    return; // Salir de la función si falta algún dato
  }

  // Verificar si ya existe una fila con los mismos datos
  const rows = cuerpotabla.querySelectorAll('tr');
  for (const row of rows) {
    const cells = row.querySelectorAll('td');
    if (cells.length === 5) { // Verificar que sea una fila con datos de usuario
      const existingNombre = cells[0].innerText.trim();
      const existingEdad = cells[1].innerText.trim();
      const existingTelefono = cells[2].innerText.trim();
      const existingEmail = cells[3].innerText.trim();
      const existingPassword = cells[4].innerText.trim();
      
      if (nombre == existingNombre || telefono === existingTelefono || email === existingEmail) {
        alert('Los datos ingresados ya existen en la tabla.');
        return; // Salir de la función si los datos ya existen
      }
    }
  }

  // Agregar los datos a la tabla
  cuerpotabla.innerHTML += `<tr><th scope="row">${i}</th><td>${nombre}</td><td>${edad}</td><td>${telefono}</td><td>${email}</td><td>${password}</td></tr>`;

  // Crear un objeto JSON y agregarlo al arreglo
  const data = { "id": i, "nombre": nombre, "edad": edad, "telefono": telefono, "email": email, "password": password };
  jsonData.push(data);

  users.push(data);

  // Incrementar el contador
  i++;
};


const listarUsuarios = () => {
  let usuariosHTML = '';
  // Recorrer el arreglo jsonData y construir la cadena HTML
  for (let i = 0; i < users.length; i++) {
    usuariosHTML += `<tr><th scope="row">${i + 1}</th><td>${users[i].nombre}</td><td>${users[i].edad}</td><td>${users[i].telefono}</td><td>${users[i].email}</td><td>${users[i].password}</td></tr>`;
  }

  // Actualizar el contenido de la tabla con la cadena HTML construida
  cuerpotabla.innerHTML = usuariosHTML;
};
