$(document).ready(function () {
    
        //console.clear();

        $("button#log").on( "click", function(event){   
                                                             
                     var loginEmail    = $("input#login_email").val(); 
                     var loginPassword = $("password#login_Password").val();
    
                     loginEmail    = $.trim(loginEmail);
                     loginPassword = $.trim(loginPassword);
                           
             if(loginEmail !=='' && loginPassword !==''){ 
             //nuestro nuevo post
                 var newLogin ={
                     numero:$('div.mi-post').length + 1,
                     loginEmail:loginEmail,
                     loginPassword:loginPassword,
                     };
       
                 $("input#login_email").val(''); //esta ultima acción limpia el text area
                 $("password#login_Password").val('');
                  // esto ace referencia al boton de cerrar para que cuando clikemos en guardar tambien se cierre
                  // $("button#close-post").click(); //
                  //este otro es otro modo de hacer lo de cerrar la ventana
                  $("button#cancel-post").modal("hide");
       
             } 
             else {
                 alert("Write Something!");
       
                 $("input#login_email").val('');
                 $("password#login_Password").val('');
             }
       
        });

        $("button#cancel-post" //En que contenedor lo vamos a buscar, en donde se in
    ).on("click", //Evento a validar
                 "button.cancel-post", //Botón o elemento a validar
                 function(event){ //Función manejadora
                  
                    $("input#login_email").val('');
                    $("password#login_Password").val('');          

})











    
        $('button#sendUsuario').on("click", function (event) {
    
    
            $.ajax({
                url: "http://localhost:8084/BananaSourceCode/UsuarioServlet",
                type: "POST",
                data: getUser(),
                contentType: "application/json",
                dataType: "json"
            })
                    .done(function (data) {
                        console.log(data);
                    })
                    .fail(function (data) {
                        console.log(data);
                        console.log("Error");
                    })
                    .always(function (data) {
    
                    });
    
        });
    });
    
    function getUser() {
    
        var formulario = document.forms['formUsuario'];
    
        var jsonUsuario = new Object();
        jsonUsuario.nombre = formulario['nombre'].value;
        jsonUsuario.apellido = formulario['apellido'].value;
        jsonUsuario.codigo = formulario['codigo'].value;
        jsonUsuario.departamento = formulario['departamento'].value;
        jsonUsuario.email = formulario['email'].value;
        jsonUsuario.password = formulario['password'].value;
    
        console.log(JSON.stringify(jsonUsuario));
    
        return JSON.stringify(jsonUsuario);
    }