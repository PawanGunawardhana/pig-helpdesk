import React from "react";

async function getTickets(id) {
  const response = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60, // revalidate every 0 sec
    },
  });
  return await response.json();
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
