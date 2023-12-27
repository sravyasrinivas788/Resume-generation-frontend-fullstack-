// // Your React component that needs to display notifications
// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:5001'); // Adjust the URL based on your server

// const Notifications = () => {
//   const [notifications, setNotifications] = useState([]);


//   useEffect(() => {
//     // Listen for placementAction events from the server
//     socket.on('placementAction', (data) => {
//       console.log('Received placement action:', data);
//       // Update the state with the new notification
//       setNotifications((prevNotifications) => [...prevNotifications, data]);
//     });

//     // Clean up the socket connection when the component is unmounted
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       <ul>
//         {notifications.map((notification, index) => (
//           <li key={index}>{`${notification.rollNumber} - ${notification.action}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;
