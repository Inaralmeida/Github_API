class UserView{
    
    MostraNaTelaUsuario(dados){
        let nome = document.querySelector('#nome')
        nome.textContent = dados.getNome()

        let username = document.querySelector('#user_name')
        username.textContent = dados.getUsername()

        let imagem = document.querySelector('#foto_perfil')
        imagem.src = dados.getImagem()
    }

    MostraNaTelaRepositorio(dados){
        let repositoriosHtml = document.querySelector('#repositorio')
        console.log('to na view')
        console.log(dados._repositorios)
        let repos = dados._repositorios
        for(let repo of repos){
            let card = document.createElement('div')
            card.classList.add('repos_Individual')

            let nomeRepos = document.createElement('p')
            nomeRepos.classList.add('nome_repos')
            nomeRepos.textContent = repo.name
            card.appendChild(nomeRepos)

            let link = document.createElement('a')
            link.classList.add('linkRepos')
            link.innerHTML= `<img src="../img/link.svg" alt="">`
            link.href = repo.html_url
            card.appendChild(link)

            let linguagem = document.createElement('p')
            linguagem.classList.add('linguagem')
            linguagem.textContent = repo.language
            card.appendChild(linguagem)

            repositoriosHtml.appendChild(card)
        }
    }

}