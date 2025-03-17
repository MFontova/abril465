import { useState } from "react"

export const ImageSwitcher = ({normalImage, noseImage, alt}: {normalImage: ImageMetadata, noseImage: ImageMetadata, alt: string}) => {
  const [image, setImage] = useState(normalImage)

  function onClickHandler () {
    if(image == normalImage) {
      setImage(noseImage)
    } else {
      setImage(normalImage)
    }
  }

  return (
    <img onClick={onClickHandler} src={image.src} alt={alt} className='max-w-xs w-full hover:scale-110 transition-all' />
  )
}