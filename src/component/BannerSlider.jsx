import { MdxImage as Image } from '@/utility/MdxImage'
import { BannerImages } from '@/utility/userApiCall'
import Carousel from '@/ui/CrouselBanner'

const BannerSlider = async() => {
  const data = await BannerImages()
  const { banner, ads} = data;
  return(
    <div>
      <div className="md:block hidden">
        <Carousel data={banner} isMobile={false} />
      </div>
      <div className="md:hidden block">
        <Carousel data={ads} isMobile={true} />
      </div>
    </div>
  )
};



export default BannerSlider;





