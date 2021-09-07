import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Box,
    Text,
    VStack,
    HStack,
    useBreakpointValue,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Textarea,
    Link,
    Heading,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ContactUs() {
    let [value, setValue] = React.useState("")

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
  
    return (

     <> 


                    <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Contact Us</Heading>
       
        </Stack>

     

        <Box
           
           spacing={{ base: 10, md: 8 }}
          rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={10}>
           
           <Stack >
            
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="contactnumber">
                <FormLabel>Contact Number</FormLabel>
                <Input type="Number" />
              </FormControl>
              <FormControl id="contactnumber">
                <FormLabel>Message</FormLabel>
                            <Textarea
                                    value={value}
                                    onChange={handleInputChange}
                            
                                    placeholder="message"
                                    size="sm"
                />              </FormControl>
              <Stack >
                
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.100',
                  }}>
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Box>
        




      </>
    );
  }