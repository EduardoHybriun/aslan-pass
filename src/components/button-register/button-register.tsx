import { Box, Button } from "@chakra-ui/react";

export function ButtonRegister() {
    return (
        <Box w="100%" flexDirection={'column'} mt={'1em'}>
          <Button 
            bg={"#F7C921"} 
            color={"#FFFFFF"} 
            w={"100%"} 
            borderRadius={"12px"}
            _hover="none"
          >
            Registrar
          </Button>
        </Box>
    )
}