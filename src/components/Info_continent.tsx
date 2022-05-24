import { Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";


export function Info_continent() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
    >
      <Flex gap="2.8125rem" justifyContent="space-between" w="30.625rem">
        <Stat textAlign="center">
          <StatNumber fontSize="3rem" color="yellow.500">20</StatNumber>
          <StatLabel fontSize="1.5rem">Paises</StatLabel>
        </Stat>

        <Stat textAlign="center">
          <StatNumber fontSize="3rem" color="yellow.500">60</StatNumber>
          <StatLabel fontSize="1.5rem">Linguas</StatLabel>
        </Stat>

        <Stat textAlign="center">
          <StatNumber fontSize="3rem" color="yellow.500">27</StatNumber>
          <StatLabel w="10.3125rem" fontSize="1.5rem">Cidades +100</StatLabel>
        </Stat>
      </Flex>
    </Flex>
  )
}
