'use client';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();
  return (
    <form onSubmit={(e) => {
      router.push('/login');
      e.preventDefault();
      }}>
      <button className='style_button'type='submit'>eu sou um botão bonito</button>
      
    </form>
   
     )
}
