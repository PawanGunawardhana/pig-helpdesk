import Link from "next/link";
import Image from "next/image";
import Logo from "./piglogcrop.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="PIG Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>PIG Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Create New Ticket</Link>
    </nav>
  );
}
