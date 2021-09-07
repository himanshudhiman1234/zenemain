import React, {ReactElement} from 'react';
import {
    Center,
  Box,
  Heading,
  Link,
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
  Image,
  Avatar,
  SimpleGrid,
  Icon
} from '@chakra-ui/react';

import Head from 'next/head'

import {  SiAndroid, SiFlutter ,SiIonic, SiIos} from 'react-icons/si'

import { FaReact  ,FaAngular  , FaVuejs, FaLaravel , FaGlobeAsia} from 'react-icons/fa'
import {  DiCodeigniter} from 'react-icons/di'
import { GrNotes } from 'react-icons/gr'
import { SiMinutemailer } from 'react-icons/si'

import ElearningImg from '../public/assets/images.jpeg'

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
},
{
  id:6, title : 'React Native' ,serviceItems :"Angular js", Description : "React Native is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android." ,imgSource : FaReact
},
{
  id:7, title : 'Fluter' ,serviceItems :"React Js Framework" ,Description : "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows." ,imgSource : SiFlutter
},
{
  id:8, title : 'Ionic' ,serviceItems :"React Js ,Angular js ",Description : "The only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with Adaptive Styling, Ionic apps look and feel at home on every device.",imgSource : SiIonic
},
{
  id:9, title : 'Android' ,serviceItems :"React Js ,Angular js ",Description : "Android is a mobile operating system based on a modified version of the Linux kernel and other open source software.",imgSource : SiAndroid
},
{
  id:10, title : 'IOS' ,serviceItems :"React Js ,Angular js ",Description : "iOS is the platform that has given a whole new definition to app economy. The user interface and functionalities of iPhone / iPad devices have increased the demand of iOS app development to another level.",imgSource : SiIos
},

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
    <>  
       <Head>
    <title>Stackzenith Pvt Ltd.</title>
    <meta name="description" content="Stackzenith IT Solutions Pvt Ltd Digital Marketing Services" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">E-learning Services</Heading>
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
                src={"https://assets.telegraphindia.com/abped/2020/Sep/1600356916_e-learning-in-pandemic-crisis.jpg"}
                alt="E learning"
                objectFit={`contain`}
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
          <BlogTags tags={['ReactJs', 'AngularJs', 'NodeJS', 'Android','Flutter','ReactNative']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            E-Learning
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='gray.700'
            fontSize="lg">
            E-learning ,Now start learning from anywhere it simple select the choice of course you want to learn ,go through the circulilum enroll yourself get credentials start learning by industrial professionals , get a certificate after sucessfull completion of course.
          </Text>
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Courses
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
  </>
  );
};

export default DigitalMarketing;