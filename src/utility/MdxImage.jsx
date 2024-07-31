import React from 'react'
import Image, { ImageProps } from 'next/image'

export function MdxImage(props) {
  return <Image {...props} alt={props.alt} />;
}