import { Avatar, Box, Flex, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";


export function Cities() {
  return (
    <Flex
      direction="column"
      maxWidth="77.5rem"
      width="100%"
      mx="auto"
      mt="5rem"
      padding={["1rem", "2rem"]}
    >
      <Heading fontSize="2.25rem" fontWeight="medium" mb="2.5rem">Cidades +100</Heading>

      <SimpleGrid minChildWidth="16rem" spacing="2.8125rem">
        <Box w="16rem" h="17.4375rem" borderWidth='1px' borderRadius="4px" overflow="hidden">
          <Image src="/cities/londres.png" alt="Cidade de londres"></Image>

          <Box p="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight="semibold" fontSize="1.25rem">Londres</Text>
              <Text fontWeight="medium" fontSize="1rem" color="gray.500">Reino Unido</Text>
            </Box>

            <Avatar maxWidth="1.875rem" maxHeight="1.875rem" ></Avatar>
          </Box>
        </Box>

        <Box w="16rem" h="17.4375rem" borderWidth='1px' borderRadius="4px" overflow="hidden">
          <Image src="/cities/londres.png" alt="Cidade de londres"></Image>

          <Box p="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight="semibold" fontSize="1.25rem">Londres</Text>
              <Text fontWeight="medium" fontSize="1rem" color="gray.500">Reino Unido</Text>
            </Box>

            <Avatar maxWidth="1.875rem" maxHeight="1.875rem" ></Avatar>
          </Box>
        </Box>

        <Box w="16rem" h="17.4375rem" borderWidth='1px' borderRadius="4px" overflow="hidden">
          <Image src="/cities/londres.png" alt="Cidade de londres"></Image>

          <Box p="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight="semibold" fontSize="1.25rem">Londres</Text>
              <Text fontWeight="medium" fontSize="1rem" color="gray.500">Reino Unido</Text>
            </Box>

            <Avatar maxWidth="1.875rem" maxHeight="1.875rem" ></Avatar>
          </Box>
        </Box>

        <Box w="16rem" h="17.4375rem" borderWidth='1px' borderRadius="4px" overflow="hidden">
          <Image src="/cities/londres.png" alt="Cidade de londres"></Image>

          <Box p="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight="semibold" fontSize="1.25rem">Londres</Text>
              <Text fontWeight="medium" fontSize="1rem" color="gray.500">Reino Unido</Text>
            </Box>

            <Avatar maxWidth="1.875rem" maxHeight="1.875rem" ></Avatar>
          </Box>
        </Box>

        <Box w="16rem" h="17.4375rem" borderWidth='1px' borderRadius="4px" overflow="hidden">
          <Image src="/cities/londres.png" alt="Cidade de londres"></Image>

          <Box p="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight="semibold" fontSize="1.25rem">Londres</Text>
              <Text fontWeight="medium" fontSize="1rem" color="gray.500">Reino Unido</Text>
            </Box>

            <Avatar maxWidth="1.875rem" maxHeight="1.875rem" ></Avatar>
          </Box>
        </Box>

        <Box w="16rem" h="17.4375rem" borderWidth='1px' borderRadius="4px" overflow="hidden">
          <Image src="/cities/londres.png" alt="Cidade de londres"></Image>

          <Box p="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Text fontWeight="semibold" fontSize="1.25rem">Londres</Text>
              <Text fontWeight="medium" fontSize="1rem" color="gray.500">Reino Unido</Text>
            </Box>

            <Avatar maxWidth="1.875rem" maxHeight="1.875rem" ></Avatar>
          </Box>
        </Box>


      </SimpleGrid>
    </Flex>
  )
}
