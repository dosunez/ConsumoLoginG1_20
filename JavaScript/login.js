
var UrlApiGetAll = 'http://localhost:5001/login/getall';
var UrlApiGetOne = 'http://localhost:5001/login/:Codigo-login';
var UrlApiInsert = 'http://localhost:5001/login/insertar';

$(document).ready(function(){
    cargarlogin();
});

function cargarlogin(){
    $.ajax({
     url: UrlApiGetAll,
     type: 'GET',
     datatype: 'JSON',
     success: function(response){
         var Data= response;
         var Valores = '';
 
         for(i=0; i < Data.length; i++)
         {
             Valores +=
                    '<tr>' +
                    '<td>' + Data[i].codigo_usuario + '</td>' +
                    '<td>' + Data[i].nombre + '</td>' +
                    '<td>' + Data[i].apellido + '</td>' +
                    '<td>' + Data[i].password + '</td>' +
                    '<td>' + Data[i].email + '</td>' +
                    '<td>' + Data[i].estado + '</td>' +
                    '<td>' + Data[i].fecha_hora_ingreso + '</td>' +
                    '<td>' + Data[i].password_expira + '</td>' +
                    '<td>' + Data[i].dias_caducidad_password + '</td>' +
                    '<td>' + Data[i].rol + '</td>' +
                    '<td>' + Data[i].numero_intentos_incorrectos + '</td>' +
                    '<td>' + Data[i].fecha_registro + '</td>' +
                    '</tr>';
             $('#Login').html(Valores);
         }
 
     }
 
    });
 } 

 function agregar(){
    var datoslogin =  {
        codigo_usuario: $('#codigo_usuario').val(),
        nombre: $('#nombre').val(),
        apellido: $('#apellido').val(),
        password: $('#password').val(),
        email: $('#email').val(),
        estado: $('#estado').val(),
        fecha_hora_ingreso: $('#fecha_hora_ingreso').val(),
        password_expira: $('#password_expira').val(),
        dias_caducidad_password: $('#dias_caducidad').val(),
        rol: $('#rol').val(),
        numero_intentos_incorrectos: $('#numero_intentos_incorrectos').val(),
        fecha_registro: $('#fecha_registro').val()
    };
    
    var datosloginjson = JSON.stringify(datoslogin);
    
    $.ajax({
        url: UrlApiInsert,
        type: 'POST',
        data : datosloginjson,
        datatype: 'JSON',
        contentType: 'application/json',
        success: function(response){
            alert('Usuario ingresado Correctamente');
            $('#Miformulario').submit();      
        },
        error : function(textError, errorThrown){
           alert('Error:' + textError + errorThrown);
        }
    
        });
    
    }