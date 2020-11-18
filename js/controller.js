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

    // LocalizaSeguidores(usuario){
    //     let model = new UserModel
    //     model.LocalizaSeguidores(usuario)

    //     let view = new UserView
    //     view.MostraNaTelaSeguidores(model)
    // }

    // LocalizaSeguindo(usuario){
    //     let model = new UserModel
    //     model.LocalizaSeguindo(usuario)

    //     let view = new UserView
    //     view.MostraNaTelaSeguindo(model)
    // }

}