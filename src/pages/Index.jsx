import { Box, Container, Text, VStack, Heading, Button, Image, SimpleGrid, Flex, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="blue.900" color="white" py={10}>
        <Container maxW="container.lg">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">Ett modernt fastighetssystem</Heading>
            <Text fontSize="lg">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</Text>
            <Text>kontakt@tenfast.se</Text>
            <Text>08-199 552</Text>
            <Button colorScheme="teal" size="lg">Kom igång</Button>
          </VStack>
        </Container>
      </Box>

      <Box py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6} textAlign="center">Några nöjda kunder</Heading>
          <SimpleGrid columns={[2, null, 4]} spacing={10} justifyItems="center">
            <Image src="/images/customer1.png" alt="Customer 1" />
            <Image src="/images/customer2.png" alt="Customer 2" />
            <Image src="/images/customer3.png" alt="Customer 3" />
            <Image src="/images/customer4.png" alt="Customer 4" />
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={10} bg="gray.100">
        <Container maxW="container.lg">
          <Heading size="lg" mb={6} textAlign="center">Fastighetssystemet för din verksamhet</Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <VStack align="start" spacing={4}>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Webbaserat</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Enkel prissättning</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Automatisera din verksamhet</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Allt i ett</Text>
              </Flex>
            </VStack>
            <Image src="/images/features.png" alt="Features" />
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6} textAlign="center">Det här får du med TenFAST</Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <VStack align="start" spacing={4}>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Avtalskapare med mallar</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Hyresgäst inloggning</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Bostadskö</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Bokföring</Text>
              </Flex>
            </VStack>
            <VStack align="start" spacing={4}>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Statistik</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Felanmälan</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Automatiska inbetalningar</Text>
              </Flex>
              <Flex align="center">
                <FaCheckCircle size="24px" />
                <Text ml={2}>Öppet API</Text>
              </Flex>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={10} bg="gray.100">
        <Container maxW="container.lg">
          <Heading size="lg" mb={6} textAlign="center">Passar stora och små</Heading>
          <SimpleGrid columns={[1, null, 3]} spacing={10}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Free</Heading>
              <Text mt={4}>0 kr</Text>
              <Text mt={4}>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
              <Button mt={4} colorScheme="teal">Kom igång</Button>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Pro</Heading>
              <Text mt={4}>10 kr / hyresobjekt / månad</Text>
              <Text mt={4}>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
              <Button mt={4} colorScheme="teal">Kom igång</Button>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Enterprise</Heading>
              <Text mt={4}>Kontakta oss</Text>
              <Text mt={4}>För fastighetsbolag eller förvaltare från 10 till tusentals hyresobjekt.</Text>
              <Button mt={4} colorScheme="teal">Kontakta oss</Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <Box py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6} textAlign="center">Vanliga frågor</Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vad är TenFAST fastighetssystem?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Är TenFAST webbaserat?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd din dator eller mobilen!
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vad kostar systemet?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Funkar fastighetssystemet på mobilen?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, du kan använda TenFAST på både dator och mobil.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hur kan fastighetssystemet vara så billigt?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Varför kan jag använda det gratis?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST är gratis för mindre hyresvärdar.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vad räknas som ett hyresobjekt?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ett hyresobjekt är en enskild bostad eller lokal som hyrs ut.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Vilka funktioner finns i fastighetsprogrammet?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST erbjuder en mängd funktioner inklusive avtalskapare, hyresgäst inloggning, bokföring, statistik och mycket mer.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Kan jag skapa hyresavtal och signera digitalt?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, du kan skapa och signera hyresavtal digitalt med TenFAST.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Kan hyresgästen använda det?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, hyresgäster kan logga in och använda systemet för att se sina hyresavtal, göra felanmälningar och mycket mer.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Indexering av hyra
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                TenFAST stödjer indexering av hyra baserat på olika index.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Hur gör jag med mina befintliga hyresavtal?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Du kan importera dina befintliga hyresavtal till TenFAST.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Kan jag få hjälp att komma i gång?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                Ja, TenFAST erbjuder support för att hjälpa dig att komma i gång.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

      <Box py={10} bg="gray.100">
        <Container maxW="container.lg" textAlign="center">
          <Text>Logga in</Text>
          <Text>kontakt@tenfast.se</Text>
          <Text>08-199 552</Text>
          <Text>Sankt Eriksgatan 114, 113 32 Stockholm</Text>
          <Text>© TenFAST AB 2024</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;