const planetas =  document.querySelectorAll('.planeta')
const dropZone = document.querySelector('#zona-drop')
const container = document.querySelector('.container')

planetas.forEach((planeta, indice) => {
    planeta.setAttribute('id', `planeta${indice+1}`)
    //DragStart
    planeta.addEventListener('dragstart', e => {
        console.log('DragStart ' + (indice+1));
        //Enviar informacion
        e.dataTransfer.setData('text', e.target.id)
    })
    /*planeta.addEventListener('drag', () => {
        console.log('Drag ' + (indice+1));
    })
    planeta.addEventListener('dragend', () => {
        console.log('Dragend ' + (indice+1));
    })*/
})

dropZone.addEventListener('dragover', e => {
    e.preventDefault()
    console.log('dragover');
})

dropZone.addEventListener('drop', e => {
    e.preventDefault()
    //Recibi informacion
    let planeta = e.dataTransfer.getData('text')
    e.target.appendChild(document.querySelector('#'+planeta))
})

container.addEventListener('dragover', e => {
    e.preventDefault()
    console.log('dragover');
})

container.addEventListener('drop', e => {
    e.preventDefault()
    //Recibi informacion
    let planeta = e.dataTransfer.getData('text')
    e.target.appendChild(document.querySelector('#'+planeta))
})