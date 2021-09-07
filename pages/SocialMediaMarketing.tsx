import React, {ReactElement} from 'react';
import {
    Center,
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Stack,
  Avatar,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';

import { FaSearchengin  ,FaSearchDollar , FaLaravel , FaGlobeAsia, FaBars} from 'react-icons/fa'
import {  DiCodeigniter} from 'react-icons/di'
import { GrNotes } from 'react-icons/gr'
import { SiMinutemailer } from 'react-icons/si'

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}


interface ServiceProps {
    title: string;
    Description: string;
    icon: ReactElement;
  }
  

export const data = [
    {
        id:1, title : 'Social Media Mangement Servicers' ,serviceItems :"",Description :"Social Media Accunts Handling services for contentent creation and posting the content regularly to make sure accounts have good rech and active" ,imgSource : FaSearchengin
    },
    {
        id:2, title : 'Strategy planning' ,serviceItems :"React Js Framework" ,Description : "Behind every successful campaigns their is key startegry to acheive greater results and yarget audience " ,imgSource : FaSearchDollar
    },
    {
        id:3, title : 'Branding' ,serviceItems :"React Js ,Angular js ",Description : "Eventhough you have a successfull or amazing product sometims they wont genrate revenue so , brand establishment plays a vital role in order to achieve sucessfull results.",imgSource : FaGlobeAsia
    },
    {
        id:4, title : 'Content creation' ,serviceItems :"React Js ,Angular js ",Description : "Dont worry we have amazing group of talented creators who can create amazing engageing content for your product / service .",imgSource : GrNotes
    },
    {
        id:5, title : 'Reputation Mangement' ,serviceItems :"React Js ,Angular js ",Description : "In appropriate ways of promoting sometimes may damage brand reputation .don't worry we have group of proffesional who can mange your brand reputation",imgSource : FaBars
    }
]



  const Service = ({ title,Description, icon }: ServiceProps) => {
    return (
      <Stack>
         
          <Center>{icon}</Center>
          <Center><Heading size="lg" fontWeight={400}>{title}</Heading></Center>
        <Text color={'gray.600'}>{Description}</Text>
      
      </Stack>
    );
  };
  



const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="blue" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



const DigitalMarketing = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Our Social Media Marketing Services</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://assets.entrepreneur.com/content/3x2/2000/20190820185239-GettyImages-985550942.jpeg?width=700&crop=2:1'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['SocialMediaHandlers', 'Branding', 'ReputationMangement', 'ContentCreation']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Social Media Marketing Services
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='gray.700'
            fontSize="lg">
             Social Media Marketing plays a vital role in business growth which helps to reach consumers.
            Marketing is a broad field, including attracting customers via social media platforms, 
            content creation, increasing brand awareness and more.
          </Text>
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        We Work On
      </Heading>
      <Divider marginTop="5" />

   
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                 {data.map((s=> 
                 <>
                     <Box
                        maxW={'330px'}
                        w={'full'}
                        bg='white'
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Stack
                        textAlign={'center'}
                        p={6}
                        color='gray.800'
                        align={'center'}>
                                 <Service 
                              icon={<Icon as={s.imgSource} width={100} height={100} />}
                              title={s.title}
                              Description={s.Description}

                            />
                            <Text
                                py={4}
                                fontSize={'sm'}
                                fontWeight={500}
                                bg='brand.100'
                                p={2}
                                px={3}
                                color={'white'}
                                rounded={'full'}>
                                {s.title}
                            </Text>
                            <Stack
                             direction={'row'} 
                             align={'center'} 
                             justify={'center'}>
                               
                            </Stack>
                            </Stack>
    
                       
                        </Box>
                                    </>
                                    ))}

                  </SimpleGrid>
    
  </Container>
  );
};

export default DigitalMarketing;