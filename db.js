//https://kodemia-1543c-default-rtdb.firebaseio.com/.json
import { card } from './card.js';

const parseInfo = (info) => {
    const list = Object.entries(info);
    const newList = list.map((elemento) => {
        const infoParsed = {
            id: elemento[0],
            ...elemento[1],
        }
        return infoParsed
    })
    return newList;
}

const get = async (form,id) => {
    try {
        let response = await fetch(`https://kodemia-1543c-default-rtdb.firebaseio.com/${id}.json`)
        const result = await response.json();
        Object.entries(result)
        Array.from(form).forEach((elemento) =>{
            Object.entries(result).forEach((ele) =>{
                if(elemento.name === ele[0]){
                    elemento.value = ele[1]; 
                }
            })
            })
    } catch (error) {
        console.log('get', error);
    }
}

const getAll = async (contenedor) => {
    try {
        let response = await fetch('https://kodemia-1543c-default-rtdb.firebaseio.com/.json')
        const result = await response.json();
        const data = parseInfo(result);
        contenedor.innerHTML = '';
        data.forEach((personaje) => {
           contenedor.appendChild(card(personaje)) 
        })
    } catch (error) {
        console.log('get', error);
    }
}

const post = async (formulario,contenedor) => {
    try {
        const response = await fetch('https://kodemia-1543c-default-rtdb.firebaseio.com/.json',{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(formulario),
        });
        getAll(contenedor)
    } catch (error) {
        console.log('post:', error)
    }
}

const put = async (persona,id) => {
    try {
        const response = await fetch(`https://kodemia-1543c-default-rtdb.firebaseio.com/${id}.json`,{
        method: 'PUT',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify({
            firstName: persona.firstName,
            lastName: persona.lastName,
            matter: persona.matter,
            average: persona.average
        }),
        });
    } catch (error) {
        console.log('put:', error)
    }
}

const del = async (id) => {
    try {
        const response = await fetch(`https://kodemia-1543c-default-rtdb.firebaseio.com/${id}.json`,{
        method: 'DELETE',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        });
    } catch (error) {
        console.log('delete:', error)
    }
}
export { get ,getAll, post, put, del }