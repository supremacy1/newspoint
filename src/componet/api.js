// // import React, { useState } from 'react';

// // function App() {
// //   const [responseData, setResponseData] = useState(null);

// //   const fetchData = async () => {
// //     const apiKey = 'ap_5a0f56a35271e0d1f1677612a2c2a11c';
// //     const apiUrl = 'https://gsubz.com/api/pay/';

// //     try {
// //       const response = await fetch(apiUrl, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Authorization': `Bearer ap_83c2ee17ca19e2c34e29a0f17cd5bd89 ${apiKey}` // Add your API key here
// //         },
// //         body: JSON.stringify({ /* Your request payload goes here */ })
// //       });

// //       const data = await response.json();
// //       setResponseData(data);
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };

// //   // Call fetchData function when component mounts or on an event
// //   // Example: useEffect(() => { fetchData(); }, []);
  
// //   return (
// //     <div>
// //       <button onClick={fetchData}>Fetch Data</button>
// //       {responseData && (
// //         <pre>{JSON.stringify(responseData, null, 2)}</pre>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;
// var axios = require('axios');
// var FormData = require('form-data');
// var data = new FormData();
// data.append('serviceID', 'mtn_sme');
// data.append('plan', '179');
// data.append('api', 'ap_5a0f56a35271e0d1f1677612a2c2a11c');
// data.append('amount', '');
// data.append('phone', '08140558898');
// data.append('requestID', '8dhbc8w7huwh8hw9hew9');

// var config = {
//   method: 'post',
// maxBodyLength: Infinity,
//   url: 'https://gsubz.com/api/pay/',
//   headers: { 
//     'Authorization': 'Bearer ap_83c2ee17ca19e2c34e29a0f17cd5bd89', 
//     ...data.getHeaders('ap_5a0f56a35271e0d1f1677612a2c2a11c')
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

