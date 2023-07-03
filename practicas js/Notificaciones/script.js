if (Notification) {
    console.log('Navegador compatible con notificaciones');

    //Permiso
    console.log(Notification.permission);
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }

    let titulo = 'Hola, soy un titulo'
    let opciones = {
        body: 'Hola, este es el cuerpo de la notificacion',
        icon: 'https://media.istockphoto.com/id/1135701470/vector/octopus-tentacles-design.jpg?s=612x612&w=0&k=20&c=BLXPh_NBb2ni95BwSxUbthrLqsuXhfYAyuQMCFrVw-w='
    }

    const notificaion = new Notification(titulo, opciones)

    notificaion.onclick = (event) => {
        event.preventDefault()
        window.open('https://www.google.com/search?rlz=1C1ONGR_esMX1028MX1029&sxsrf=AB5stBh8Q9A_SqVfAYsPXdVjeUR_ymg_AA:1688345462913&q=octopus+logo&tbm=isch&sa=X&ved=2ahUKEwiGvMz8qPH_AhW0LUQIHYFQACYQ0pQJegQIDRAB&biw=1420&bih=1406&dpr=0.9#imgrc=gde3GomeydR3hM')
    }
    notificaion.onclose = () => {
        alert('Te lo pierdes')
    }

    setTimeout(() => {
        notificaion.close()
    },2000)
}else {
    console.log('Navegador no compatible con notificaciones');
}