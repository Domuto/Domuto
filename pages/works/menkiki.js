import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="STRESSGODS">
    <Container>
      <Title>
        STRESSGODS <Badge>2021</Badge>
      </Title>
      <P>
      Wesbite for the brand STRESSGODS
      </P>
      
  

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>SHOPIFY</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Custom Liquid and CSS </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://stressgods.com">
        STRESSGODS <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/IMG_1960.jpg" alt="menkiki" />
        <WorkImage src="/images/works/IMG_1959.jpg" alt="menkiki" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
