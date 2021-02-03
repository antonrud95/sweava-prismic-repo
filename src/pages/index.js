import React from "react"
import {graphql} from "gatsby"

import Layout from '../components/Layout'
import Hero from "../components/sections/Hero/Hero"

import '../styles/index.scss'



const IndexPage = ({data}) => {
  console.log(data.allPrismicInfoSection)
  return (
    <Layout>
      <Hero 
        title={data.allPrismicInfoSection.nodes[1].data.title[0].text} 
        text={data.allPrismicInfoSection.nodes[1].data.description[0].text} 
        image={data.allPrismicInfoSection.nodes[1].data.picture.url}
        button={data.allPrismicInfoSection.nodes[1].data.button[0].text}
      />
    </Layout>
  )
}
export const query = graphql`
  query {
    allPrismicInfoSection {
      nodes {
        data {
          uppertitle {
            text
          }
          title {
            text
          }
          sectiontitle {
            text
          }
          picture {
            url
          }
          description {
            text
          }
          button {
            text
          }
        }
      }
    }
  }
`;
export default IndexPage
