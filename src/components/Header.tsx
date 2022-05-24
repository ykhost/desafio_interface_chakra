import { Flex, Grid, GridItem, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

export function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex bg="white" w="100%" as="header" mx="auto" px="1rem" h={["3.125rem","6.25rem"]} align="center" justify="center">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="77.5rem"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start"/>
            </a>
          </Link>
        )}
          <Image
            w={["5.0625rem","11.5rem"]}
            src="/logo.svg"
            alt="Um avição voando sobre o nome da marca world trip"
            justifySelf="center"
            gridColumn="2"
          />
      </Grid>
    </Flex>
  )
}
