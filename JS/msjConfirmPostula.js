function loadScript(url, callback){

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js";
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}


function alerta() {
    swal({
        title: "¿Esta seguro de postularse?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Postulacion enviada", {
                    icon: "success",
                });
            } 
        });
}