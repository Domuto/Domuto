import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ETHNIC SH*T VIRTUAL STORE ">
    <Container>
      <Title>
      ETHNIC SH*T VIRTUAL STORE  <Badge>2022-</Badge>
      </Title>
      <P>
      Added a 3D VIRTUAL STORE to a Shopify Website    
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.muse.place/estate">
          ETHNIC SH*T VIRTUAL STORE  <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MUSE</span>
        </ListItem>
      
      </List>
     
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/IMG_1957.jpg" alt="menkiki" />
        <WorkImage src="/images/works/IMG_1958.jpg" alt="menkiki" />
      </SimpleGrid>
     
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
