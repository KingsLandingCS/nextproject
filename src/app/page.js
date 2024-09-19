'use client'
import Image from "next/image";
import Link from "next/link";

// Use useRouter from next/navigation
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter(); // Correct useRouter from 'next/navigation'
  function handleNavigate() {
    router.push('/products')
  }



  return (
    <main className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to next.js Course</h1>
      <Link href={"/products"}>Navigate to Products page</Link>
      <Link href={"/account"}>Navigate to Account page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative Way of Navigating using useRouter</h2>
      <button onClick={handleNavigate}>Navigate to Products page using useRouter</button>
    </main>
  );
}
