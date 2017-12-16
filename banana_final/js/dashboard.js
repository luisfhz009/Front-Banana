$(document).ready( function(){ 
  
  var arregloDeObjetos=[];
  var numeroProyecto = 1;

//-----$ este signo indica que vamos a trabajar con el DOM (aquí buscamos un id #add-post especificando primero que esta dentro de un button)
$("button#add-post")// este es el selector
 // on espera una acción
   .on( //metodo on
        "click", // estos son los eventos que maneja el selector
  function(event){ //Función manejadora
                                                //.val trae los valores que se captan del boton textoPost en html (cuando el usuario escribe)a nuestra función
              var postProyect   = $("input#proyect_name").val(); //devuelve un String
            //var postEncargado = $("input#nombreEncargado").val();
              var postDescrip   = $("textarea#proyect_description").val();
              var postInicio    = $("input#proyect_start_date").val();
              var postFinal     = $("input#proyect_final_date").val();
              
              postProyect   = $.trim(postProyect);// con esto (trim)quitamos los espacios en blanco a la hora de escribir en el post(para que no los tome como un post)
            //postEncargado = $.trim(postEncargado);
              postDescrip   = $.trim(postDescrip);
              postInicio    = $.trim(postInicio);
              postFinal     = $.trim(postFinal);

      if(postProyect !=='' && postDescrip !==''&& postInicio !==''&& postFinal !==''){ 
      //nuestro nuevo post
          var nuevoPost ={
              numero:$('div.mi-post').length + 1,
            //numero: numeroPost,
              postProyect:postProyect,
            //postEncargado:postEncargado,
              postDescrip:postDescrip,
              postInicio:postInicio,
              postFinal:postFinal
              };
          //todo esto es poner la información que ya recibimos del usuario y ponerla en la pagina principal al mismo tiempo

                    //.prpend organiza la informacion del #post y la regresa al idex
        $("div#post").append(//poner todo lo del html de la sección de post (todo esto es el template)


        '<div  id="mi-post' + nuevoPost.numero+'"class="col-3 mi-post proyectos">'+
        
        '<div class="title3">'+ /////TITULOS ////////////////////////////////////////////// -->
        '<h5 class="title4"><b>Proyect Name:</b></br><span class="title2">'
        +nuevoPost.postProyect+'</span></h5>'+ 
        '<h5 class="title4"><b>Proyect :</b></br><span class="title2">'
        +nuevoPost.numero+'</span></h5>'+
                '</div>'+
      
                  '<div class="title3">'+ ////FECHAS DEL PROYECTO ////////////////////////////////////////////////-->
                    '<div Style="float:left;">'+
          '<h5 class="title4"><b>Start Date:</b></br>'+
                      '<span class="title2">'+nuevoPost.postInicio+'</span></h5>'+
                       '<h5 class="title4"><b>End Date:</b></br>'+
                       '<span class="title2">'+nuevoPost.postFinal+'</span></h5>'+
                    '</div>'+
                  '</div>'+
      
                    '<div class="title5">'+ //Estatus del Proyecto ///////////////////////////////// -->
                      '<p class="title4">Description:</p>'+
                      '<textarea class="title2">'+nuevoPost.postDescrip+'</textarea>'+
                    '</div>'+
        
                    '<div buttons">'+ //boton para borrar proyecto /////////////////////////////// -->
                      '<button class="btn btn-dark btn-sm post-delete" data-numero="'+ nuevoPost.numero +'">Drop</button>'+
                      '<a href="task.html"><button class="btn btn-info btn-sm"style="float:right;">Admin</button></a>'+
                    '</div>'+
              '</div>'

          );

          $("input#proyect_name").val(''); //esta ultima acción limpia el text area
        //$("input#nombreEncargado").val('');
          $("textarea#proyect_description").val('');
          $("input#proyect_start_date").val('');
          $("input#proyect_final_date").val('');
           // esto ace referencia al boton de cerrar para que cuando clikemos en guardar tambien se cierre
           // $("button#close-post").click(); //
           //este otro es otro modo de hacer lo de cerrar la ventana
           $("div#exampleModal").modal("hide");

      } 
      else {
          alert("Write Something!");

          $("input#proyect_name").val(''); //esta acción limpia despues de que te muestra la alerta para que puedas escribir en limpio de nuevo
        //$("input#nombreEncargado").val('');
          $("textarea#proyect_description").val('');
          $("input#proyect_start_date").val('');
          $("input#proyect_final_date").val('');
      }

 });
 //Creamos aquí otro evento para darle una función al botón que creamos para borrar un post
 $("div#post" //En que contenedor lo vamos a buscar, en donde se in
            ).on("click", //Evento a validar
                         "button.post-delete", //Botón o elemento a validar
                         function(event){ //Función manejadora
                               //console.log("Te vas a ir!");
                               //$("div.mi-post").remove();
                               //$(this).parent();
                        if(confirm("Are you shure?")){   
                           var numero = $(this).data("numero");
                           
                           var miId = "div#mi-post" + numero;

                           //console.log(miId);
                           $(miId).remove();
                        }

 })
 $("button#close-post" //En que contenedor lo vamos a buscar, en donde se in
            ).on("click", //Evento a validar
                         "button.close-post", //Botón o elemento a validar
                         function(event){ //Función manejadora
                          
                          $("input#proyect_name").val(''); //esta ultima acción limpia el text area
                        //$("input#nombreEncargado").val('');
                          $("textarea#proyect_description").val('');
                          $("input#proyect_start_date").val('');
                          $("input#proyect_final_date").val('');             

 })

});