'use client';
import {useRouter} from 'next/navigation'

export default function Login(){

    const router = useRouter();
    return (
      <form onSubmit={(e) => {
        router.push('/');
        e.preventDefault();
        }}>
        <button type='submit'>eu vou voltar pra home</button>
      </form>
     
  )
}