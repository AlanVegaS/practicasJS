if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    }, error => {
        console.log('Error en geo');
    })
} else {
    
}