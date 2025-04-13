import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <div className="bg-blue-700 text-white py-4 shadow-md">
      <ul className="flex justify-center gap-10">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link href="/Block">Block</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
