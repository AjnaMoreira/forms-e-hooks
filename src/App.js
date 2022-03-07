import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import { Container, Typography } from '@mui/material'
import '@fontsource/roboto'

import { validaCPF, validaSenha } from './models/cadastro'
import ValidacoesCadastro from './context/ValidacoesCadastro'

class App extends Component {
    render() {
        return (
            <Container component="article" maxWidth="sm">
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{ m: 2 }}
                >
                    Formulário de cadastro
                </Typography>
                <ValidacoesCadastro.Provider
                    value={{
                        cpf: validaCPF,
                        senha: validaSenha,
                        nome: validaSenha
                    }}
                >
                    <FormularioCadastro aoEnviar={aoEnviarForm} />
                </ValidacoesCadastro.Provider>
            </Container>
        )
    }
}

function aoEnviarForm(dados) {
    console.log(dados)
}

export default App
