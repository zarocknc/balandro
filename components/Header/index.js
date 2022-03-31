import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbSeparator,
    Flex, Heading,
    Spacer,
    Button
} from '@chakra-ui/react'
import Link from 'next/link'


export default function Header(){
    return(
        <Flex bgGradient="linear(to-l, #7928CA, #FF0080)" align='center'>

            <Box >
                <Heading size='md'>Balandro software</Heading>
            </Box>
            <Spacer/>
            <Breadcrumb>
            <BreadcrumbItem>
                <Link href='/'><Button m={2} colorScheme='green'>Principal</Button></Link>
            </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link href='/acercade'><Button m={2} colorScheme='green'>A cerca de</Button></Link>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <Link href='/soluciones'><Button m={2} colorScheme='green'>Soluciones</Button></Link>
                </BreadcrumbItem>
        </Breadcrumb>

        </Flex>







    )
}