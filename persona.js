import { get ,getAll, post, put } from './db.js';

const form = document.querySelector('form');
const submit = document.querySelector('button');
const url = new URLSearchParams(window.location.search);
const id = url.get('persona')


get(form, id)
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
        put(objetoFinal,id);
        alert('se actualizo correctamente',window.location.href = `./index.html`)
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
});