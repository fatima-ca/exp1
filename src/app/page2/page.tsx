import Link from "next/link";
import Rectangle from "../components/Rectangle";
import Squares from "../components/Squares";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <Rectangle color="green"/>
        <Link href="/" className="text-blue-500 hover:underline text-lg"> Go to Home </Link>
        <Squares color1="green" color2="blue"/>
    
     
    </div>
  );
}
