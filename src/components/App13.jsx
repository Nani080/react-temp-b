// import React from "react";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// export default function App13() {
//   const [page, setPage] = useState();
//   const Navigate = useNavigate();
//   const showApp = () => {
//    Navigate(page);
//   };
//   return (
//     <div>
//       <h3>This is App13</h3>
//       <select onChange={(e)=>setPage(e.target.value)}>
//       <option value="">--Select--</option>
//         <option value="/app1">App1</option>
//         <option value="/app2">App2</option>
//         <option value="/app3">App3</option>
//         <option value="/app4">App4</option>
//         <option value="/app5">App5</option>
//         <option value="/app6">App6</option>
//         <option value="/app7">App7</option>
//         <option value="/app8">App8</option>
//         <option value="/app9">App9</option>
//         <option value="/app10">App10</option>
//         <option value="/app11">App11</option>
//         <option value="/app12">App12</option>
//       </select>
//       <button onClick={showApp}>Click</button>
//       {/* <Link to="/app10">Show App10</Link> */}
//     </div>
//   );
// }

import React from "react";
import { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function App13() {
  const [page, setPage] = useState();
  const Navigate = useNavigate();

  const showApp = () => {
    if (page) {
      Navigate(page); // Navigate to the selected page
    }
  };

  return (
    <div>
      <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#f0f0f0", zIndex: 1000 }}>
        <h3>This is App13</h3>
        <select onChange={(e) => setPage(e.target.value)}>
          <option value="">--Select--</option>
          <option value="/app1">App1</option>
          <option value="/app2">App2</option>
          <option value="/app3">App3</option>
          <option value="/app4">App4</option>
          <option value="/app5">App5</option>
          <option value="/app6">App6</option>
          <option value="/app7">App7</option>
          <option value="/app8">App8</option>
          <option value="/app9">App9</option>
          <option value="/app10">App10</option>
          <option value="/app11">App11</option>
          <option value="/app12">App12</option>
        </select>
        <button onClick={showApp}>Click</button>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Outlet /> {/* Render the selected app below */}
      </div>
    </div>
  );
}