"use client"

import Image, { ImageProps } from "next/image"

export default function ImageComponent({ src, alt, ...props }: ImageProps) {
  return <Image src={src} alt={alt} {...props} />
}