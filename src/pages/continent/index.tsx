import { Flex } from "@chakra-ui/react";
import { Banner_continent } from "../../components/Banner_continent";
import { BioContinent } from "../../components/Bio";
import { Header } from "../../components/Header";
import { Cities } from "../../components/Cities"


export default function Continent () {
  return (
    <Flex
      direction="column"
    >
      <Header />

      <Banner_continent />

      <Flex>
        <BioContinent />
      </Flex>

      <Cities />
    </Flex>
  )
}
