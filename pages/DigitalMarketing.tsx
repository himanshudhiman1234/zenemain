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

import { FaSearchengin  ,FaSearchDollar , FaLaravel , FaGlobeAsia} from 'react-icons/fa'
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
        id:1, title : 'Search engine optimization (SEO)' ,serviceItems :"Angular js", Description : "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines." ,imgSource : FaSearchengin
    },
    {
        id:2, title : 'Pay-per-click advertising (PPC)' ,serviceItems :"React Js Framework" ,Description : "Pay-per-click is an internet advertising model used to drive traffic to websites, in which an advertiser pays a publisher when the ad is clicked. " ,imgSource : FaSearchDollar
    },
    {
        id:3, title : 'Social media management' ,serviceItems :"React Js ,Angular js ",Description : "Social media managers are responsible for curating a brand's social channels. They monitor, moderate and respond to audience comments,manage social media partnerships with other brands.",imgSource : FaGlobeAsia
    },
    {
        id:4, title : 'Content marketing' ,serviceItems :"React Js ,Angular js ",Description : "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online.",imgSource : GrNotes
    },
    {
        id:5, title : 'Email marketing' ,serviceItems :"React Js ,Angular js ",Description : "Email marketing is the act of sending a commercial message, typically to a group of people, using email. In its broadest sense, every email sent to a potential or current customer.",imgSource : SiMinutemailer
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
      <Heading as="h1">Our Digital Marketing Services</Heading>
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
          <BlogTags tags={['Seo', 'SocialMedia', 'PPC', 'EmailMarketing','ContentMarketing']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Digital Marketing
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='gray.700'
            fontSize="lg">
            Digital marketing is the use of the Internet to reach consumers.
            Marketing is a broad field, including attracting customers via email, 
            content marketing, search platforms, social media, and more.
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