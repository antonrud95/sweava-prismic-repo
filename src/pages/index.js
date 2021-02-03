import React from "react"
import {graphql} from "gatsby"
import Hero from "../components/sections/Hero/Hero"



const IndexPage = ({data}) => {
  console.log(data.allPrismicInfoSection)
  return (
    <>
      <Hero title={data.allPrismicInfoSection.nodes[0].data.title[0].text} text={'some text'}/>
    </>
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
