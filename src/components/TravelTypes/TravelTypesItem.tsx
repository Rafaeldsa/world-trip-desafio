import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypesItemProps {
    image: string;
    label: string;
    alt: string;
}

export function TravelTypesItem({ image, label, alt }: TravelTypesItemProps) {
    return (
        <Flex alignItems="center" direction="column">
            <Image h={85} w={80} mb="6" src={image} alt={alt} />
            <Text fontWeight="600" color="gray.700">{label}</Text>
        </Flex>
    )
}