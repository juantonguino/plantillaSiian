var codigoBusqueda = '';

function CargarDatosTransacciones() {

    $("#demoGrid").DataTable({

        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "pageLength": 5,

        "ajax": {
            "url": "../Transaccion/LoadData",
            "type": "POST",
            "datatype": "json",
            "data": {
                "Codigo": codigoBusqueda
            },
        },

        "columnDefs":
            [{
                "targets": [0],
                "visible": false,
                "searchable": false
            }
            ],

        "columns": [
            { "data": "id", "name": "id", "autoWidth": true },
            {
                "render": function (data, type, full, meta) {
                    return '<input type="radio" name="seleccionTransaccion" value="' + full.id + '");" />';
                }
            },
            { "data": "codigo", "name": "codigo", "title": "Codigo", "autoWidth": true },
            { "data": "nombre", "name": "nombre", "title": "Nombre", "autoWidth": true },
        ]

    });

    codigoBusqueda = '';
}

