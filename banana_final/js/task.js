$(document).ready( function(){ 
    
    var arregloDeObjetos=[];
    var numeroProyecto = 1;

     // Load the Visualization API and the corechart package.
     google.charts.load('current', {'packages':['corechart']});
     
           // Set a callback to run when the Google Visualization API is loaded.
           google.charts.setOnLoadCallback(drawChart);
     
           // Callback that creates and populates a data table,
           // instantiates the pie chart, passes in the data and
           // draws it.
           function drawChart() {
     
             // Create the data table.
             var data = new google.visualization.DataTable();
             data.addColumn('string', 'Topping');
             data.addColumn('number', 'Slices');
             data.addRows([
               ['task1', 2],
               ['task2', 2],
               
             ]);
     
             // Set chart options
             var options = {'title':'Status Proyect-Task',
                            'width':400,
                            'height':300};
     
             // Instantiate and draw our chart, passing in some options.
             var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
             chart.draw(data, options);
           }

 $("button#add-task")// este es el selector
   // on espera una acción
     .on( //metodo on
          "click", // estos son los eventos que maneja el selector
    function(event){ //Función manejadora
                                                  //.val trae los valores que se captan del boton textoPost en html (cuando el usuario escribe)a nuestra función
                var taskProyect   = $("input#task_name").val(); //devuelve un String
                var taskColab     = $("input#task_collaborator").val();
                var taskDescrip   = $("textarea#task_description").val();
                var taskInicio    = $("input#task_due_date").val();
                var taskFinal     = $("input#task_due_time").val();
                
                taskProyect   = $.trim(taskProyect);// con esto (trim)quitamos los espacios en blanco a la hora de escribir en el post(para que no los tome como un post)
                taskColab     = $.trim(taskColab);
                taskDescrip   = $.trim(taskDescrip);
                taskInicio    = $.trim(taskInicio);
                taskFinal     = $.trim(taskFinal);

        if(taskProyect  !==''&& taskColab  !==''&& taskDescrip !==''&& taskInicio !==''&& taskFinal !==''){ 
        //nuestro nuevo post
            var nuevoTask ={
                numero:$('div.mi-post').length + 1,
                //numero: numeroPost,
                taskProyect:taskProyect,
                taskColab:taskColab,
                taskDescrip:taskDescrip,
                taskInicio:taskInicio,
                taskFinal:taskFinal
                };
            //todo esto es poner la información que ya recibimos del usuario y ponerla en la pagina principal al mismo tiempo

                      //.prpend organiza la informacion del #post y la regresa al idex
          $("div#post").append(//poner todo lo del html de la sección de post (todo esto es el template)


          '<div  id="mi-post' + nuevoTask.numero+'"class="col-lg-sm mi-post" style="height:auto; overflow: hidden;  border-radius: 18px; padding: 15px; margin:35px; width: 80%;">'+
          
          '<div>'+ /////TITULOS ////////////////////////////////////////////// -->
          '<h2 style="font-size: 15pt">Task :&#160' /// &#160 es para dejar un espacio en blanco
          +nuevoTask.taskProyect+'</h2>'+ 
          '<h5 style="font-size: 12pt"><b>Num :&#160</b>'
          +nuevoTask.numero+'</h5>'+
                  '</div>'+
        
                    '<div>'+ ////  DEL PROYECTO  ///////////////////////////////////////////////-->
                      '<div >'+
                        '<h5 style="font-size: 10pt"><b>Due Date :&#160</b>'+
                         '<span>'+nuevoTask.taskInicio+'</span></h5>'+
                         '<h5 style="font-size: 10pt"><b>Due Time :&#160</b>'+
                         '<span>'+nuevoTask.taskFinal+'</span></h5>'+
                         '<h5 style="font-size: 10pt"><b>Collaborators :&#160</b>'
                           +nuevoTask.taskColab+'</h5>'+
                      '</div>'+
                    '</div>'+

                    '<div>'+ //Estatus del Proyecto ///////////////////////////////// -->
                      '<h5 style="font-size: 12pt" >Description :&#160</h5>'+
                      '<p style="color: black ">'+nuevoTask.taskDescrip+'</p>'+
                    '</div>'+
        
 
          
                      '<div buttons">'+ //boton para borrar proyecto /////////////////////////////// -->
                        '<button class="btn-dark btn-sm post-delete" data-numero="'+ nuevoTask.numero +'">Delete</button>'+
                        '<button class="btn-success btn-sm">Modify</button>'+
                      '</div>'+
                '</div>'


            );

            $("input#task_name").val(''); //esta ultima acción limpia el text area
            $("input#task_collaborator").val('');
            $("textarea#task_description").val('');
            $("input#task_due_date").val('');
            $("input#task_due_time").val('');
             // esto ace referencia al boton de cerrar para que cuando clikemos en guardar tambien se cierre
             // $("button#close-post").click(); //
             //este otro es otro modo de hacer lo de cerrar la ventana
             $("div#exampleModal").modal("hide");

        } 
        else {
            alert("Write Something!");

        
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
                            
                            $("input#task_name").val(''); //esta ultima acción limpia el text area
                            $("input#task_collaborator").val('');
                            $("textarea#task_description").val('');
                            $("input#task_due_date").val('');
                            $("input#task_due_time").val('');             

   })

});