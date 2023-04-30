import React from "react";
import { Box, Title, Text, Button } from "../../components";


const Pagamentos = () =>{
    return (
        <Box background="light" justify="center" align="center" hasPadding>
            <Text>Insira os dados para concluir a contratação via cartão de crédito.</Text>

            <Button Block>
                <Text color="white">Voltar</Text>
            </Button>
        </Box>

        

        
    );
    
};


export default Pagamentos;