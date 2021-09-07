import React from 'react'

import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
  } from '@chakra-ui/react';

const AboutUs = () => {
    return (
        <div>
               <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            We are {' '}
            <Text as={'span'} color={'brand.100'}>
              StackZenith IT Solutions
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            We deliver practical IT services and solutions that optimize the value technology can bring to business.Our approach delivers solutions that
             are based on industry best practices but customized to meet the unique needs of each client.
          </Text>
         
           
          
        </Stack>

   
      </Container>
    
        </div>
    )
}

export default AboutUs
