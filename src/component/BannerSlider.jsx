import { MdxImage as Image } from '@/utility/MdxImage'

const BannerSlider = async() => {
  const data = await fetchImages()
  const { banner, ads} = data;
  return(
    <div>
      {banner?.map((i) =>
         <Image key={i.uri} src={i.uri} height={100} width={100} alt="elooe" />
      )}
    </div>
  )
};

const fetchImages = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/home/image`, {
    method: 'GET',
  });

  return await response.json();
};

export default BannerSlider;





