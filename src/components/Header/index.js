import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome5'



import {Box,  Title} from "../../components";

const Header = ({title}) => {
    return (
      <SafeAreaView > 
      <Box style={{
            flexDirection: "row",
            paddingLeft: 10,
            alignItens: 'center',
            justifyContent: 'space-between',
        }} background ="#006557"  paddingLeft="50px" height="100px" justify="center" align="center">
      
       
            <Box background="#006557" align="center"  height ="90px">
              <Icon name="arrowleft" size={40}></Icon>
            </Box>
            {<Box align="center">
                <Title>{title}</Title>
            </Box>}
            
        
       
      </Box>
      </SafeAreaView>
    );
};


export default Header