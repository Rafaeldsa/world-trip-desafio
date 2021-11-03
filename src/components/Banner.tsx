import { Flex, Box, Text, Image, VStack } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex backgroundImage="url('./Background.jpg')" w="100%" maxWidth={1440} h={335}>
            <Box mt="20" flex="1">
                <VStack spacing="1">
                    <Text
                        fontSize="36px"
                        fontWeight="500"
                        color="gray.100"
                        w="426px"
                    >5 Continentes,</Text>
                    <Text fontSize="36px"
                        fontWeight="500"
                        color="gray.100"
                        w="426px">infinitas possibilidades.</Text>
                </VStack>
                <VStack ml="24" spacing="1">
                    <Text fontSize="20px"
                        fontWeight="400"
                        color="gray.500"
                        w="524px">Chegou a hora de tirar do papel a viagem que você</Text>
                    <Text fontSize="20px"
                        fontWeight="400"
                        color="gray.500"
                        w="524px" >sempre sonhou.</Text>
                </VStack>

            </Box>

            <Box h={270} w={417} transform="rotate(3deg)" mr="34" mt="24">
                <Image src='./Airplane.svg' alt="airplane" />
            </Box>
        </Flex>
    );
}