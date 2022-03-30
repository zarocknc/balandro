import {
    Box,
    chakra,
    Container, Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';



export default function Footer(){
    return(
        <>
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2022 Balandro software SACS. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                        <LinkBox label={'Twitter'} href={'https://www.twiter.com'}>
                            <LinkOverlay href='https://www.twitter.com'><FaTwitter /></LinkOverlay>
                        </LinkBox>
                        <LinkBox label={'YouTube'}>
                            <LinkOverlay href='https://youtu.be/BbV_SCZwfOM?t=10'><FaYoutube /></LinkOverlay>
                        </LinkBox>
                        <LinkBox label={'Instagram'} href={'#'}>
                            <LinkOverlay href="https://www.instagram.com/tv/CX6rBT9IRHn/?utm_source=ig_web_copy_link"><FaInstagram /></LinkOverlay>
                        </LinkBox>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}