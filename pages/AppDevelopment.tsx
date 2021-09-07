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

import { FaReact } from 'react-icons/fa'
import {  SiAndroid, SiFlutter ,SiIonic, SiIos} from 'react-icons/si'


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
        id:1, title : 'React Native' ,serviceItems :"Angular js", Description : "React Native is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android." ,imgSource : FaReact
    },
    {
        id:2, title : 'Fluter' ,serviceItems :"React Js Framework" ,Description : "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows." ,imgSource : SiFlutter
    },
    {
        id:3, title : 'Ionic' ,serviceItems :"React Js ,Angular js ",Description : "The only mobile app stack that enables web developers to build apps for all major app stores and the mobile web from a single codebase. And with Adaptive Styling, Ionic apps look and feel at home on every device.",imgSource : SiIonic
    },
    {
        id:4, title : 'Android' ,serviceItems :"React Js ,Angular js ",Description : "Android is a mobile operating system based on a modified version of the Linux kernel and other open source software.",imgSource : SiAndroid
    },
    {
        id:5, title : 'IOS' ,serviceItems :"React Js ,Angular js ",Description : "iOS is the platform that has given a whole new definition to app economy. The user interface and functionalities of iPhone / iPad devices have increased the demand of iOS app development to another level.",imgSource : SiIos
    },

]



  const Service = ({ title,Description, icon }: ServiceProps) => {
    return (
      <Stack>
         
          <Center>{icon}</Center>
          <Center><Heading size="lg" fontWeight={400}>{title}</Heading></Center>
        <Text color='gray.600'>{Description}</Text>
      
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



const AppDevelopment = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Our App Devlopment Services</Heading>
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
                  'https://cynoteck.com/wp-content/uploads/2020/08/mobile-development-banner.png'
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
          <BlogTags tags={['ReactNative', 'Flutter', 'Ionic','Android', 'ios']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            App Devlopment Services
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color='gray.700'
            fontSize="lg">
            It's tempting to spring for packaged software as a quick fix for your immediate needs. But off-the-shelf apps have limits that can box your evolving business in. 
            That's why you need a do-it-yourself platform—to build customized solutions that grow along with you.
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
                                color='white'
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

export default AppDevelopment;