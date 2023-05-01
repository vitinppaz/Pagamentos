import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";



import {Box,  Title} from "../../components";

const Header = ({title}) => {
    return (
      <Box background ="#006557" fluid  height="80px" justify="center"  >
        <SafeAreaView 
        style={{
            flexDirection: "row",
        }}>
            <Box background="light" width="30px"></Box>
            <Box align="center">
                <Title>{title}</Title>
            </Box>
            
        
        </SafeAreaView>
      </Box>
    );
};


export default Header