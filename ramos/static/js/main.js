
// Función que agrega los ramos correspondientes a malla[v5], electivo o especialidad a la lista desplegable
function list_function(value) {

  // Limpiar el selector antes de agregar nuevas opciones
  var selector = document.getElementById('ramo_select');
  selector.innerHTML = '';

  // Crear una opción por defecto con propiedades y diseño antes de agregar los ramos
  let $ramo_select = $('#ramo_select');
  $ramo_select.append($('<option />').val("").text("Seleccione su opción"));
  let $ramo_select_option = $('#ramo_select option[value=""]');
  $ramo_select_option.prop("selected", "selected");
  $ramo_select_option.prop("disabled", true); // Deshabilitar la opción por defecto
  $ramo_select_option.prop("hidden", true); // Ocultar la opción por defecto
  $ramo_select_option.css("text-align", "center"); // Aplicar estilo centrado

  // Realizar una solicitud AJAX para obtener los ramos
  $.ajax({
    url: '/ramo_query/' + value + '/',
    method: 'GET',
    success: function (response) {
      // Iterar a través de la lista de ramos obtenidos
      for (const ramos of response.ramos_name) {
        // Obtener el elemento del selector de ramos
        selector = document.getElementById('ramo_select');

        // Crear un nuevo elemento de opción
        var option = document.createElement("option");
        // Establecer el valor (id del ramo)
        option.value = ramos.id;
        // Establecer el texto que se mostrará en el selector (código y nombre del ramo)
        option.innerText = ramos.codigo + " " + ramos.nombre;

        // Agregar la opción al selector de ramos
        selector.appendChild(option);
      }
    },
    error: function (xhr, errmsg, err) {
      console.log('Error en la solicitud Ajax: ' + err);
    }
  });

}

// Función para obtener información de un ramo y actualizar elementos HTML en la página con dicha información.
function content_function(value) {

  // Obtener referencias a los elementos HTML que se van a actualizar
  var selector = document.getElementById('titulo-ramo');
  var selector2 = document.getElementById('comentarios');
  var selector3 = document.getElementById('profesores');
  var selector4 = document.getElementById('dificultad');
  var selector5 = document.getElementById('tiempo');


  // Limpiar el contenido del selector antes de agregar nuevas opciones
  selector.innerHTML = '';
  selector2.innerHTML = '';
  selector3.innerHTML = '';
  selector4.innerHTML = '';
  selector5.innerHTML = '';

  
  $.ajax({
    url: '/content_query/' + value + '/',
    method: 'GET',
    success: function (response) {

      // Contador para llevar la cuenta de elementos procesados
      var conteo = 0

      // Agregar el título del ramo
      selector = document.getElementById('titulo-ramo');
      var h2 = document.createElement("h2");
      h2.innerText = response.codigo_ramo + " " + response.nombre_ramo;
      selector.appendChild(h2);

      // Link ucursos profesores
      selector2 = document.getElementById("profesores");
      var a = document.createElement('a');
      a.href = "https://www.u-cursos.cl/ingenieria/2/encuestas_institucion/resumen_persona?id=6572f3602160e31ad10470aa8b8e82b1";
      a.target = "_blank";
      a.innerText = "U-cursos";
      selector2.appendChild(a);

      // Variables para calcular la dificultad y el tiempo promedio
      var total_dif = 0
      var total_tiempo = 0

      // Iterar a través de los datos de 'response.ramos_info'
      for (const contenido of response.ramos_info) {
        conteo = conteo + 1
        total_dif = total_dif + contenido.dificultad
        total_tiempo = total_tiempo + contenido.tiempo

        // Agregar comentarios al elemento 'comentarios'
        selector = document.getElementById('comentarios');
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");

        p1.style = "font-weight: bold;"
        p1.innerText = contenido.fecha;
        p2.innerText = contenido.comentario;
        selector.appendChild(p1);
        selector.appendChild(p2);

      }

      // Calcular y agregar la dificultad promedio
      selector3 = document.getElementById('dificultad');
      var p = document.createElement("p");
      p.style = "text-align: center;margin-bottom:auto;";
      p.innerText = total_dif / conteo + "/5" + " (" + conteo + ")";
      selector3.appendChild(p);

      // Calcular y agregar el tiempo promedio
      selector4 = document.getElementById('tiempo');
      var p2 = document.createElement("p");
      p2.style = "text-align: center;margin-bottom:auto;";
      p2.innerText = total_tiempo / conteo + "/5" + " (" + conteo + ")";
      selector4.appendChild(p2);
    },
    error: function (xhr, errmsg, err) {
      console.log('Error en la solicitud Ajax: ' + err);
    }
  });

}


// Función para cambiar al tema oscuro
const darktheme = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.querySelector("#icono").setAttribute("d", "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z")
  document.querySelector(".subencabezado").setAttribute("class", "subencabezado_dark");
}

// Función para cambiar al tema claro
const lighttheme = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "light");
  document.querySelector("#icono").setAttribute("d", "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z")
  document.querySelector(".subencabezado_dark").setAttribute("class", "subencabezado");
}

// Función para cambiar entre temas oscuro y claro
const changetheme = () => {
  document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
    darktheme() : lighttheme();
}
