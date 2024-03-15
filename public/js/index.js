const qs = (selector)=> document.querySelector(selector)
const $ = (id)=> document.getElementById(id)

window.onload = function(){
    //JavaScript del Index
    let container = qs('.container');
    let subtitulo = qs('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = qs('body');
    let enlace = qs('a');
    

    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

    container.style.display = 'block';



    /*CONSIGNAS NUEVAS*/
    const logoDH = qs('.logoDH')


    logoDH.addEventListener('click',()=>{
        $('menu').classList.toggle('mostrar')
    })
    $('menu').addEventListener('mouseleave', ()=> {
        $('menu').classList.remove('mostrar')
    })

}