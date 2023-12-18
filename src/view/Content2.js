import React from "react";
import { useState, useEffect } from "react";

function Content2() {
  const [countDown, setCountDown] = useState(180);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCountDown(countDown-1);
  //     }, 1000); //Hàm đóng nên chỉ chạy một lần, count luôn là 180 nên giá trị in ra luôn là 179
  //   }, [countDown]);

useEffect(() => {
  const intervalId = setInterval(() => {
    setCountDown((prevState) => prevState - 1);
  }, 1000); // Nếu không có strict mode thì sẽ -1 nhưng strict mode sẽ là trừ 2 

  // Clear the interval on component unmount
  return () => clearInterval(intervalId);
}, []);

  return (
    <div>
      <h1>{countDown}</h1>
      {/* <button onClick={handleClickDecrease}> Click to decrease</button> */}
    </div>
  );
}

export default Content2;

// import React from "react";
// import { useState, useEffect } from "react";

// const Content2 = () => {
//   const [countDown, setCountDown] = useState(180);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCountDown((prevCountDown) => {
//         if (prevCountDown === 0) {
//           clearInterval(intervalId); // Clear interval when countdown reaches zero
//           return prevCountDown;
//         } else {
//           return prevCountDown - 1;
//         }
//       });
//     }, 1000);

//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div>
//       <h1>{countDown}</h1>
//       {/* Button removed as it's not used in the current implementation */}
//     </div>
//   );
// };

// export default Content2;
