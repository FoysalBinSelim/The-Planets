
import {data} from './data.js';

let mercury = document.getElementById('mercury');
let venus = document.getElementById('venus');
let earth = document.getElementById('earth');
let mars = document.getElementById('mars');
let saturn = document.getElementById('saturn');
let jupitar = document.getElementById('jupitar');
let uranus = document.getElementById('uranus');
let neptune = document.getElementById('neptune');

let pli = document.querySelector('#planet-image');
let pinfo = document.querySelector('.planet-inf');
let hide = document.querySelector('.f-pageinfo');
let plname = document.querySelector(".planetname");

let rotate = document.querySelector("#rotatedata");
let revolution = document.querySelector("#revdata");
let radius = document.querySelector("#radius");
let temperature = document.querySelector("#temp");

let structure = document.querySelector(".structure");
let geology = document.querySelector(".geology");



let id = 0;

mercury.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 1;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
        
        pinfo.innerHTML = planet[0].info;
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;  
});

venus.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 2;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
       
        pinfo.innerHTML = planet[0].info;
        console.log(planet);
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;   
});

earth.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 3;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
       
        pinfo.innerHTML = planet[0].info; 
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;  
});

mars.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 4;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
       
        pinfo.innerHTML = planet[0].info;
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;   
});
saturn.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 6;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
    
        pinfo.innerHTML = planet[0].info;
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;   
});

jupitar.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 5;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
        
        pinfo.innerHTML = planet[0].info;  
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature; 
});
uranus.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 7;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
      
        pinfo.innerHTML = planet[0].info;
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;   
});

neptune.addEventListener('click', ()=>{
    hide.style.display= "none";
    id = 8;
    const planet = data.filter((planet)=> planet.id === id) 
        pli.src = planet[0].img;
      
        pinfo.innerHTML = planet[0].info;
        rotate.innerHTML = planet[0].rotation;  
        revolution.innerHTML = planet[0].revolution;  
        radius.innerHTML = planet[0].radius;  
        temperature.innerHTML = planet[0].temperature;   
});

structure.addEventListener('click', ()=>{
    console.log(id);
    let plid = id;
    const planetstructure = data.filter((planet)=> planet.id === plid)
     pli.src = planetstructure[0].structure_img;
    pinfo.innerHTML = planetstructure[0].internal;
});

geology.addEventListener('click', ()=>{
    console.log(id);
    let plid = id;
    const planetgeology = data.filter((planet)=> planet.id === plid)
    // pli.src = planetgeology[0].img;
    pinfo.innerHTML = planetgeology[0].surface;
});




