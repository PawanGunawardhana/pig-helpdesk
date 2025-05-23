import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets/");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

async function getTickets(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60, // revalidate every 0 sec
    },
  });

  if (!res.ok) {
    //notFound();
    notFound();
  }
  return res.json();
}

export default async function TicketDetails({ params }) {
  const ticket = await getTickets(params.id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by{ticket.uesr_email}</small>
        <p>{ticket.body}</p>
        <div className={"pill " + ticket.priority}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
