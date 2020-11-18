class UserModel{

    constructor(){
        this._nome = '';
        this._username = '';
        this._image = '';
        this._repositorios = '';
        this._seguidores = '';
        this._seguindo = '';
    }
    
    LocalizaUsuario(usuario){

        console.log('Model funciona')

        let request = new XMLHttpRequest

        request.addEventListener('load', ()=>{
            console.log('request funciona')

            if(request.status == 200){

                let dadosUsuario = JSON.parse(request.responseText)

                console.log(usuario)

                 this._AtualizaDados(dadosUsuario)
            }else{
                erro(request.status)
                throw `Error ${request.status}`
            }
            
        })


        request.open('GET', `https://api.github.com/users/${usuario}`, false)

        request.send()

    }

    LocalizaRepositorio(usuario){

        console.log('Model funciona')

        let request = new XMLHttpRequest

        request.addEventListener('load', ()=>{
            console.log('request funciona')

            if(request.status == 200){

                let dadosRepositorio = JSON.parse(request.responseText)
               
                this._repositorios = dadosRepositorio
                 
            }

        })


        request.open('GET', `https://api.github.com/users/${usuario}/repos`, false)

        request.send()
    }

    // LocalizaSeguidores(usuario){

    //     console.log('Model funciona')

    //     let request = new XMLHttpRequest

    //     request.addEventListener('load', ()=>{
    //         console.log('request funciona')

    //         if(request.status == 200){

    //             let dadosSeguidores = JSON.parse(request.responseText)
               
    //             this._seguidores = dadosSeguidores.length
    //             console.log(this._seguidores)
                 
    //         }

    //     })


    //     request.open('GET', `https://api.github.com/users/${usuario}/followers`, false)

    //     request.send()
    // }

    // LocalizaSeguindo(usuario){

    //     console.log('Model funciona')

    //     let request = new XMLHttpRequest

    //     request.addEventListener('load', ()=>{
    //         console.log('request funciona')

    //         if(request.status == 200){

    //             let dadosSeguindo = JSON.parse(request.responseText)
               
    //             this._seguindo = dadosSeguindo.length
    //             console.log(this._seguindo)
                 
    //         }

    //     })


    //     request.open('GET', `https://api.github.com/users/${usuario}/following`, false)

    //     request.send()
    // }


    _AtualizaDados(dados){

        this._nome = dados.name
        this._username = dados.login
        this._image = dados.avatar_url
        this._seguidores = dados.followers
        this._seguindo = dados.following
    }

    getNome(){
        return this._nome
    }

    getUsername(){
        return this._username
    }

    getImagem(){
        return this._image
    }

}

function erro(numErro){
    body.style = 'font-family: monospace; display: flex; flex-direction: column; width: 100% ;;'
    body.classList.add('box-erro-body')
    body.innerHTML = `
    
    
    <main id='box-erro-main'>

        <div id="box-erro">

            <h1 > ERRO ${numErro}</h1>
            <p>Por favor, Tente novamente</p>
            <a href="index.html" id="tentar">Tentar novamente</a>
        </div>


    </main>

   

    <script src="../js/repositório.js"></script>`
}