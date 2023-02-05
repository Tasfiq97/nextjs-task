import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Healthy from '@/components/Healthy'
import Challenge from '@/components/Challenge'
import Workout from '@/components/Workout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next app</title>
      </Head>
      <header className='relative'>
        <Navbar></Navbar>
      </header>
      <main>
        <section className=''>
          <Hero></Hero>
        </section>
        <section className=''>
        <Healthy></Healthy>
        </section>
        <section className=''>
        <Challenge></Challenge>
        </section>
        <section>
          <Workout></Workout>
        </section>
      </main>
    </>
  )
}
