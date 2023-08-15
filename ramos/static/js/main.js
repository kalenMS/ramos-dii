function list_function(value) {
  var selector = document.getElementById('ramo_select');
  // Limpiar el selector antes de agregar nuevas opciones
  selector.innerHTML = '';

  let ramo_select = $('#ramo_select')
  ramo_select.append($('<option />').val("").text("Seleccione su opción"));
  let ramo_select_option = $('#ramo_select option[value=""]')
  ramo_select_option.prop("selected", "selected");
  ramo_select_option.prop("disabled", "disabled");
  ramo_select_option.prop("hidden", "hidden");
  ramo_select_option.prop("style", "text-align: center");
  {
    $.ajax({
      url: '/ramo_query/' + value + '/',
      method: 'GET',
      success: function (response) {
        for (const ramos of response.ramos_name) {
          selector = document.getElementById('ramo_select');
          // Se crea el elemento option para añadirlo al final del ramos select
          var option = document.createElement("option");
          // id para crear la 2da funcion que se encarga de obtener los comentarios del ramo
          option.value = ramos.id;
          // Nombre que se muestra en el selector de ramos
          option.innerText = ramos.codigo + " " + ramos.nombre;
          selector.appendChild(option);
        }
      },
      error: function (xhr, errmsg, err) {
        console.log('Error en la solicitud Ajax: ' + err);
      }
    });
  }
}

function content_function(value) {
  var selector = document.getElementById('content_ramos');
  // Limpiar el selector antes de agregar nuevas opciones
  selector.innerHTML = '';
  {
    $.ajax({
      url: '/content_query/' + value + '/',
      method: 'GET',
      success: function (response) {
        for (const contenido of response.ramos_info) {
          selector = document.getElementById('content_ramos');
          var p = document.createElement("p");
          p.innerText = contenido.comentario;
          selector.appendChild(p);
        }
      }
    });
  }
}
