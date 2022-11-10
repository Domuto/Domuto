import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="THIRTEENTH">
    <Container>
      <Title>
      THIRTEENTH <Badge>2022</Badge>
      </Title>
      <P>
      A website for the brand THIRTEENTH
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
          <span>SHOPIFY</span>
        </ListItem>
      
</List>       
<WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/menkiki_01.png" alt="menkiki" />
        <WorkImage src="/images/works/menkiki_02.png" alt="menkiki" />
      </SimpleGrid>  
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
