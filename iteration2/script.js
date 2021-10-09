// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div=document.createElement("div")
document.body.appendChild(div)
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const p =document.createElement("p");
div.appendChild(p);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div2=document.createElement("div");
for(let i=0;i<6;i++){
    let p2=document.createElement("p");
    div2.appendChild(p2);
}
document.body.appendChild(div2);
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p3=document.createElement("p");
p3.textContent="soy dinamico"
document.body.appendChild(p3);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// let h2=document.querySelector(".fn-insert-here");
// let text=document.createTextNode("Wubba Lubba dub dub");
// h2.appendChild(text);
document.querySelector("h2.fn-insert-here").appendChild(document.createTextNode("Wubba Lubba dub dub"))
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul=document.createElement("ul");
for(app of apps){
    let li=document.createElement("li")
    li.appendChild(document.createTextNode(app))
    ul.appendChild(li)
}
document.body.appendChild(ul)
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let r=document.querySelectorAll(".fn-remove-me").forEach(item => item.remove())
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let div3= document.querySelectorAll("div")[1]
let p4=document.createElement("p")
p4.textContent="voy en medio!"
document.body.insertBefore(p4,div3)
console.log(div3)
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
document.querySelectorAll("div.fn-insert-here").forEach((div)=>div.innerHTML=`<p>Voy Dentro!</p>`);