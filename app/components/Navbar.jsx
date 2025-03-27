import React from "react";
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
      <h1>pig-helpdesk</h1>
      <Link href="/">DashBoard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
