import { Suspense } from 'react';
import './index.css'
import type { CountryType } from './type';
import Countries from './components/Countries/Countries';
import Navber from './components/Navber';
import Banner from './components/Banner';
import Footer from './components/Footer';

//step-1: create a promise to load data
const countriesPromise = async (): Promise<CountryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}

function App() {


  return (
    <>
    <Navber />
    <Banner />
      <div className='container mx-auto'>
        <h2 className='text-4xl italic p-3 text-amber-950 '>World on the Go....</h2>
      <Suspense fallback={<p className='text-center text-2xl font-bold italic'>LOADING...</p>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
      </div>
    <Footer />




    </>
  )
}

export default App
