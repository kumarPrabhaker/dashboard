// import React, { useState } from 'react';
// import './Side.css'

// function Side() {
//     const [dropdownOpened, setDropdownOpened] = useState(false);

//     const handleDropdownToggle = () => {
//         setDropdownOpened(!dropdownOpened);
//     };

//     return (
//         <div className='p-4 m-2'>
//             <div >
//                 <select className='form-control'>
//                     <option>New Request</option>
//                     <option>Estimate</option>
//                     <option>Event</option>
//                     <option>Partial Request</option>
//                 </select>

//             </div>

//             <div >Positions</div>
//             <div>Contractors</div>
//             <div>
//                 <label className="dropdown-label">Users</label>
//                 <select className='form-control'>
//                     <option>Admin</option>
//                     <option>Client</option>
//                     <option>Coordinator</option>
//                 </select>
//             </div>

//             <button  className= 'bi bi-box-arrow-in-left rounded m-2  position-absolute bottom-0' >Log Out</button>
//         </div>

//     );
// }

// // export default Side;
// import React, { useState } from 'react';
// import './Side.css';

// function Side() {
//     const [dropdownOpened, setDropdownOpened] = useState(false);

//     const handleDropdownToggle = () => {
//         setDropdownOpened(!dropdownOpened);
//     };

//     const [showSubMenu, setShowSubMenu] = useState(false);

//     const toggleSubMenu = () => {
//       setShowSubMenu(!showSubMenu);

//     return (
//         <div className={`p-4 m-2 ${dropdownOpened ? 'dropdown-opened' : ''}`}>

// <ul className="menu">
//       <li onClick={toggleSubMenu}>
//         Mac
//         {showSubMenu && (
//           <ul className="sub-menu">
//             <li>MacBook</li>
//             <li>MacBook Air</li>
//             <li>iMac</li>
//             <li>Mac Pro</li>
//             <li>Mac Mini</li>
//           </ul>
//         )}
//       </li>
//     </ul>


//             <div>
//                 <select className='dropdownBoxDesign ' onClick={handleDropdownToggle}>
//                     <option>New Request</option>
//                     <option>Estimate</option>
//                     <option>Event</option>
//                     <option>Partial Request</option>
//                 </select>
//             </div>
//             <div className={dropdownOpened ? 'shift-down' : ''}>Positions
//             <div>Contractors</div>
//             </div>

//             <div>
//                 <select className='dropdownBoxDesign'>
//                     <option>Users</option>
//                     <option>Admin</option>
//                     <option>Client</option>
//                     <option>Coordinator</option>
//                 </select>
//             </div>
//             <div className={dropdownOpened ? 'shift-down' : ''}>Profile</div>
//             <button className='bi bi-box-arrow-in-left rounded m-2 position-absolute LogOut'>Log Out</button>
//         </div>
//     );
// }

// export default Side;


// import React, { useState } from 'react';
// import './Side.css';

// function Side() {
//     const [dropdownOpened, setDropdownOpened] = useState(false);
//     const [dropdownClosed, setDropdownClosed] = useState(true);

//     const handleDropdownToggle = () => {
//         setDropdownOpened(true);
//     };
//     const handleDropClosedToggle = () => {
//         setDropdownClosed(false);
//     };

//     const [showSubMenu, setShowSubMenu] = useState(false);

//     const toggleSubMenu = () => {
//         setShowSubMenu(!showSubMenu);
//     };

//     const [style, setStyle] = useState("hide-sub-menu");

//     const changeStyle = () => {

//         if (style !== "display-sub-menu") {

//             setStyle("display-sub-menu");
//             setDropdownOpened(true);
//             setDropdownClosed(false);

//         }
//         else {
//             setStyle("hide-sub-menu");
//             setDropdownOpened(false);
//             setDropdownClosed(true);
//         }

//     };

//     return (
//         <div className={`p-4 m-2 ${dropdownOpened ? 'dropdown-opened' : ''}`}>

//             <ul className="menu" onClick={changeStyle}>
//                 <li>
//                     Events
//                     <ul className={style} >
//                         <li>New Request</li>
//                         <li>Estimate</li>
//                         <li>Event</li>
//                         <li>Partial Request</li>
//                     </ul>

//                 </li>
//             </ul>

//             <div className={dropdownOpened ? 'shift-down' : 'shift-up'}>Positions</div>
//             <div>Contractors</div>

//             <div>
//                 <select className='dropdownBoxDesign'>
//                     <option>Users</option>
//                     <option>Admin</option>
//                     <option>Client</option>
//                     <option>Coordinator</option>
//                 </select>
//             </div>

//             <div className={dropdownOpened ? 'shift-down' : ''}>Profile</div>
//             <button className='bi bi-box-arrow-in-left rounded m-2 position-absolute LogOut'>Log Out</button>
//         </div>
//     );
// }

// export default Side;

//========================
// import React, { useState, useEffect, useRef } from 'react';
// import './Side.css';

// function Side() {
//     const [dropdownOpened, setDropdownOpened] = useState(false);
//     const [dropdownClosed, setDropdownClosed] = useState(true);
//     const [style, setStyle] = useState("hide-sub-menu");
//     const [showSubMenu, setShowSubMenu] = useState(false);
//     const dropdownRef = useRef(null);

//     const handleDropdownToggle = () => {
//         setDropdownOpened(true);
//     };

//     const handleDropClosedToggle = () => {
//         setDropdownClosed(false);
//     };

//     const toggleSubMenu = () => {
//         setShowSubMenu(!showSubMenu);
//     };

//     const changeStyle = () => {
//         if (style !== "display-sub-menu") {
//             setStyle("display-sub-menu");
//             setDropdownOpened(true);
//             setDropdownClosed(false);
//         } else {
//             setStyle("hide-sub-menu");
//             setDropdownOpened(false);
//             setDropdownClosed(true);
//         }
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setDropdownOpened(false);
//                 setDropdownClosed(true);
//             }
//         }

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <div ref={dropdownRef} className={`p-4 m-2 ${dropdownOpened ? 'dropdown-opened' : ''}`}>
//             <ul className="menu" onClick={changeStyle}>
//                 <li>
//                     Events
//                     <ul className={style}>
//                         <li>New Request</li>
//                         <li>Estimate</li>
//                         <li>Event</li>
//                         <li>Partial Request</li>
//                     </ul>
//                 </li>
//             </ul>

//             <div className={dropdownOpened ? 'shift-down' : 'shift-up'}>Positions</div>
//             <div>Contractors</div>

//             <div>
//                 <select className='dropdownBoxDesign'>
//                     <option>Users</option>
//                     <option>Admin</option>
//                     <option>Client</option>
//                     <option>Coordinator</option>
//                 </select>
//             </div>

//             <div className={dropdownOpened ? 'shift-down' : ''}>Profile</div>
//             <button className='bi bi-box-arrow-in-left rounded m-2 position-absolute LogOut'>Log Out</button>
//         </div>
//     );
// }

// export default Side;


//correct one
import React, { useState, useEffect, useRef } from 'react';
import './Side.css';
import { Link } from 'react-router-dom';

function Side() {
    const [dropdownOpened, setDropdownOpened] = useState(false);
    const [dropdownOpened2, setDropdownOpened2] = useState(false);
    const [style, setStyle] = useState("hide-sub-menu");
    const [style2, setStyle2] = useState("hide-sub-menu");
    const dropdownRef = useRef(null);

    const toggleSubMenu = () => {
        setDropdownOpened(!dropdownOpened);
    };

    const changeStyle = () => {
        if (style !== "display-sub-menu") {
            setStyle("display-sub-menu");
            setDropdownOpened(true);
        } else {
            setStyle("hide-sub-menu");
            setDropdownOpened(false);
        }
    };

    const changeStyle2 = () => {
        if (style2 !== "display-sub-menu") {
            setStyle2("display-sub-menu");
            setDropdownOpened2(true);
        } else {
            setStyle2("hide-sub-menu");
            setDropdownOpened2(false);
        }
    };


    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpened(false);
                setDropdownOpened2(false);
                setStyle("hide-sub-menu");
                setStyle2("hide-sub-menu");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={`p-4 m-2 ${dropdownOpened ? 'dropdown-opened' : ''}`}>
            <ul className="menu" onClick={changeStyle}>
                <li>
                    Events
                    <ul className={style}>
                        <li><span>&#10551;</span><Link to="/" className='linkstyle'> New Request</Link></li>
                        <li><span>&#10551;</span> <Link to="/" className='linkstyle'>Estimate</Link> </li>
                        <li><span>&#10551;</span><Link to="/" className='linkstyle'> Event</Link></li>
                        <li><span>&#10551;</span> <Link to="/" className='linkstyle'>Partial Request</Link></li>
                    </ul>
                </li>
            </ul>
           
            <div className={dropdownOpened ? 'shift-down' : 'shift-up'}>Positions</div>
            <div className='mt-2 mb-3'>Contractors</div>

           
            <ul className="menu" onClick={changeStyle2}>
                <li>
                    Users
                    <ul className={style2}>
                        <li><span>&#10551;</span> Admin</li>
                        <li><span>&#10551;</span> Clients</li>
                        <li><span>&#10551;</span> Coordinators</li>
                    </ul>
                </li>
            </ul>
            
            <div className={dropdownOpened2 ? 'shift-down' : 'shift-up'}>Profile</div>
            <button className='bi bi-box-arrow-in-left rounded  LogOut'>Log Out</button>
        </div>
    );
}

export default Side;
