import 'semantic-ui-css/semantic.min.css'
import * as React from "react"
import { HeadFC, Link, PageProps, graphql, navigate } from "gatsby"
import Layout from '../components/layout'
import { Divider, Header, Image, Container, Grid, Icon, Button, Dimmer, Loader, Progress, Segment, Card, Rating } from 'semantic-ui-react'
import scrollTo from 'gatsby-plugin-smoothscroll';

const pageStyles = {
  color: "#232129",
  // padding: 96,
  fontFamily: "'Kanit', Roboto, sans-serif, serif",
}

const extra = (
  <a>
    <Rating icon='heart' defaultRating={1} maxRating={5} />
  </a>
)

const IndexPage: React.FC<PageProps> = ({ data }: any) => {

  const post = data.allMarkdownRemark.nodes;
  console.log(post);
  return (
    <div>
      <Layout>
        <Container textAlign='center'>

          <Grid columns={1} divided centered>
            <Grid.Row>
              <Header as='h1' icon textAlign='center' size='huge'>
                {/* <Icon name='users' circular /> */}
                <Image src='https://em-content.zobj.net/thumbs/160/facebook/355/bouquet_1f490.png' />
                <Header.Content style={pageStyles}>ยินดีต้อนรับสู่ของขวัญชิ้นใหญ่น้าคนเก่ง</Header.Content>
              </Header>
            </Grid.Row>

            <Grid.Row>
              <Image src='../../Her.jpg' circular size='medium' />
            </Grid.Row>

            <Grid.Row>
              <Container text>
                <p> สวัสดีน้า คนพิเศษ ไหนๆวันนี้ก็วันเกิด(เรา) เราเลยมีของของขวัญชิ้นใหญ่มากก มาให้ จะ <Button color='red' onClick={() => scrollTo('#first-content')}>กดตรงนี้!</Button> หรือจะเลื่อนลงไปเองก็ได้</p>
              </Container>
            </Grid.Row>

            <Grid.Row>
              <Segment style={{ width: "90vw" }}>
                <Progress percent={25} inverted progress error>
                  Love
                </Progress>
                <Progress percent={50} inverted progress error>
                  Lovee รักก
                </Progress>
                <Progress percent={70} inverted progress error>
                  Loveee รักกก น้าาา
                </Progress>
                <Progress percent={100} inverted progress error>
                  Loveeeee Yaaaa! มาา กอดด เลยย น้าาา
                </Progress>
              </Segment>
            </Grid.Row>

            <div id="first-content"></div>
            <Grid.Row only='mobile'>
              <Card.Group itemsPerRow={1}>
              {post.map((x: any) => (
                // <Card raised image={x.frontmatter.img} />
                <Card raised
                  image={x.frontmatter.img}
                  meta={x.frontmatter.img}
                  header={x.frontmatter.title}
                  description={x.frontmatter.description}
                  extra={extra}
                />
              ))}
              </Card.Group>
            </Grid.Row>

            <Grid.Row only='tablet'>
              <Card.Group itemsPerRow={3}>
              {post.map((x: any) => (
                <Card raised
                  image={x.frontmatter.img}
                  header={x.frontmatter.title}
                  description={x.frontmatter.description}
                  extra={extra}
                />
              ))}
              </Card.Group>
            </Grid.Row>

            <Grid.Row only='computer'>
              <Card.Group itemsPerRow={4}>
              {post.map((x: any) => (
                <Card raised
                  image={x.frontmatter.img}
                  header={x.frontmatter.title}
                  description={x.frontmatter.description}
                  extra={extra}
                />
              ))}
              </Card.Group>
            </Grid.Row>
            {/* ทำลิสตรงนี้ */}
            {/* {post.map((x: any) => (
              <Grid.Row>
                <Image src={x.frontmatter.img}/>
                <Header as="h1">
                  {x.frontmatter.title}
                  <Header.Subheader>{x.frontmatter.description}</Header.Subheader>
                </Header>
              </Grid.Row>
            ))} */}

          </Grid>
        </Container>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
query postlist {
  allMarkdownRemark(sort: {frontmatter: {no: ASC}}) {
    nodes {
      frontmatter {
        title
        description
        img
      }
      id
    }
  }
}`