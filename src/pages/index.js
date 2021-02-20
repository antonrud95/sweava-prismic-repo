import React from "react"
import {graphql} from "gatsby"

import Layout from '../components/Layout'
import SliceZone from "../components/slicezone"

import '../styles/index.scss'

const IndexPage = ({data}) => {
  if (!data) return null
  const document = data.allPrismicPage.edges[0].node.data
  return (
    <Layout>
      <SliceZone sliceZone={document.body} />
    </Layout>
  )
}
export const query = graphql`
  query {
    allPrismicPage {
      edges {
        node {
          data {
            body {
              ... on PrismicPageBodyHero {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  text {
                    text
                  }
                  image {
                    fluid {
                      src
                    }
                  }
                  button {
                    text
                  }
                }
              }
              ... on PrismicPageBodyInfofirst {
                id
                slice_type
                primary {
                  uppertitle {
                    text
                  }
                  title {
                    text
                  }
                  description {
                    text
                  }
                  sectiontitle {
                    text
                  }
                  image {
                    fluid {
                      src
                    }
                  }
                  mobileimage {
                    fluid {
                      src
                    }
                  }
                }
              }
              ... on PrismicPageBodyProducts {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  description {
                    text
                  }
                  image {
                    fluid {
                      src
                    }
                  }
                }
              }
              ... on PrismicPageBodyInfosecond {
                id
                slice_type
                primary {
                  uppertitle {
                    text
                  }
                  title {
                    text
                  }
                  text {
                    text
                  }
                  image {
                    fluid {
                      src
                    }
                  }
                  mobileimage {
                    fluid {
                      src
                    }
                  }
                }
              }
              ... on PrismicPageBodyDownloads {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  button {
                    text
                  }
                  image {
                    fluid {
                      src
                    }
                  }
                  mobileimage {
                    fluid {
                      src
                    }
                  }
                }
              }
              ... on PrismicPageBodyFollow {
                id
                slice_type
                primary {
                  title {
                    text
                  }
                  image {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default IndexPage
