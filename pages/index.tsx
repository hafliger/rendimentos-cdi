import Image from 'next/image'
import { Inter } from 'next/font/google'
import Modal from '@/components/Modals'
import Infos from '@/components/Infos/inde'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 pt-14 pb-10 lg:p-24">
      <Modal />
      <Infos />
    </main>
  )
}
