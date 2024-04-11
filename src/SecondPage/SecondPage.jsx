import React from 'react'
import './SecondPage.css'



function SecondPage() {


  const events = [
    {
      "Position": "Manager",
      "Time": "9:00 AM - 10:00 AM",
      "Info": "Meeting with clients",
      "Quantity": 1
    },
    {
      "Position": "Developer",
      "Time": "10:30 AM - 12:00 PM",
      "Info": "Code review session",
      "Quantity": 2
    },
    {
      "Position": "Designer",
      "Time": "2:00 PM - 4:00 PM",
      "Info": "Presentation of new designs",
      "Quantity": 1
    },
    // {
    //   "Position": "Project Manager",
    //   "Time": "1:00 PM - 2:00 PM",
    //   "Info": "Project planning meeting",
    //   "Quantity": 1
    // },
    // {
    //   "Position": "Software Engineer",
    //   "Time": "3:00 PM - 4:30 PM",
    //   "Info": "Debugging session",
    //   "Quantity": 3
    // },
    // {
    //   "Position": "Sales Executive",
    //   "Time": "11:00 AM - 12:30 PM",
    //   "Info": "Sales presentation",
    //   "Quantity": 2
    // },
    // {
    //   "Position": "HR Manager",
    //   "Time": "10:00 AM - 11:00 AM",
    //   "Info": "Recruitment interview",
    //   "Quantity": 1
    // },
    // {
    //   "Position": "Marketing Analyst",
    //   "Time": "2:30 PM - 3:30 PM",
    //   "Info": "Marketing strategy discussion",
    //   "Quantity": 1
    // },
    // {
    //   "Position": "Financial Advisor",
    //   "Time": "9:30 AM - 11:00 AM",
    //   "Info": "Financial planning session",
    //   "Quantity": 1
    // },
    // {
    //   "Position": "Customer Support Specialist",
    //   "Time": "12:00 PM - 1:30 PM",
    //   "Info": "Customer query resolution",
    //   "Quantity": 2
    // },
    // {
    //   "Position": "Graphic Designer",
    //   "Time": "4:00 PM - 5:30 PM",
    //   "Info": "Design brainstorming",
    //   "Quantity": 1
    // }
  ];

  // const eventsPerPage = 5; // Number of events to display per page
  // const [currentPage, setCurrentPage] = useState(0); // Current page number

  // const events1 = [ /* Your events array here */ ];
  // const totalPages = Math.ceil(events1.length / eventsPerPage); // Calculate total pages

  // // Calculate the index range of events to display for the current page
  // const startIndex = currentPage * eventsPerPage;
  // const endIndex = startIndex + eventsPerPage;
  // const currentEvents = events.slice(startIndex, endIndex);

  // const handlePageClick = (selectedPage) => {
  //   setCurrentPage(selectedPage);
  // };


  return (
    <div>
      <div className="super">
        <span>Event Name&nbsp;</span>
        <span >(Venue Details)</span>
      </div>

      <div className='sub-header' >
        <div className='sub-header-under'>
          Event Details
        </div>
        <div className='sub-header-under'>
          Assign Coordinator/Coordinator
        </div>
        <div className='sub-header-under'>Session Management</div>
        <div className='sub-header-under'>
          Generate SOW
        </div>
      </div>

      <div className='sub-division'>
        <div>
          <div className='mt-2 mb-2'>Assign Coordinator</div>
          <input type="text" className='hero2' placeholder='Search Coordinator' />
        </div>
        <div>
          <div>Event Name (Venue Details)</div>
          <div className='sub-main'>
            <div>Start:12-12-2023</div>
            <div>Ends:15-12-2023</div>
          </div>
          <div className='sub-Ends'>
            Venue Address : Some location 12 ,Name Here ,State
          </div>
        </div>
      </div>

      <div className='heading'>Assign Contractor</div>
      <div className='main'>
        <div className='main-sub'>
          <div>
            <div className='main-heaader'>
              <div className='main-header-under'>Meeting Room 1 12 Positions</div>
              <div className='main-under'>Starts from 12 jan ,2023-Ends at 15 jan,2023</div>
            </div>
            <div className='main-heaader'>
              <div>Meeting Room 1 12 Positions</div>
              <div className='main-under'>Starts from 12 jan ,2023-Ends at 15 jan,2023</div>
            </div>
            <div className='main-heaader'>
              <div>Meeting Room 1 12 Positions</div>
              <div className='main-under'>Starts from 12 jan ,2023-Ends at 15 jan,2023</div>
            </div>
            <div className='main-heaader'>
              <div>Meeting Room 1 12 Positions</div>
              <div className='main-under'>Starts from 12 jan ,2023-Ends at 15 jan,2023</div>
            </div>
          </div>
        </div>

        <div className='event-side'>
          <table className="event-table1">
            <thead className='header1' >
              <tr>
                <th>Position</th>
                <th>Time</th>
                <th>info</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index} className="row-border">
                  <td>{event.Position}</td>
                  <td>{event.Time}</td>
                  <td>{event.Info}</td>
                  <td>{event.Quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* <div className="pagination">
            <button onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 0}>
              Previous
            </button>
            <button onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages - 1}>
              Next
            </button>
          </div> */}
        </div>

      </div>

      <div>


      </div>


    </div>
  )
}

export default SecondPage