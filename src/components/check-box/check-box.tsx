import { Box, FormLabel, Stack, Checkbox, Text } from "@chakra-ui/react";

interface CheckBoxProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Adicione esta propriedade
    isChecked: boolean; // Adicione esta propriedade
}

export function CheckBox({ handleChange, isChecked }: CheckBoxProps) {
    return (
        <Box w="100%" flexDirection={'column'} mt={'1em'}>
            <Stack spacing={5} direction='row'>
                <Checkbox 
                    colorScheme="yellow"
                    name="terms" // Adicione um nome para o checkbox
                    isChecked={isChecked} // Vincule o estado
                    onChange={handleChange} // Vincule a função de mudança
                >
                    <Text fontSize={'13.5px'}>
                        Li e concordo com os <a href="#" style={{ color: 'blue' }}>Termos de Uso</a> e <a href="#" style={{ color: 'blue' }}>Política de Privacidade</a>. *
                    </Text>
                </Checkbox>
            </Stack>
        </Box>
    );
}
