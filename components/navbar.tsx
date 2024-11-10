import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
function Navbar() {
  return (
    <div>
      <ul>
      <div className="flex justify-end my-2 mx-8">
      <li> <Link href = "/"> <Button className="bg-blue-500 p-3 m-2 rounded-xl">Home</Button></Link></li>
      <li><Link href = "/about"><Button className="bg-blue-500 p-3 m-2 rounded-xl">About</Button></Link></li>
      <li><Link href= "/contact"><Button className="bg-blue-500 p-3 m-2 rounded-xl">Contact</Button></Link></li>
      <li><Link href= "/skills"> <Button className= "bg-blue-500 p-3 m-2 rounded-xl">Skills</Button></Link></li>
    </div>
    </ul>
    </div>
  )
}

export default Navbar