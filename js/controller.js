class Controller{
    
    ProcuraUser(usuario){
        console.log('controller funciona')
        let model = new UserModel
        model.LocalizaUsuario(usuario)

        let view = new UserView
        view.MostraNaTelaUsuario(model)

        
    }

    LocalizaRepositorio(usuario){
        let model = new UserModel
        model.LocalizaRepositorio(usuario)

        let view = new UserView
        view.MostraNaTelaRepositorio(model)
    }
}