import React from "react"
import {graphql} from "gatsby"

import Layout from '../components/Layout'
import Hero from "../components/sections/Hero/Hero"
import Info from "../components/sections/Info/Info"
import Products from "../components/sections/Products/Products"
import Downloads from "../components/sections/Downloads/Downloads"
import Follow from "../components/sections/Follow/Follow"

import '../styles/index.scss'

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Hero 
        title={data.allPrismicInfoSection.nodes[0].data.title[0].text} 
        text={data.allPrismicInfoSection.nodes[0].data.description[0].text} 
        image={data.allPrismicInfoSection.nodes[0].data.picture.url}
        button={data.allPrismicInfoSection.nodes[0].data.button[0].text}
      />
      <Info 
        sectionTitle={data.allPrismicInfoSection.nodes[1].data.sectiontitle[0].text}
        upperTitle={data.allPrismicInfoSection.nodes[1].data.uppertitle[0].text}
        title={data.allPrismicInfoSection.nodes[1].data.title[0].text}
        text={data.allPrismicInfoSection.nodes[1].data.description[0].text}
        image={data.allPrismicInfoSection.nodes[1].data.picture.url}
        mobileimage={data.allPrismicInfoSection.nodes[1].data.mobilepicture.url}
      />
      <Products 
        title={data.allPrismicInfoSection.nodes[2].data.title[0].text}
        description={data.allPrismicInfoSection.nodes[2].data.description[0].text}
        image={data.allPrismicInfoSection.nodes[2].data.picture.url}
      />
      <Info 
        upperTitle={data.allPrismicInfoSection.nodes[3].data.uppertitle[0].text}
        title={data.allPrismicInfoSection.nodes[3].data.title[0].text}
        text={data.allPrismicInfoSection.nodes[3].data.description[0].text}
        image={data.allPrismicInfoSection.nodes[3].data.picture.url}
        mobileimage={data.allPrismicInfoSection.nodes[3].data.mobilepicture.url}
      />
      <Downloads 
        mobileimage={data.allPrismicInfoSection.nodes[4].data.mobilepicture.url}
        image={data.allPrismicInfoSection.nodes[4].data.picture.url}
        title={data.allPrismicInfoSection.nodes[4].data.title[0].text}
        button={data.allPrismicInfoSection.nodes[4].data.button[0].text}
      />
      <Follow 
        title={data.allPrismicInfoSection.nodes[5].data.title[0].text}
        image={data.allPrismicInfoSection.nodes[5].data.picture.url}
      />
    </Layout>
  )
}
export const query = graphql`
  query {
    allPrismicInfoSection(sort: {fields: data___numeration}) {
      nodes {
        data {
          numeration
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
          mobilepicture {
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
