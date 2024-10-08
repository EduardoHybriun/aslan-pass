import { Box, Button } from "@chakra-ui/react";

interface ButtonRegisterProps {
    handleSubmit: () => void; // Definindo a propriedade handleSubmit
}

export function ButtonRegister({ handleSubmit }: ButtonRegisterProps) { // Usando a propriedade
    return (
        <Box w="100%" flexDirection={'column'} mt={'1em'}>
            <Button 
                onClick={handleSubmit} // Vinculando a função handleSubmit ao evento onClick
                bg={"#F7C921"} 
                color={"#FFFFFF"} 
                w={"100%"} 
                borderRadius={"12px"}
                _hover="none"
            >
                Registrar
            </Button>
        </Box>
    );
}
