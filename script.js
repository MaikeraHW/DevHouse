(function(){
    const close = document.getElementById("btn")
    const menu = document.getElementById("menu")

    close.addEventListener('click', function(){
        btn.classList.toggle('hidden')
    })

    menu.addEventListener('click', function(){
        btn.classList.toggle('hidden')
    })
})()