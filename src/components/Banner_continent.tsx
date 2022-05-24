import { Flex, Heading } from "@chakra-ui/react";


export function Banner_continent() {
  return (
    <Flex
      w="100%"
      h={["23.4375rem","31.25rem"]}
      bgImage="url('/continent_banner/europe_banner.png')"
      bgRepeat="no_repeat"
      bgSize="cover"
      justifyContent="center"
      alignItems="end"
      mx="auto"
    >
      <Flex
        position="absolute"
        maxWidth="77.5rem"
        mx="auto"
        w="100%"
      >

        <Heading
          color="gray.100"
          fontSize="3rem"
          fontWeight="semibold"
          ml={["1rem", "2rem"]}
          mb="3.6875rem"
        >
          Europa
        </Heading>
      </Flex>

    </Flex>
  )
}
