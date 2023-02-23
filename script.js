    ////////////////////////////////////////////////////////////////
    // Esta porción de código permite mostrar u ocultar el detalle //
    // mostrado en la parte de Experiencia profesional //////////////
    /////////////////////////////////////////////////////////////////  


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
    
    
    /////////////////////////////////////////////////////////////////////            
    // función que permite validar los datos ingresados en el formulario 
    /////////////////////////////////////////////////////////////////////

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


    // https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click

        const navLinks = document.querySelectorAll('.nav-link')
        const menuToggle = document.getElementById('navbarNavAltMarkup')
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        navLinks.forEach((l) => {
            

                l.addEventListener('click', () => {
                     if (document.getElementById('barra').offsetParent != null)  {
                        
                        bsCollapse.toggle()}
                     })})

             
        
    
    