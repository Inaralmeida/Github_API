class UserView{
    
    MostraNaTelaUsuario(dados){
        let nome = document.querySelector('#nome')
        nome.textContent = dados.getNome()

        let username = document.querySelector('#user_name')
        username.textContent = dados.getUsername()

        let imagem = document.querySelector('#foto_perfil')
        imagem.src = dados.getImagem()

        let seguidores = document.querySelector('.numSeguidores')
        seguidores.textContent = dados._seguidores

        let seguindo = document.querySelector('.numSeguindo')
        seguindo.textContent = dados._seguindo


    }

    MostraNaTelaRepositorio(dados){
        let repositoriosHtml = document.querySelector('#secaoCard')
        console.log('to na view')
        let repos = dados._repositorios
        for(let repo of repos){
            let card = document.createElement('div')
            card.classList.add('repos_Individual')

            let nomeRepos = document.createElement('a')
            nomeRepos.classList.add('nome_repos')
            nomeRepos.textContent = repo.name
            nomeRepos.href = repo.html_url
            card.appendChild(nomeRepos)



            let linguagem = document.createElement('p')
            linguagem.classList.add('linguagem')
            linguagem.textContent = repo.language
            card.appendChild(linguagem)

            repositoriosHtml.appendChild(card)
        }
    }

}