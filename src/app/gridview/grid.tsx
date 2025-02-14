import Link from "next/link";
import Squares from "../components/Squares";

export default function gridview() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <Squares color1="green" color2="blue"/>
        <Link href="/" className="text-blue-500 hover:underline text-lg"> Go to Home </Link>
     
    </div>
  );
}
