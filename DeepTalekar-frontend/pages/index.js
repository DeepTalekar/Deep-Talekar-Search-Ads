import { useEffect, useState } from 'react';

import Loader from '@/components/Loader';
import NoDataFound from '@/components/NoDataFound';
import SearchBar from '@/components/SearchBar';
import AdsCard from '@/components/AdsCard';

import client from '../api/client';
import Head from 'next/head';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [ads, setAds] = useState(null);
  const [loading, setLoading] = useState(false);
  function onChange(text) {
    setKeyword(text);
    console.log('Text in HOme: ', text);
  }

  useEffect(() => {
    async function getAds() {
      // if (keyword?.length % 3 === 0) {
      setLoading(true);
      const res = await client.post("/search", { keyword });

      if (res.status === 200) {
        console.log("Everything alright: ", res?.data);
        setAds(res.data);
      } else {
        console.error("Error from the request: ", res);
      }
      setLoading(false);
      // }
    }

    getAds();
  }, [keyword]);

  return (
    <>
      <Head>
        <title>Search Ads 🔍</title>
      </Head>
      <main className='flex flex-col justify-center items-center px-6 '>
        <h1 className='text-xl font-sans font-bold text-black mt-16 mb-11 text-center'>🔍 Search Advertisements</h1>
        <SearchBar onChange={onChange} />
        <section className='relative mt-28 w-full h-full grid grid-cols-1 auto-rows-max gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9 md:grid-cols-3 lg:grid-cols-4'>
          {loading === false && ads?.length > 0 && ads.map((ad, index) => (
            <AdsCard key={ad._id} headline={ad.headline} primaryText={ad.primaryText} CTA={ad.CTA} description={ad.description} companyName={ad.companyName} url={ad.url} imageUrl={ad.imageUrl} />
          ))}
        </section>
        {loading === false && ads?.length === 0 && <NoDataFound />}
        {loading === true && <Loader />}
      </main>
    </>
  )
}
