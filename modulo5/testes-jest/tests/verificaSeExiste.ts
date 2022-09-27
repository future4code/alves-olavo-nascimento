export const verificaSeExiste = (imput: string) => {
    const usuarios: any[] = [
        {
            "nome": "olavo"
        },
        {
            "nome": "pedro"
        },
        {
            "nome": "bruno"
        },
        {
            "nome": "henrique"
        },
        {
            "nome": "david"
        },
        {
            "nome": "astrodev"
        }
    ]
    const encontrado = usuarios.find((usuario) => {
        return usuario.nome === imput
    })
    return encontrado
}