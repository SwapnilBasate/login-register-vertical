var container = document.querySelector('#container')
var title = document.querySelector('#title')

var firstname= document.querySelector('#fullnamefield')
var cpname= document.querySelector('#confirmPasswordfield')

var btnlogin = document.querySelector('#btnlogin')
var btnregister = document.querySelector('#btnregister')

btnregister.addEventListener('click',(e)=>{
    e.preventDefault()
    btnlogin.classList.remove('action')
    btnlogin.classList.add('btn')
    
    btnregister.classList.remove('btn')
    btnregister.classList.add('action')

    firstname.style.maxHeight='80px'
    cpname.style.maxHeight='80px'
    title.innerHTML="Register"

    title.classList.remove('info')
    void title.offsetWidth;
    title.classList.add('info')
})

btnlogin.addEventListener('click',(e)=>{
    e.preventDefault()
    btnregister.classList.remove('action')
    btnregister.classList.add('btn')

    btnlogin.classList.remove('btn')
    btnlogin.classList.add('action')

    firstname.style.maxHeight='0px'
    cpname.style.maxHeight='0px'
    title.innerHTML="Login"

    title.classList.remove('info')
    void title.offsetWidth;
    title.classList.add('info')
})