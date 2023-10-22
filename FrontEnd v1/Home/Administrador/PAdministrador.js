/*--------------Configuración del menú lateral---------------------------*/

document.getElementById('menu_consultar').addEventListener('click', consultarMostrar);
document.getElementById('menu_prodprov').addEventListener('click', prodprovMostrar);
document.getElementById('menu_entsal').addEventListener('click', entsalMostrar);
      
function consultarMostrar() {
    document.getElementById('consultas').style.display = 'grid';
    document.getElementById('prodprov').style.display = 'none';
    document.getElementById('entsal').style.display = 'none';
            
    document.getElementById('menu_consultar').style.fontWeight = 600;
    document.getElementById('menu_consultar').style.borderBottom = '2px solid var(--c_terciario)';
    document.getElementById('menu_prodprov').style.fontWeight = 'normal';
    document.getElementById('menu_prodprov').style.borderBottom = 'none';
    document.getElementById('menu_entsal').style.fontWeight = 'normal';
    document.getElementById('menu_entsal').style.borderBottom = 'none';
}
function prodprovMostrar() {
    document.getElementById('consultas').style.display = 'none';
    document.getElementById('prodprov').style.display = 'grid';
    document.getElementById('entsal').style.display = 'none';

    document.getElementById('menu_consultar').style.fontWeight = 'normal';
    document.getElementById('menu_consultar').style.borderBottom = 'none';
    document.getElementById('menu_prodprov').style.fontWeight = 600;
    document.getElementById('menu_prodprov').style.borderBottom = '2px solid var(--c_terciario)';
    document.getElementById('menu_entsal').style.fontWeight = 'normal';
    document.getElementById('menu_entsal').style.borderBottom = 'none';
}
function entsalMostrar() {
    document.getElementById('consultas').style.display = 'none';
    document.getElementById('prodprov').style.display = 'none';
    document.getElementById('entsal').style.display = 'grid';

    document.getElementById('menu_consultar').style.fontWeight = 'normal';
    document.getElementById('menu_consultar').style.borderBottom = 'none';
    document.getElementById('menu_prodprov').style.fontWeight = 'normal';
    document.getElementById('menu_prodprov').style.borderBottom = 'none';
    document.getElementById('menu_entsal').style.fontWeight = 600;
    document.getElementById('menu_entsal').style.borderBottom = '2px solid var(--c_terciario)';
}




/*------------------Configuración de los botones-----------------------*/

document.getElementById('registrarPro').addEventListener('click', aceptarRegistro);
document.getElementById('aceptarConfirmar').addEventListener('click', enviadoRegistro);
document.getElementById('aceptarEnviado').addEventListener('click', recargar);
document.getElementById('cancelarConfirmar').addEventListener('click', recargar);

function aceptarRegistro () {
    document.getElementById('confirmar').style.display = 'flex';
    document.getElementById('alerta_enviado').style.display = 'none';
    document.getElementById('alerta_confirmar').style.display = 'flex';
    document.getElementById('textoConfirmar').innerHTML = '¿Estás seguro que los datos ingresados son correctos?';
}
function enviadoRegistro () {
    document.getElementById('alerta_enviado').style.display = 'flex';
    document.getElementById('alerta_confirmar').style.display = 'none';
    document.getElementById('textoEnviado').innerHTML = 'Registro completado';
}
function recargar () {
    location.reload()
}

document.getElementById('registrarEnt').addEventListener('click', aceptarEntsal);
document.getElementById('aceptarConfirmar').addEventListener('click', enviadoEntsal);

function aceptarEntsal () {
    document.getElementById('confirmar').style.display = 'flex';
    document.getElementById('alerta_enviado').style.display = 'none';
    document.getElementById('alerta_confirmar').style.display = 'flex';
    document.getElementById('textoConfirmar').innerHTML = '¿Estás seguro que los datos ingresados son correctos?';
}
function enviadoEntsal () {
    document.getElementById('alerta_enviado').style.display = 'flex';
    document.getElementById('alerta_confirmar').style.display = 'none';
    document.getElementById('textoEnviado').innerHTML = 'Registro completado';
}