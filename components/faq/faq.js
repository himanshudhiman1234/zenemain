/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from '../Headers/section-header';
import Accordion from '../accordion/accordion';
const faqs = [
  {
    title: 'Does your company offers maintainece ?',
    contents: (
      <div>
        Yes we do offer maintaince services for products  either existing or newly created based on mutal greement .
      </div>
    ),
  },
  {
    title: 'Do you have support team?',
    contents: (
      <div>
        Yes , we will get back to you with 24hrs after request is raised via email / website .
      </div>
    ),
  },
  {
    title: `Website response taking time, how to improve?`,
    contents: (
      <div>
       We have dedicated team for handling this kind of issues feel free to contact us for solution.
      </div>
    ),
  },
  {
    title: `does your company offers bug fixing services in existing project ?`,
    contents: (
      <div>
        Yes , we do offer redesin and redevelopment of web sites and applications along with bug fixing .
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
