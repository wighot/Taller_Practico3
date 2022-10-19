const indexedDB = window.indexedDB;
const frmcarro = document.getElementById('frmcarro');
const Datoscarros = document.getElementById('Datoscarros');

if(indexedDB && frmcarro){
    let db;
    //Creamos nuestra base con indexedDB
const request = indexedDB.open('ConexionCarro', 1);
request.onsuccess = ()=>{
    db = request.result;
    console.log('OPEN', db);
    Leerdatos();
}

request.onupgradeneeded = () =>{
    db = request.result;
    console.log('Create', db);
    const alojamiento = db.createObjectStore('dataC',{
        autoIncrement: true
    });

}
request.onerror = (error) => {
    console.log('error', error)
}
const AgregarDatoc = (dataC) => {
    const transaction = db.transaction(['dataC'], 'readwrite');
    const alojamiento = transaction.objectStore ('dataC');
    const request = alojamiento.add(dataC);
    Leerdatos();
}

const Leerdatos = () =>{
    const transaction = db.transaction(['dataC'], 'readonly');
    const alojamiento = transaction.objectStore('dataC');
    const request = alojamiento.openCursor();
    const fragmento = document.createDocumentFragment();

    request.onsuccess = (e) =>{
        const cursorC = e.target.result;
        if(cursorC){
            const nombreApe = document.createElement('p');
            nombreApe.textContent = cursorC.value.nombreApe;
            fragmento.appendChild(nombreApe);
            const dui = document.createElement('p');
            duis.textContent = cursorC.value.duis;
            fragmento.appendChild(duis);
            const nit = document.createElement('p');
            nits.textContent = cursorC.value.nits;
            fragmento.appendChild(nits);
            const marca = document.createElement('p');
            marca.textContent = cursorC.value.marca;
            fragmento.appendChild(marca);
            const modelo = document.createElement('p');
            modelo.textContent = cursorC.value.modelo;
            fragmento.appendChild(modelo);
            const aniop = document.createElement('p');
            aniop.textContent = cursorC.value.aniop;
            fragmento.appendChild(aniop);
            const color = document.createElement('p');
            color.textContent = cursorC.value.color;
            fragmento.appendChild(color);
            const placa = document.createElement('p');
            placa.textContent = cursorC.value.placa;
            fragmento.appendChild(placa);
            const fallo = document.createElement('p');
            fallo.textContent = cursorC.value.fallo;
            fragmento.appendChild(fallo);
            cursorC.continue();

        }else{
            Datoscarros.textContent = '';
            Datoscarros.appendChild(fragmento);
        }
    }
}

    frmcarro.addEventListener('submit', (e) =>{
        e.preventDefault();
        const dataC ={
            nombreApe:e.target.name.value,
            duis: e.target.dui.value,
            nits: e.target.nit.value,
            marca: e.target.selmar.value,
            modelo: e.target.selmode.value,
            aniop: e.target.txtanio.value,
            color: e.target.radcolor.value,
            placa: e.target.txtPlaca.value,
            fallo: e.target.mensaje.value

        }
        AgregarDatoc(dataC);
    })
}


