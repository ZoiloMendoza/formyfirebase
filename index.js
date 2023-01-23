import { get, getAll, post, put, del } from './db.js';

const form = document.querySelector('form');
const submit = document.querySelector('button');
const personas = document.getElementById('personas');

getAll(personas);

const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let objetoFinal = {};
    Array.from(form).forEach((elemento) =>{
        objetoFinal[elemento.name] = elemento.value;
    });
    
    if(validacion(objetoFinal)){
        post(objetoFinal,personas);
        console.log('ok')
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    form.reset();
});

personas.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.id.includes('-N') && event.target.tagName === 'A'){
        window.location.href = `./persona.html?persona=${event.target.id}`
    }
})

personas.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.id.includes('-N') && event.target.tagName === 'BUTTOM'){
        del(event.target.id)
        alert('Se ha borrado correctamente',window.location.href = `./index.html`);
    }
})