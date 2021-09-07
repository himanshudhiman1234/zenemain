import React from 'react';
import {
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
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

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

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv1HFFMjp0Hhho-5rpeW6N6VYeIK-YYu7ng&usqp=CAU"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const BlogPage = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1"></Heading>
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
                  'https://www.productplan.com/uploads/2019/11/agile-product-management.png'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            How We Run Agile Projects as Clients’ Extended Distributed Team
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            A recent report by Computereconomics found that in the 2018/19 period, the application development process has emerged as the one witnessing maximum outsourcing opportunity – 
            with 56% of the organizations around the world outsourcing their development requirements.
          </Text>
          <BlogAuthor name="sania" date={new Date('2021-01-06T19:01:27Z')} />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://www.covestic.com/wp-content/uploads/2021/04/agentchat.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              How ServiceNow Agent Chat and its Supporting Features Work
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Chat bots and live chat are nothing new. You’ve probably used chat on a web site while shopping or making an inquiry as a customer. Some chat experiences are good, 
            and some can actually hurt the customer experience. ServiceNow has a solution many organizations are successfully using to support their customers, consumers and internally for employees.


            </Text>
            <BlogAuthor
              name="Sania"
              date={new Date('2021-01-06T19:01:27Z')}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
        Like every industry that is leveraging the benefits of AR, the travel and tourism industry has also witnessed tremendous growth with this emerging technology. AR is playing a 
        crucial role in transforming the tourism landscape and boosting travel experiences for tourists.
        </Text>
        <Text as="p" fontSize="lg">
        In today’s fast-paced world, travelers love the ease of searching and booking tours on the go. So, if you want to catch a travelers attention in a sea of widely varying travel applications, 
        AR-based travel apps can come in handy by offering a unique competitive advantage.
        </Text>
        <Text as="p" fontSize="lg">
        Instead of replacing the real world elements like Virtual Reality does, AR overlays digital components over real ones to render a rich and visually appealing experience of 
        the existing places. The role of AR in travel apps has infinite possibilities. It has immense potential to assist and bring innovative changes to the travel and tourism industry. 
        </Text>
      </VStack>
    </Container>
  );
};

export default BlogPage;