var idtercero = 0;
var identificaciontercero = '';
var nombrestercero = '';
var apellidostercero = '';
var identificacionBusqueda = '';

function handleChange_seleccionTercero(entrada) {
    var campos = entrada.split(';');
    idtercero = campos[0];
    identificaciontercero = campos[1];
    nombrestercero = campos[2];
    apellidostercero = campos[3];
}

function CargarDatosTerceros() {    

    $("#demoGrid").DataTable({

        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "pageLength": 5,

        "ajax": {
            "url": "/TerceroMaestro/LoadData",
            "type": "POST",
            "datatype": "json",
            "data": {
                "Identificacion": identificacionBusqueda
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
            {
                "render": function (data, type, full, meta) {
                    return '<input type="radio" name="seleccionCliente" value="' + full.id + '" onchange="handleChange_seleccionTercero(\'' + full.id + ';' + full.identificacion + ';' + full.nombrecompleto + ';' + full.apellidocompleto + '\');" />';
                }
            },
            { "data": "nombrecompleto", "name": "nombrecompleto", "title": "Nombres", "autoWidth": true },
            { "data": "apellidocompleto", "name": "apellidocompleto", "title": "Apellidos", "autoWidth": true },
            { "data": "direcciondomicilio", "name": "direcciondomicilio", "autoWidth": true },
            { "data": "identificacion", "name": "identificacion", "autoWidth": true },
        ]

    });

    identificacionBusqueda = '';
}

