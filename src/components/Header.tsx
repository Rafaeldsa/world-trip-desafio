import { Flex, Image } from "@chakra-ui/react";


export function Header() {
    return (
        <Flex w="100%" as="header" maxWidth={1440} alignItems="center" justifyContent="center" h="24">
            <Image src='./Logo.svg' alt="logo world trip"/>
        </Flex>
    );
}