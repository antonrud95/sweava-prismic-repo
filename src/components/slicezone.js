import React from 'react'
import Downloads from './sections/Downloads/Downloads'
import Follow from './sections/Follow/Follow'
import Hero from './sections/Hero/Hero'
import Products from './sections/Products/Products'


const SliceZone = ({ sliceZone }) => {
  
  const sliceComponents = {
    hero: Hero,
    products_: Products,
    downloads_: Downloads,
    follow: Follow
  }
  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return sliceZoneContent
}

export default SliceZone