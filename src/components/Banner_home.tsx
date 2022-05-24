import { Box, Flex, Image, Text, useBreakpointValue, Heading } from "@chakra-ui/react";

export function Banner_home(){
	const isMobile = useBreakpointValue({
		base:false,
		sm:true
	})

  return(
    <Flex
      w="100%"
      h={["10.18rem", "15.62rem", "15.62rem", "20.93rem"]}
      bgImage="url('/banner.png')"
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >

			<Flex
        direction="row"
			  h="100%"
			  justifyContent="space-between"
			  align="center"
			  mx="auto"
			  maxWidth={[333, 1280]}
        padding={["1rem","2rem"]}
      >

					<Box justifyItems={['center', 'space-between']} alignItems="center" w="100%" mx="auto" px={["4","10","15","20","36"]}>
						<Heading color="gray.100" fontWeight="500" fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}>
							5 continentes,<br />infinitas possibilidades.
						</Heading>
						<Text color="gray.300" mt="5" fontSize={["0.8rem","xl"]} maxW={["100%", "100%", "100%", "550px"]}>
							Chegou a hora de tirar do papel a viagem que você sempre sonhou.
						</Text>
					</Box>

					<Image
						w={["300px","300px","300px","430px"]}
						display={['none','none','block']}
						src="/airplane.svg"
						alt="Avião amarelo voando com algumas nuvens ao redor."
						transform="translateY(48px)"
						ml="8"
        	/>
			</Flex>
		</Flex>
  )
}
