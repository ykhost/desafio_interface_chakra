import { Flex, Image, Text,  } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query"

interface TravelProps{
  icon: string;
  iconAlt: string;
  text: string;
}

export function Types({icon, iconAlt, text}: TravelProps) {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })

  console.log(isMobile)

  return (
    <Flex direction={["row","column"]} align="center" justify="center">
      {isMobile ?
        <Image
          src={`./TypesTravel/${icon}.svg`}
          w="85px"
          h="85px"
          alt={iconAlt}
          mb="5"
        /> :
        <Text
          color="yellow.400"
          fontSize="4xl"
          mr="2"
        >
        •
        </Text>
      }
      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{text}</Text>
    </Flex>
  )
}
