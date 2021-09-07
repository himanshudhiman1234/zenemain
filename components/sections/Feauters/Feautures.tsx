import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Center ,IconProps} from '@chakra-ui/react';
import { FcAssistant, FcCustomerSupport, FcFlashOn, FcLike } from 'react-icons/fc';
import { BiChart, BiCode, BiLike, BiSupport } from 'react-icons/bi';
import { GrSupport } from 'react-icons/gr';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack  p={4} align={'center'} shadow={'lg'} _hover={{
      shadow :'2xl'
    }} rounded={"md"}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text  fontWeight={600}>{title}</Text>
      <Text   textAlign={'center'}
      color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function FeauturesPage() {
  return (
      <>
    <Center>
        {/* <Heading as="h2" size="xl">Why we ?</Heading> */}
        {/* <Text>we the best service providers in india</Text> */}
    </Center>
    <Box p={20}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          icon={<Icon as={BiCode} w={10} h={10}  color="brand.100" />}
          title={'Code Quality'}
          text={
            'It is the most effective way to lower technical debt. When the code is clean and elegant, it is easy to understand, maintain and extend.'
          }
        />
        
        <Feature
          icon={<Icon as={BiSupport} w={10} h={10} color="brand.100" />}
          title={'Support 24x7'}
          text={
            'Support model ensures that a customer is able to get their issue resolved no matter what day or time it is.'
          }
        />

        <Feature
          icon={<Icon as={BiChart} w={10} h={10} color="brand.100" />}
          title={'Results'}
          text={
            'We believe in delivering quality of services which indeed gives us good results as per our client reqirements & our team which strives hard to deliver fruitful results for our clients..'
          }
        />

        <Feature
          icon={<Icon as={BiLike} w={10} h={10} color="brand.100" />}
          title={'Client Satisfaction'}
          text={
            'Client satisfaction is defined as a measurement that determines how happy customers are with a company products, services, and capabilities.'
          }
        />

      </SimpleGrid>
    </Box>
    </>
  );
}


export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};