import React from "react";
import { Box, Title, Text, Button, Spacer, Input, myNumber } from "../../components";

import Header from "../../components/Header";



const Pagamentos = () =>{
    return (
           <>

           <Header  title="Pagamento"/>

        <Box background="light" justify="center" align="center" hasPadding>

            
         
            <Text color='warning'>Insira os dados para concluir a contratação via cartão de crédito.</Text>
            <Spacer size="30px"/>

            <Input keyboardType="numeric" /* onChangeText={(text)=> this.onChanged(text)} value={this.state.myNumber} */ maxLength={10}  placeholder="Número do cartão"></Input>
            
            <Input placeholder="Nome do titular"></Input>
            
            <Input keyboardType="numeric" maxLength={11} placeholder="CPF do titular"></Input>
            
            <Input keyboardType="numeric" maxLength={4}  placeholder="Validade"></Input>
            
            <Input keyboardType="numeric"  maxLength={3}  placeholder="Código de segurança"></Input>

    

            



            <Spacer size="20px"/>
            <Button Block>
                <Text align="center" color="light">Pagar</Text>
            </Button>


            <Spacer size="15px"/>
            
            <Text color="primary"  align="center">Voltar</Text>
            
            
        </Box>
        
        </>
        

        
    );

    
};


export default Pagamentos;
