var idAuxiliar = 0;
var codigoAuxiliar = '';
var nombreAuxiliar = '';
var auxiliarBusqueda = '';

function handleChange_seleccionAuxiliar(entrada) {
    var campos = entrada.split(';');
    idAuxiliar = campos[0];
    codigoAuxiliar = campos[1];
    nombreAuxiliar = campos[2];    
}


$(document).ready(function () {
    var table = $('#auxiliarGrid').DataTable();

    $('#auxiliarGrid').on('click', function () {
        var data = table.row(this).data();
        alert('You clicked on ' + data[0] + '\'s row');
    });
});


function CargarDatosAuxiliares() {   

   

    $("#auxiliarGrid").DataTable({

        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "pageLength": 5,

        "ajax": {
            "url": "../Auxiliares/CargarDatos",
            "type": "POST",
            "datatype": "json",
            "data": {
                "Codigo": auxiliarBusqueda
            },
        },

        "columnDefs":
            [{
                "targets": [0],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [1],
                "searchable": false,
                "orderable": false
            }
            ],

        "columns": [
            { "data": "id", "name": "id", "autoWidth": true },            
            { "data": "codigo", "name": "codigo", "title": "Codigo", "autoWidth": true },
            { "data": "nombreAuxiliar", "name": "nombreAuxiliar", "title": "Nombre", "autoWidth": true },
            {
                "render": function (data, type, full, meta) {
                    return '<input type="radio" name="seleccionAuxiliar" value="' + full.id + '" onchange="handleChange_seleccionAuxiliar(\'' + full.id + ';' + full.codigo + ';' + full.nombreAuxiliar + '\');" />';
                }
            },
        ]

    });

    auxiliarBusqueda = '';
}

