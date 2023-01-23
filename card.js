
const card = (personaje) => {

    const divCard = document.createElement('div');
          divCard.classList.add('card', 'col', 'p-3', 'mx-1');
    const divCardBody = document.createElement('div');
          divCardBody.classList.add('card-body','d-flex','flex-column');
    const divC = document.createElement('div');
          
    const h5 = document.createElement('h5');
          h5.className = 'card-title';
          h5.textContent = personaje.firstName + ' ' + personaje.lastName;
    const small = document.createElement('small');
          small.textContent = personaje.matter;
    const small2 = document.createElement('small');
          small2.textContent = 'Promedio:' + ' ' + personaje.average;
    const a = document.createElement('a');
          a.id = personaje.id
          a.classList.add('btn', 'btn-primary');
          a.textContent = 'Actualizar'
    const b = document.createElement('buttom');
          b.id = personaje.id
          b.classList.add('btn', 'btn-danger');
          b.textContent = 'Borrar.......'

    
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(small);
    divCardBody.appendChild(small2);
    divC.appendChild(a);
    divC.appendChild(b);
    divCardBody.appendChild(divC);
    
    return divCard;
}


export { card }