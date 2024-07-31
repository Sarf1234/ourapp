import { MdxImage as Image } from '@/utility/MdxImage'
import { BannerImages } from '@/utility/userApiCall'

const BannerSlider = async() => {
  const data = await BannerImages()
  const { banner, ads} = data;
  return(
    <div>
      {banner?.map((i) =>
         <Image key={i.uri} src={i.uri} height={100} width={100} alt="elooe" />
      )}
    </div>
  )
};



export default BannerSlider;





