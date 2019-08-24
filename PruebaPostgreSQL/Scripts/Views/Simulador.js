$(document).ready(function () {
    $("#btnRecalcular").click(function () {

        //listaTabla

        var objetoLista = [];
        $("#recal td").find(':input').each(function () {

            var itemOrden = {};
            var todos = this;
            itemOrden.otroa = todos.value;
            objetoLista.push(itemOrden);
        });

        var objeto = {
            "nombre": $("#nombre").val(),
            "monto": $("#monto").val(),
            "plazo": $("#plazo").val(),

            "abono": $("#abono option:selected").val(),
            "frecuencia": $("#frecuencia option:selected").val(),
            "tipoCred": $("#tipoCred option:selected").val(),
            "tipoClie": $("#tipoClie option:selected").val(),
            "tasafondoReg": $("#tasafondoReg option:selected").val(),

            "fechaIni": $("#fechaIni").data(),
            "fechaFin": $("#fechaFin").html(),
            "fechaDesem": $("#fechaDesem date").data(),

            "listaCuotas": objetoLista
        };

        $.ajax({
            // la URL para la petición
            url: "SimuladorCredito/Index",

            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: objeto,

            // especifica si será una petición POST o GET
            type: 'POST',

            // el tipo de información que se espera de respuesta
            dataType: 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function (json) {
               //alert("ok");
               console.log(json);
            },

            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function (xhr, status) {
                //alert('Disculpe, existió un problema');
            },

            // código a ejecutar sin importar si la petición falló o no
            complete: function (xhr, status) {
               //alert('Petición realizada');
            }
        });
    });
});