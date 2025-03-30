// import React, { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { db, storage } from './firebase';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { v4 as uuidv4 } from 'uuid';

// const AddApartment = () => {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [location, setLocation] = useState('');
//   const [imgFile, setImgFile] = useState(null);

//   const handleAdd = async () => {
//     if (!imgFile) {
//       alert('يرجى اختيار صورة');
//       return;
//     }

//     try {
//       // رفع الصورة إلى Firebase Storage
//       const imgRef = ref(storage, `apartments/${uuidv4()}`);
//       await uploadBytes(imgRef, imgFile);
//       const imgURL = await getDownloadURL(imgRef);

//       // إضافة البيانات إلى Firestore
//       await addDoc(collection(db, 'apartments'), {
//         img: imgURL,
//         title,
//         price: Number(price),
//         location
//       });

//       alert('تم إضافة الشقة بنجاح!');
//       setTitle('');
//       setPrice('');
//       setLocation('');
//       setImgFile(null);
//     } catch (error) {
//       console.error('Error adding document: ', error);
//       alert('حدث خطأ أثناء الإضافة');
//     }
//   };

//   return (
//     <div>
//       <h2>إضافة شقة</h2>
//       <input
//         type="file"
//         onChange={(e) => setImgFile(e.target.files[0])}
//       />
//       <input
//         type="text"
//         placeholder="اسم الشقة"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="السعر"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="الموقع"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <button onClick={handleAdd} className='btn'>Add</button>
//     </div>
//   );
// };

// export default AddApartment;
