import { Grid , Container } from 'theme-ui';
import React from 'react';
import { Link } from '../../Headers/link';
import BlockTitle from '../../Headers/block-title';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Center } from '@chakra-ui/react';
const CtaThree = () => {
  return (
    <Box as="section" sx={styles.ctaThree}>
      <Container>
        <Flex sx={styles.ctaThree.row}>
          <Box sx={styles.ctaThree.colTwo}  >
            <Box className="my-auto">
              <Box sx={styles.ctaThree.content}>
                <BlockTitle
                  tagline=""
                  heading={
                    'What we have done so far?'
                  }
                />
                <Text as="p">
                  {
                    'Till now we have done 60+ projects with more than 80+ clients .'
                  }
                </Text>
                {/* <Link
                  path="#"
                  label="Explore details"
                  variant="buttons.primary"
                /> */}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.ctaThree.colOne}>
            <Grid sx={styles.ctaThree.grid}>
              <Box sx={styles.ctaThree.box} shadow={'lg'} _hover={{
      shadow :'2xl'
    }} rounded={"md"} >
                <Heading as="h3" sx={styles.ctaThree.color1}>
                  60+
                </Heading>
                <Text as="p">{'We have more than \n Projects'}</Text>
              </Box>
              <Box sx={styles.ctaThree.box} shadow={'lg'} _hover={{
      shadow :'2xl'
    }} rounded={"md"}>
                <Heading sx={styles.ctaThree.color2} as="h3">
                  80+
                </Heading>
                <Text as="p">
                  {'Happy \n Customers'}
                </Text>
              </Box>
              <Box sx={styles.ctaThree.box} shadow={'lg'} _hover={{
      shadow :'2xl'
    }} rounded={"md"}>
                <Heading sx={styles.ctaThree.color3} as="h3">
                  20+
                </Heading>
                <Text as="p">{'Daily updated blog \n post maintain'}</Text>
              </Box>
              <Box sx={styles.ctaThree.box} shadow={'xl'} _hover={{
      shadow :'xl'
    }} rounded={"md"}>
                <Heading sx={styles.ctaThree.color4} as="h3">
                  & 80k
                </Heading>
                <Text as="p">
                  {'git committs \n '}
                </Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaThree;

const styles = {
  ctaThree: {
    paddingTop: [0, null, null, null, 50, 120],
    paddingBottom: [120, null, null, null, 100, 220],
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: ['column', null, null, null, 'row-reverse'],
    },
    colOne: {
      flex: ['0 0 100%', null, null, null, '0 0 55%'],
      paddingRight: ['0', null, null, null, null, '34px'],
    },
    colTwo: {
      flex: ['0 0 100%', null, null, null, '0 0 45%'],
      display: 'flex',
      pl: ['0', null, null, null, '40px', '0'],
      '.my-auto': {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '100%',
      },
      '@media(max-width:991px)': {
        flex: '0 0 100%',
        marginTop: '0px',
        marginBottom: '45px',
        textAlign: 'center',
      },
    },
    grid: {
      display: 'grid',
      gridGap: '45px',
      gridTemplateColumns: '1fr 1fr',
      '@media(max-width:1199px)': {
        gridGap: '30px',
      },
      '@media(max-width:425px)': {
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
      },
    },
    blockTitle: {
      h3: {
        fontSize: ['24px', null, null, '30px', '36px', null, '48px'],
        lineHeight: ['1.44', null, null, null, null, null, '1.15'],
        lineHeight: 1.44,
        maxWidth: ['275px', '450px', null, null, '100%'],
        marginLeft: ['auto', null, null, null, '0'],
        marginRight: ['auto', null, null, null, '0'],
        whiteSpace: ['normal', null, null, null, 'pre-line'],
      },
    },
    content: {
      '@media(min-width:1025px)': {
        paddingLeft: '41px',
      },
      '> p': {
        whiteSpace: ['normal', null, null, null, 'pre-line'],
        fontSize: ['15px', null, null, '16px', null, '18px'],
        lineHeight: ['2', null, null, null, null, '2.33'],
        color: '#02073E',
        marginBottom: '30px',
        marginTop: '25px',
        '@media(max-width:425px)': {
          whiteSpace: 'normal',
          paddingLeft: '15px',
          paddingRight: '15px',
          marginTop: '20px',
          marginBottom: '20px',
        },
      },
      '@media(max-width:991px)': {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '20px',
      },
    },
    box: {
      boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      paddingTop: '95.5px',
      paddingBottom: '95.5px',
      '&:nth-of-type(1)': {
        top: '70px',
      },
      '&:nth-of-type(3)': {
        top: '70px',
      },
      '@media(max-width:1199px)': {
        paddingTop: '35.5px',
        paddingBottom: '35.5px',
        '&:nth-of-type(1)': {
          top: '40px',
        },
        '&:nth-of-type(3)': {
          top: '40px',
        },
      },
      '@media(max-width:425px)': {
        '&:nth-of-type(1)': {
          top: '0px',
        },
        '&:nth-of-type(3)': {
          top: '0px',
        },
      },
      h3: {
        margin: 0,
        fontSize: '36px',
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: '-1.5px',
        '@media(min-width:1281px)': {
          fontSize: '55px',
        },
        '@media(min-width:1441px)': {
          fontSize: '72px',
        },
      },
      '> p': {
        margin: 0,
        marginTop: '7px',
        fontSize: '18px',
        color: '#0F2137',
        lineHeight: 1.39,
        letterSpacing: '-0.5px',
        opacity: 0.7,
        whiteSpace: 'pre-line',
        '@media(max-width:575px)': {
          fontSize: '15px',
          lineHeight: 1.65,
        },
      },
    },
    color1: {
      color: '#EF9E48',
    },
    color2: {
      color: '#FF753A',
    },
    color3: {
      color: '#FA578E',
    },
    color4: {
      color: '#E682FF',
    },
  },
};
