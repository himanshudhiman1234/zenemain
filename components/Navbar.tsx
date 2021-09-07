import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
  Search2Icon
} from '@chakra-ui/icons';

import { ReactElement } from 'react';
import { FaBlog, FaGlobeAsia, FaMobile } from 'react-icons/fa';
import { SiAllocine, SiGnusocial, SiMaas } from 'react-icons/si';
import { GrDashboard } from 'react-icons/gr';

import svgIcon from '../public/full-stack.svg'
import { BiBookReader } from 'react-icons/bi';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <a href="/">
        <Heading
            fontWeight={600}
            fontSize={{ base: 'xl', sm: 'sm', md: 'lg' }}
            lineHeight={'140%'}>
            
            <Text as={'span'} color={'brand.100'}>
             StackZenith
            </Text>
            </Heading>
          </a>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'brand.100'}
            href={'#'}
            _hover={{
              bg: 'brand.100',
            }}>
            Book Appointment
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel ,id , icon }: NavItem) => {
  return (
    <Link
      key={id}
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('cyan.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
      <Box
        
        
          paddingInline={4}>
            {icon}
        </Box>
        <Flex >
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.100' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
         </Box>
         </Flex>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'brand.100'}  w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.id} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.id} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

//#19c282

interface NavItem {
  id:number;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  icon :ReactElement;
}

const NAV_ITEMS: Array<NavItem> = [
  { id:1,
    label: 'Home',
    href: '/',
    icon : <PhoneIcon  w={6} h={6} color="brand.100" />,
  },
  {
    label: 'Our Services',
    id:2,
    icon : <PhoneIcon />,
    children: [
      { id:21,
        label: 'Website Development',
        subLabel: 'ReactJS ,NextJS, AngularJs, Laravel, codeigniter',
        href: '/WebDevelopment',
        icon : <Icon as={FaGlobeAsia} 
        w={6} h={6} color="brand.100"/>,

      },
      { id:22,
        label: 'App Development',
        subLabel: 'Android , IOS , Hybrid Application Development',
        href: '/AppDevelopment',
        icon : <Icon as={FaMobile}  w={6} h={6} color="brand.100" />,

      },
      { id:23,
        label: 'Social Media  Marketing',
        subLabel: 'Stand out in Crowd',
        href: '/SocialMediaMarketing',
        icon : <Icon as={SiGnusocial}  w={6} h={6} color="brand.100"/>,

      },
      { id:24,
        label: 'Digital Marketing',
        subLabel: 'SEO ,SEM ,Content Optimization',
        href: '/DigitalMarketing',
        icon : <Icon as={Search2Icon}  w={6} h={6} color="brand.100"/>,

      },
      { id:25,
        label: 'E-Learning',
        subLabel: 'Get trained by Professionals',
        href: '/Elearning',
        icon : <Icon as={BiBookReader}  w={6} h={6} color="brand.100"/>,

      },
      // { id:26,
      //   label: 'Cloud Services',
      //   subLabel: 'SaaS (Software as service)',
      //   href: '/CloudServices',
      //   icon : <Icon as={SiMaas}  w={6} h={6} color="brand.100"/>,

      // },
    ],
  },
  {
    label: 'Blog',
    id:3,
    icon : <PhoneIcon />,
    children: [
      {  id:41,
        label: 'Developers Board',
        subLabel: 'latest articles',
        href: '/Blog',
        icon : <Icon as={FaBlog}  w={6} h={6} color="brand.100"/>,

      }
     
    ],
  },
  { id:66,
    label: 'About Us',
    href: '/AboutUs',
    icon : <PhoneIcon />,

  },
  { 
     id:77,
    label: 'Contact us',
    href: '/ContactUs',
    icon : <PhoneIcon />,

  },
  { id:88,
    label: 'Careers',
    href: '/Careers',
    icon : <PhoneIcon />,

  },
];