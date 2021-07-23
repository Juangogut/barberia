document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  mostrarServicios();
}

async function mostrarServicios() {
  try {
    const resultado = await fetch("./servicios.json");
    const db = await resultado.json();
    const { servicios } = db;
    //Generar HTML
    servicios.forEach((servicio) => {
      const { id, nombre, precio } = servicio;

      //DOM Scripting
      //Generar el nombre deñ servicio
      const nombreServicio = document.createElement('P');
      nombreServicio.textContent = nombre;
      nombreServicio.classList.add("nombre-servicio");

      //Generar el precio del servicio
      const precioServicio = document.createElement('P');
      precioServicio.textContent = `$ ${precio}`;
      precioServicio.classList.add("precio-servicio");

      //Generar el contenedor de servicios
      const servicioDiv = document.createElement('DIV');
      servicioDiv.classList.add('servicio');
      servicioDiv.dataset.idServicio = id;

      //Selecciona un servicio para la cita
      servicioDiv.onclick = seleccionarServicio;

      //Inyectar Nombre y Precio al DIV de servicio
      servicioDiv.appendChild(nombreServicio);
      servicioDiv.appendChild(precioServicio);

      
     //Inyectar en HTML
     document.querySelector('#servicios').appendChild(servicioDiv);

    });
  } catch (error) {
    console.log(error);
  }
}

function seleccionarServicio(e){
  let elemento;
  //forzar que el elemento seleccionado sea el DIV
  if(e.target.tagName === 'P'){
    elemento = e.target.parentElement;
  }else{
    elemento = e.target;
  }

  if(elemento.classList.contains('seleccionado')){
    elemento.classList.remove('seleccionado');
  }else{
    elemento.classList.add('seleccionado');
  }

 
}
