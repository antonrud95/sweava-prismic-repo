import React from "react"
import {graphql} from "gatsby"

import Layout from '../components/Layout'
import Hero from "../components/sections/Hero/Hero"
import Account from "../components/sections/Account/Account"
import Products from "../components/sections/Products/Products"

import '../styles/index.scss'



const IndexPage = ({data}) => {
  console.log(data.allPrismicInfoSection)
  return (
    <Layout>
      <Hero 
        title={data.allPrismicInfoSection.nodes[0].data.title[0].text} 
        text={data.allPrismicInfoSection.nodes[0].data.description[0].text} 
        image={data.allPrismicInfoSection.nodes[0].data.picture.url}
        button={data.allPrismicInfoSection.nodes[0].data.button[0].text}
      />
      <Account 
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
