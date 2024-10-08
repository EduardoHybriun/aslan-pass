import { Box, FormLabel, Stack, Switch, Text } from "@chakra-ui/react";

export function Switches() {
    return (
        <Box w="100%" flexDirection={'column'} mt={'1em'}>
          <Text color={'#000000'} fontSize={'16px'} mb={'0.5em'} fontWeight={"normal"}>
            Deseja receber nossas comunicações?
          </Text>
          <Stack align='center' direction='row' gap={'10px'}>
            <Stack align='center' direction='column'>
              <FormLabel mb={'-5px'}>E-mail</FormLabel>
              <Switch 
                size='lg' 
                sx={{
                  "& .chakra-switch__track": {
                    backgroundColor: "#888888", // Cor quando desligado
                    borderRadius: '50px', // Mantém a trilha oval
                  },
                  "& .chakra-switch__track[data-checked]": {
                    backgroundColor: "#F7C921", // Cor quando ligado
                    borderRadius: '50px', // Mantém a trilha oval
                  },
                  "& .chakra-switch__thumb": {
                    backgroundColor: "white", // Cor do botão (thumb)
                    borderRadius: '50%', // Garante que o botão seja redondo
                  },
                  "& .chakra-switch__thumb[data-checked]": {
                    backgroundColor: "white", // Mantém a cor do botão quando ativado
                  },
                }}
              />
            </Stack>

            <Stack align='center' direction='column'>
              <FormLabel mb={'-5px'}>SMS</FormLabel>
              <Switch 
                size='lg'
                sx={{
                  "& .chakra-switch__track": {
                    backgroundColor: "#888888", // Cor quando desligado
                    borderRadius: '50px', // Mantém a trilha oval
                  },
                  "& .chakra-switch__track[data-checked]": {
                    backgroundColor: "#F7C921", // Cor quando ligado
                    borderRadius: '50px', // Mantém a trilha oval
                  },
                  "& .chakra-switch__thumb": {
                    backgroundColor: "white", // Cor do botão (thumb)
                    borderRadius: '50%', // Garante que o botão seja redondo
                  },
                  "& .chakra-switch__thumb[data-checked]": {
                    backgroundColor: "white", // Mantém a cor do botão quando ativado
                  },
                }}
              />
            </Stack>

            <Stack align='center' direction='column'>
              <FormLabel mb={'-5px'}>Whatsapp</FormLabel>
              <Switch 
                size='lg'
                sx={{
                  "& .chakra-switch__track": {
                    backgroundColor: "#888888", // Cor quando desligado
                    borderRadius: '50px', // Mantém a trilha oval
                  },
                  "& .chakra-switch__track[data-checked]": {
                    backgroundColor: "#F7C921", // Cor quando ligado
                    borderRadius: '50px', // Mantém a trilha oval
                  },
                  "& .chakra-switch__thumb": {
                    backgroundColor: "white", // Cor do botão (thumb)
                    borderRadius: '50%', // Garante que o botão seja redondo
                  },
                  "& .chakra-switch__thumb[data-checked]": {
                    backgroundColor: "white", // Mantém a cor do botão quando ativado
                  },
                }} 
              />
            </Stack>
          </Stack>
        </Box>
    )
}