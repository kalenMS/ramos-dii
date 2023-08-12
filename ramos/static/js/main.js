function malla_check(value) {
  $.ajax({
    url: '/ramo_query/' + value + '/',
    method: 'GET',
    success: function(response) {
      console.log(response.ramos_info)
      // response.ramos123
      // dentro de un for, ie for ramos in ramos_info:
      
      selector = document.getElementById('ramo_select');
                              
      // Se crea el elemento option para añadirlo al final del ramos select
      var option = document.createElement("option");
      // id para crear la 2da funcion que se encarga de obtener los comentarios del ramo
      option.value = response.ramos_info.codigo;
      // Nombre que se muestra en el selector de ramos
      option.innerText = response.info.nombre;

      selector.appendChild(option);
      // fin del for

    },
    error: function(xhr, errmsg, err) {
      console.log('Error en la solicitud Ajax: ' + err);
    }
  });
}