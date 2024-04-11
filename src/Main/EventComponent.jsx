// import React, { useState } from 'react'
// import './Event.css'


// function EventComponent() {


//     const events = [
//         {
//             "EventName": "Holi",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Diwaker",
//             "contactIfo": "9431414218",
//             "venue": "Darbhanga"
//         },
//         {
//             "EventName": "Moharaum",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Diwaker",
//             "contactIfo": "9431414218",
//             "venue": "Darbhanga"
//         },
//         {
//             "EventName": "Diwali",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Diwaker",
//             "contactIfo": "9431414218",
//             "venue": "Darbhanga"
//         },
//         // Add 10 more objects here
//         {
//             "EventName": "Event 4",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         },
//         {
//             "EventName": "Event 5",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         },
//         {
//             "EventName": "Event 6",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         },
//         {
//             "EventName": "Event 7",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         },
//         {
//             "EventName": "Event 8",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         },
//         {
//             "EventName": "Event 9",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         },
//         {
//             "EventName": "Event 10",
//             "startDate": "Jan 12, 2024",
//             "endDate": "Jan 14, 2024",
//             "clientName": "Client Name",
//             "contactIfo": "Phone Number",
//             "venue": "Venue"
//         }
//     ];



// function EventComponent() {
//     const [eventsPerPage] = useState(5); // Number of events to display per page
//     const [currentPage, setCurrentPage] = useState(1); // Current page number

//     // Sample events data
//     const events = [
//         // Your events data here
//     ];

//     // Calculate indexes for displaying events based on pagination
//     const indexOfLastEvent = currentPage * eventsPerPage;
//     const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//     const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//     // Change page
//     const paginate = pageNumber => setCurrentPage(pageNumber);

//     return (
//         <main className='m-4'  >
//             <div className='d-flex justify-content-evenly'>
//                 <h1>Event Request</h1>
//                 <div className='d-flex'>
//                     <input type="text" placeholder="Search here" className='border border-0 hero1' />
//                     <button className='bi bi-file-plus hero '></button>
//                 </div>

//             </div>

//             <table className="event-table">
//                 <thead className='header' >
//                     <tr>
//                         <th>Event Name</th>
//                         <th>Event Start</th>
//                         <th>Event End</th>
//                         <th>Client Name</th>
//                         <th>Contact Info</th>
//                         <th>Venue</th>
//                     </tr>
//                 </thead>
//                 <tbody >
//                     {events.map((event, index) => (
//                         <tr key={index} className="row-border">
//                             <td>{event.EventName}</td>
//                             <td>{event.startDate}</td>
//                             <td>{event.endDate}</td>
//                             <td>{event.clientName}</td>
//                             <td>{event.contactInfo}</td>
//                             <td>{event.venue}</td>
//                         </tr>
//                     ))}
//                 </tbody>

//             </table>
//              {/* Pagination */}
//              <ul className="pagination">
//                 {Array.from({ length: Math.ceil(events.length / eventsPerPage) }).map((_, index) => (
//                     <li key={index} className="page-item">
//                         <button onClick={() => paginate(index + 1)} className="page-link">
//                             {index + 1}
//                         </button>
//                     </li>
//                 ))}
//             </ul>

//         </main>
//     )
// }

// export default EventComponent
import React, { useState } from 'react';
import './Event.css';
import { Link } from 'react-router-dom';

function EventComponent() {
    const [eventsPerPage] = useState(8); // Number of events to display per page
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    // Sample events data
    const events = [
        {
            "EventName": "Holi",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Diwaker",
            "Details": "Details",
            "venue": "Darbhanga"
        },
        {
            "EventName": "Moharaum",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Diwaker",
            "Details": "Details",
            "venue": "Darbhanga"
        },
        {
            "EventName": "Diwali",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Diwaker",
            "Details": "Details",
            "venue": "Darbhanga"
        },
        // Add 10 more objects here
        {
            "EventName": "Event 4",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 5",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 6",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 7",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 8",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 9",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 10",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 11",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 12",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 13",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 14",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 15",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 16",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        },
        {
            "EventName": "Event 17",
            "startDate": "Jan 12, 2024",
            "endDate": "Jan 14, 2024",
            "clientName": "Client Name",
            "Details": "Details",
            "venue": "Venue"
        }
    ];

    // Calculate indexes for displaying events based on pagination
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);




    return (
        <div  >
            <div className='eventheader'>
                <h1 className='event-size'>Event Request</h1>
                <div className='d-flex adjust'>
                    <input type="text" placeholder="Search here" className='hero1' />
                    <button className='bi bi-file-plus hero '></button>
                </div>

            </div>

            <table className="event-table">
                <thead className='header' >
                    <tr>
                        <th>Event Name</th>
                        <th>Event Start</th>
                        <th>Event End</th>
                        <th>Client Name</th>
                        <th>Details</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                
                <tbody >
                   
                        {currentEvents.map((event, index) => (

                            <tr key={index} className="row-border">
                                 <td><Link to={`/register`} className='link'>{event.EventName}</Link></td>
                                    <td><Link to={`/register`} className='link'>{event.EventName}</Link></td>
                                    <td><Link to={`/register`} className='link'>{event.endDate} </Link></td>
                                    <td><Link to={`/register`} className='link'> {event.clientName}</Link></td>
                                    <td><Link to={`/register`} className='link'>{event.Details}</Link></td>
                                    <td><Link to={`/register`} className='link'>{event.venue}</Link></td>
                            </tr>

                        ))}
                    
                </tbody>
                

            </table>
            <div className='footer'>

                <span className="pagination shift">
                    {Array.from({ length: Math.ceil(events.length / eventsPerPage) }).map((_, index) => (
                        <li key={index} className="page-item">

                            <span onClick={() => paginate(index + 1)} className="page-link ">
                                {index + 1}
                            </span>
                        </li>
                    ))}
                </span>
            </div>


        </div>
    )
}

export default EventComponent;
