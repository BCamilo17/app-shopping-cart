import Image from "next/image";
import { Products } from '@/components/initialPage/Products';

export default function Home() {
  return (
    <main className="px-8">
      <Products></Products>
    </main>
  );
}
