import Link from "next/link";
import Rectangle from "./components/Rectangle";
import Squares from "./components/Squares";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <Rectangle color="green"/>
        <Link href="/page2" className="text-blue-500 hover:underline text-lg"> Page 2 </Link>
        <Link href="/gridview" className="text-red-500 hover:underline text-lg"> Grid </Link>
     
    </div>
  );
}