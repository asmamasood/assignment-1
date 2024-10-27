import Link from "next/link";

export default function Navbar() {
  return(
<div>
  <div className="flex justify-between items-center 
   px-6 py-4 bg-yellow-700 ">
<div className="left">
<div className="">
  <h1 className=" text-2xl bold font-extrabold">Asma Masood</h1>
  </div></div>
  <div className="right">
<ul className="flex gap-5 curser-pointer font-bold">
<li><Link href="/">Home</Link></li>
<li><Link href="/about">About</Link></li>
<li><Link href="/education">Education</Link></li>
<li><Link href="/projects">projects</Link></li>
<li><Link href="/contact">Contact us</Link></li>
</ul>
</div>

</div>
</div>


  )
}



  