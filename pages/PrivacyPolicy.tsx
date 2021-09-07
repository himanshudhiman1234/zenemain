import { Heading , Box,Text} from '@chakra-ui/layout'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div>
            <Box p={5} m={2}>
            <Heading> This Privacy Policy applies to the stackzenith.com</Heading>
            <Text p={5} m={2} >
            stackzenith.com recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on https://stackzenith.com and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.
            </Text>

            <Heading>Information we collect </Heading>
            <Text>
            Contact information. We might collect your name, email, mobile number, phone number, street, city, state, pincode,  country and ip address.

Payment and billing information. We might collect your billing name, billing address and payment method when you buy a ticket. We never collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner CC Avenue.

Information you post. We collect information you post in a public space on our website or on a third-party social media site belonging to Codesoftic.com.

Demographic information. We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.

Other information. If you use our website, we may collect information about your IP address and the browser you’re using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.
            </Text>
            </Box>


            
        </div>
    )
}

export default PrivacyPolicy
