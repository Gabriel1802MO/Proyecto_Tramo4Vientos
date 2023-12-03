//Tercer ejemplo de uso Javascript y JSON API FETCH

// URL de tu archivo JSON en GitHub
const apiUrl = 'https://raw.githubusercontent.com/Gabriel1802MO/frutas.json/master/frutas.json';

// Función para obtener y procesar los datos
async function obtenerDatos() {
    try {
      const respuesta = await fetch(apiUrl);
  
      if (!respuesta.ok) {
        throw new Error('Error al obtener los datos');
      }
  
      const datos = await respuesta.json();
  
      // Obtener el contenedor HTML donde se agregarán los elementos
      const contenedorPrincipal = document.querySelector('.agents-grid .row');
  
      // Recorrer cada fruta en el JSON
      datos.frutas.forEach(fruta => {
        // Crear un nuevo elemento div con las clases y contenido proporcionados
        const nuevoElemento = document.createElement('div');
        nuevoElemento.className = 'col-md-4';
        nuevoElemento.innerHTML = `
          <div class="card-box-d">
            <div class="card-img-d">
              <img src="${fruta.foto}" alt="" class="img-d img-fluid">
            </div>
            <div class="card-overlay card-overlay-hover">
              <div class="card-header-d">
                <div class="card-title-d align-self-center">
                  <h3 class="title-d">
                    <a href="#" class="link-two">${fruta.nombre}<br></a>
                  </h3>
                </div>
              </div>
              <div class="card-body-d">
                <p class="content-d color-text-a">${fruta.descripcion}</p>
                <div class="info-agents color-a">
                  <p><strong>Cantidad disponible:</strong> ${fruta.cantidad}</p>
                  <p><strong>Precio:</strong> ${fruta.precio}</p>
                </div>
              </div>
            </div>
          </div>
        `;
  
        // Agregar el nuevo elemento al contenedor principal
        contenedorPrincipal.appendChild(nuevoElemento);
      });
  
    } catch (error) {
      console.error('Hubo un error:', error.message);
    }
  }
  