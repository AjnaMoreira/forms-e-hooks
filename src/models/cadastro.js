function validaCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: 'O CPF deve ter 11 digitos' }
    } else {
        return { valido: true, texto: '' }
    }
}

function validaSenha(senha) {
    if (senha.length < 4 || senha.length > 8) {
        return { valido: false, texto: 'A senha deve ter entre 4 e 8 digitos' }
    } else {
        return { valido: true, texto: '' }
    }
}

export { validaCPF, validaSenha }
