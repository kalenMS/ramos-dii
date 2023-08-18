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
  var selector = document.getElementById('titulo-ramo');
  var selector2 = document.getElementById('comentarios');
  var selector3 = document.getElementById('profesores');
  var selector4 = document.getElementById('dificultad');
  var selector5 = document.getElementById('tiempo');
  
  
  // Limpiar el selector antes de agregar nuevas opciones
  selector.innerHTML = '';
  selector2.innerHTML = '';
  selector3.innerHTML = '';
  selector4.innerHTML = '';
  selector5.innerHTML = '';
  {
    $.ajax({
      url: '/content_query/' + value + '/',
      method: 'GET',
      success: function (response) {
        // titulos
        selector = document.getElementById('titulo-ramo');
        var h2 = document.createElement("h2");
        h2.innerText = value;
        selector.appendChild(h2);

        // Link ucursos profesores
        selector2 = document.getElementById("profesores");
        var a = document.createElement('a');
        a.href = "https://www.u-cursos.cl/ingenieria/2/encuestas_institucion/buscar";
        a.target = "_blank";
        a.innerText = "U-cursos";
        selector2.appendChild(a);

        // dificultad
        selector3 = document.getElementById('dificultad');
        var p = document.createElement("p");
        p.style = "text-align: center";
        p.innerText = "4/5";
        selector3.appendChild(p);
        
        // tiempo
        selector4 = document.getElementById('tiempo');
        var p2 = document.createElement("p");
        p2.style = "text-align: center";
        p2.innerText = "4/5";
        selector4.appendChild(p2);


        for (const contenido of response.ramos_info) {
          selector = document.getElementById('comentarios');
          var p1 = document.createElement("p");
          var p2 = document.createElement("p");

          p1.style = "font-weight: bold;" 
          p1.innerText = contenido.fecha;
          p2.innerText = contenido.comentario;
          selector.appendChild(p1);
          selector.appendChild(p2);
        }
      },
      error: function (xhr, errmsg, err) {
        console.log('Error en la solicitud Ajax: ' + err);
      }
    });
  }
}
