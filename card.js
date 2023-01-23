
const card = (personaje) => {

    const divCard = document.createElement('div');
          divCard.classList.add('card', 'col', 'p-3', 'mx-1');
    const divCardBody = document.createElement('div');
          divCardBody.className = 'card-body';
    const h5 = document.createElement('h5');
          h5.className = 'card-title';
          h5.textContent = personaje.firstName;
    const a = document.createElement('a');
          a.id = personaje.id
          a.classList.add('btn', 'btn-primary');
          a.textContent = 'Ver más...'
    const b = document.createElement('buttom');
          b.id = personaje.id
          b.classList.add('btn', 'btn-danger');
          b.textContent = 'Borrar.......'

    
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(a);
    divCardBody.appendChild(b);
    
    return divCard;
}


export { card }