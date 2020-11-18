let botao = document.querySelector('#submit')
let body = document.querySelector('.pagInicial')

let controller = new Controller



botao.addEventListener('click', function(event){


    event.preventDefault()
    let nomeUsuario =document.querySelector('#input').value
   
    
    
    body.classList.remove('.pagInicial')
    body.classList.add('.repo')
    body.style = 'font-family: monospace; display: flex; flex-direction: column; width: 100%;; background: none;'
    body.innerHTML = `
    <header>
        <div id="logoDiv">
        <img id='logo' src="../img/github.svg" alt="">
        <h1>GitHub</h1>
        </div>
        <a href="index.html" id="sair">SAIR</a>
    </header>
    
    <main>
    
        <section id="info-pessoal">
            <img src="" id='foto_perfil'alt="">
            <h2 id="nome" ></h2>
            <h4 id="user_name"></h4>
            <div id="seguidores">
            <img id="iconeSeguidores" src="../img/usuarios.svg" alt="">
            <p class="seguin">Seguidores: <span class="numSeguidores"></span></p>|
            <p class="seguin">Seguindo: <span class="numSeguindo" ></span></p>
            <p class="estrelaCampo" ><img class="estrela" src="../img/estrela.svg" alt=""><span ></span></p>
        </div>
        </section>
        
        <section id="repositorio">
        
            <div id="header-Repositorio">
                <img src=https://image.flaticon.com/icons/png/512/33/33277.png alt="">
                <h2>Repositórios</h2>
            </div>
            
            <div id='secaoCard'>
            
            </div>
            
                
        </section>
        
    </main>
    
    <footer>
        Copyrigth 2020 &copy; <a href="https://github.com/Inaralmeida"> Inara Almeida</a>.Todos os direitos reservados
    </footer>
    
    `

    console.log('botão funciona')
    controller.LocalizaRepositorio(nomeUsuario)
    controller.ProcuraUser(nomeUsuario)
    controller.LocalizaSeguidores(nomeUsuario)

    
})


