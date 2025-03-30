// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "./firebase";

// const ApartmentList = () => {
//   const [apartments, setApartments] = useState([]);

//   useEffect(() => {
//     const fetchApartments = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "apartments"));
//         const apartmentsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setApartments(apartmentsData);
//       } catch (error) {
//         console.error("Error fetching apartments: ", error);
//       }
//     };

//     fetchApartments();
//   }, [apartments]);

//   return (
//     <div className="container">
//       <h2>الشقق المتاحة</h2>
//       {apartments.length === 0 && <p>لا توجد شقق بعد.</p>}
//       <div className="row">
//         {apartments.map((apartment) => (
//           <>
       
//           <div className="col-lg-3">
//             <div className="card">
//               <img
//                 src={apartment.imageUrl}
//                 alt={apartment.title}
//                 style={{ width: "100%", height: "150px", objectFit: "cover" }}
//               />
//               <h3>{apartment.title}</h3>
//               <p>السعر: {apartment.price} جنيه</p>
//               <p>الموقع: {apartment.location}</p>
//             </div>
//           </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ApartmentList;
