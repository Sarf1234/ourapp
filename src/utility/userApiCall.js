'use server'

const BannerImages = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/home/image`, {
      method: 'GET',
    });
  
    return await response.json();
  };

  const RentalHPtDealsApi = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/hot-deal`, {
        method: "GET",
      });
     return await response.json();
  };

export { BannerImages, RentalHPtDealsApi }