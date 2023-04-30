import React from "react";
import { Box, Title, Text, Button, Spacer, Input } from "../../components";

import Header from "../../components/Header";


const Pagamentos = () =>{
    return (
        <Box background="light" justify="center" align="center" hasPadding>
            <Header title="Pagamentos"/>
            <Text color='warning'>Insira os dados para concluir a contratação via cartão de crédito.</Text>
            <Spacer size="30px"/>

            <Input  placeholder="Número do cartão"></Input>
            
            <Input placeholder="Nome do titular"></Input>
            
            <Input placeholder="CPF do titular"></Input>
            
            <Input placeholder="Validade"></Input>
            
            <Input placeholder="Código de segurança"></Input>
            



            <Spacer size="20px"/>
            <Button Block>
                <Text align="center" color="light">Pagar</Text>
            </Button>


            <Spacer size="15px"/>
            
            <Text color="primary"  align="center">Voltar</Text>
            
            
        </Box>

        

        
    );

    
};


export default Pagamentos;