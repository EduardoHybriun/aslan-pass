import { Box, Checkbox, Stack, Text } from "@chakra-ui/react";

export function CheckBox() {
    return (
        <Box w="100%" flexDirection={'column'} mt={'1em'}>
          <Stack spacing={5} direction='row'>
            <Checkbox 
              colorScheme="yellow"
            >
              <Text fontSize={'13.5px'}>
                Li e concordo com os <a href="#" style={{color: 'blue'}}>Termos de Uso</a> e <a href="#" style={{color: 'blue'}}>Política de Privacidade</a>. *
              </Text>
            </Checkbox>
          </Stack>
        </Box>
    )
}