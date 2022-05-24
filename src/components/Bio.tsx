import { Flex, Text } from "@chakra-ui/react"
import { Info_continent } from "./Info_continent"

export function BioContinent (){
  return (
    <Flex
      direction="row"
      maxWidth="77.5rem"
      width="100%"
      mx="auto"
      mt="5rem"
      padding={["1rem", "2rem"]}
      justifyContent="space-between"
    >
        <Text fontSize="1.5rem" color="gray.700" maxWidth="37.5rem" textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Info_continent />

    </Flex>

  )
}
