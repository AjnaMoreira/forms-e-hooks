import React, { Component } from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import { Container, Typography } from '@mui/material'
import '@fontsource/roboto'

class App extends Component {
    render() {
        return (
            <Container component="article" maxWidth="sm">
                <Typography
                    variant="h3"
                    component="h1"
                    align="center"
                    sx={{ margin: 2 }}
                >
                    Formulário de cadastro
                </Typography>
                <FormularioCadastro
                    aoEnviar={aoEnviarForm}
                    validarCPF={validaCPF}
                />
            </Container>
        )
    }
}

function aoEnviarForm(dados) {
    console.log(dados)
}

function validaCPF(cpf) {
    if (cpf.length !== 11) {
        return { valido: false, texto: 'O CPF deve ter 11 digitos' }
    } else {
        return { valido: true, texto: '' }
    }
}

export default App
