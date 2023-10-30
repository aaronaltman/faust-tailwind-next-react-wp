import Header from '@/components/Global/Header'
import HomeBlog from '@/components/HomePage/HomeBlog'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Header/>
   <div className='bg-white'>
   <HomeBlog/>
   </div>
   </>
  )
}
