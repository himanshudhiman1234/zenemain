import Image from 'next/image'
import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';


import HeroImg from './heroS.svg';
import BannerTxt from './banner-text-line.png';

import { Typewriter } from 'react-simple-typewriter'

  
  export default function HeroSection() {
    return (
      <Stack 
      bgGradient={`linear(-180deg, #E0F5FA 0%, #FFFDE6 100%)`}
      minH={'100vh'} 
      direction={{ base: 'column', md: 'row' }} 
      >
        <Flex p={8} flex={1} align={'center'} justify={'center'} >
          <Stack spacing={6} w={'full'} maxW={'lg'} >
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
             >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}>
                StackZenith
              </Text>
              <br />{' '}
              <Text  
                as={'span'}>
           
              One stop destination for amazing  <br />
              <Typewriter
            words={['Web Devlopment', 'App Development', 'Seo Development', 'Graphic Designing!']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => console.log(`Done after 5 loops!`)}
          />
              </Text >{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Our best web design and development service help your business find the right digital solutions to promote your business and earn more revenue.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                bgColor={'brand.100'}
                rounded={'full'}
                _hover = {{
                  bgColor : 'blue.700'
                }}
                color={'white'}
              >
                View Projects
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
        <Image 
        src={HeroImg}
        width={500}
        height={500}
         alt="Hero Image" />
        </Flex>
      </Stack>
    );
  }




  