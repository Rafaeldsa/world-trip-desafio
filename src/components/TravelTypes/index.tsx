import { Flex, Stack } from "@chakra-ui/react";
import { TravelTypesItem } from "./TravelTypesItem";

export function TravelTypes() {
    return (
        <Flex mt="20" mx={140}>
            <Stack direction="row" spacing="1">
                <TravelTypesItem image="./cocktail.svg" label="vida noturna" alt="cocktail" />
                <TravelTypesItem image="./surf.svg" label="praia" alt="surf" />
                <TravelTypesItem image="./building.svg" label="moderno" alt="building" />
                <TravelTypesItem image="./museum.svg" label="clássico" alt="museum" />
                <TravelTypesItem image="./earth.svg" label="e mais..." alt="earth" />               
            </Stack>
        </Flex>
    );
}