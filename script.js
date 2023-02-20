
    
    let detalle = 'si'  // flag para indicar si está mostrando o no el detalle de la experiencia laboral 
    const items = document.querySelectorAll('.items')
    document.getElementById('btnMostrar').addEventListener('click',function() {    
    if (detalle == 'no') {    
        document.getElementById('btnMostrar').style.backgroundImage = 'url(contraer.png)';
        document.getElementById('btnMostrar').innerText = 'Ocultar detalle'
        items.forEach(item => {
            item.style.display = 'block' })
        detalle = 'si'
    } else {
                document.getElementById('btnMostrar').style.backgroundImage = 'url(expandir.png)'
                document.getElementById('btnMostrar').innerText = 'Mostrar detalle'
                items.forEach(item => {
                    item.style.display = 'none' })
                detalle = 'no' 
                }});
    
    
    document.getElementById('btnEnviar').addEventListener('click', function() {
        let nombre = document.getElementById('nombre').value
        let email = document.getElementById('email').value
        let tel = document.getElementById('tel').value
        let mensaje = document.getElementById('mensaje').value

        if (mensaje == '') {
            mensaje = 'Sin mensaje'
        }

        if (nombre == '' | email == '' | tel == '') {
            window.alert('Debe ingresar todos los datos requeridos para enviar el formulario')
            } else {
                if (window.confirm('Los datos a enviar son los siguientes:\nNombre: ' + nombre+ '\nEmail: ' + email + '\nTelefono: ' + tel + '\nMensaje: ' + mensaje + '\n\n¿Desea confirmar los datos?')) {
                window.alert('Datos enviados correctamente!')
                }
                console.log(nombre)
        }
        

        
    });
