import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,SimpleGrid
 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="KODONE ART SHOW">
    <Container>
      <Title>
      KODONE ART SHOW <Badge>2022</Badge>
      </Title>
      <P>
      Made a VIRTUAL art room for the artist Kodone's PUMA sponsored Art showcase in NewYork
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>MUSE</span>
        </ListItem>
       
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.muse.place/nice2meetukodone">
          Nice2MeetuKodone <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
       
    
</List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/IMG_1952.jpg" alt="menkiki" />
        <WorkImage src="/images/works/IMG_1953.jpg" alt="menkiki" />
      </SimpleGrid>
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
