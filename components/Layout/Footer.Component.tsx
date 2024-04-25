import { FaGithubSquare } from "react-icons/fa";
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-around' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>Made by Guilherme Moreno Thimóteo da Cunha</Text>
        <Stack direction='row' justify='center' align='center'>
        <Text>This site is open source. Read the source code here</Text>
          <Box as="a" href={'https://github.com/StellaThimoty/Fatec'}>
            <FaGithubSquare/>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
