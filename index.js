// for toggle action of navbar
document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showmenu');
})

function func1(){
    let name=prompt("May I know your Good name?")
    alert("Welcome to RTech "+name);
}
function func2(){
    alert("Thanks we will contact you soon");
}