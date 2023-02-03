import Feed from '@/components/Feed'
import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-none'>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header/>
      <Feed/>
    </div>
  )
}
