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

import { FaReact  ,FaAngular , FaLaravel , FaVuejs} from 'react-icons/fa'
import {  DiCodeigniter} from 'react-icons/di'


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
        id:1, title : 'Angular Js' ,serviceItems :"Angular js", Description : "AngularJS is a JavaScript framework for building MVC-based web applications. It allows you to split the business logic layer, data layer, and presentation layer." ,imgSource : FaAngular
    },
    {
        id:2, title : 'React Js' ,serviceItems :"React Js Framework" ,Description : "ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease." ,imgSource : FaReact
    },
    {
        id:3, title : 'Laravel' ,serviceItems :"React Js ,Angular js ",Description : "Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern.",imgSource : FaLaravel
    },
    {
        id:4, title : 'Codeigniter' ,serviceItems :"React Js ,Angular js ",Description : "CodeIgniter is a powerful PHP framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications",imgSource : DiCodeigniter
    },
    {
        id:5, title : 'Vuejs' ,serviceItems :"React Js ,Angular js ",Description : "Vue. js is an open-source progressive JavaScript framework for building user interfaces (UIs) and single-page applications.",imgSource : FaVuejs
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



const WebDevelopment = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Our Web Services</Heading>
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
                  'https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/11/Artificial-Intelligence-5.jpg'
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
          <BlogTags tags={['ReactJs', 'AngularJs', 'Larvel', 'CodeIgniter','PWA']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Web Development
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='gray.700'
            fontSize="lg">
            Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. 
            Then, master the back-end and APIs to round out your full-stack skills.
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

export default WebDevelopment;