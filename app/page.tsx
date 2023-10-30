import Header from '@/components/Global/Header'
import HomeBlog from '@/components/HomePage/HomeBlog'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Header/>
   <div className='bg-white'>
   <h1 className='text-center'>New Page Alert</h1>
   <HomeBlog/>
   </div>
   </>
  )
}
