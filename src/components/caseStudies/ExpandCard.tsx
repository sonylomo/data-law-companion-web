// import React, { useState } from "react";
// import { TiPlus, TiMinus } from "react-icons/ti";
// import { ExpandCardProps } from '../../types';

// type ExpandCardPropType = {
//   ExpandCardProps: ExpandCardProps
// }

// const ExpandCard = ({
//   ExpandCardProps: { icon, title, country, description, source },
// }: ExpandCardPropType) => {
//   const [scaled, setScale] = useState(false);

//   return (
//     <>
//       <div
//         id="data-compliance-issues"
//         className={`shadow-xl rounded-lg bg-white py-12 px-6 hover:cursor-pointer hover:border hover:border-neutral-red max-w-xl ${
//           scaled &&
//           "border-y border-l border-y-neutral-red border-l-neutral-red rounded-r-none hover:border-r-0 shadow-none"
//         }`}
//         onClick={() => setScale(!scaled)}
//       >
//         {/* <ImDroplet className="text-neutral-orange text-3xl" /> */}
//         {icon}
//         <h3 className="font-semibold text-neutral-red text-xl sm:text-2xl my-2">
//           {title} <span className="text-light-grey text-xs">{country}</span>
//         </h3>
//         <p className="mb-2 text-lg">
//           {
//             React.Children.toArray(description)[0].props.children[0].props
//               .children
//           }
//           ...
//         </p>

//         {/* <p>
//           {
//             React.Children.toArray(description)[0].props.children[1].props
//               .children
//           }{" "}
//           ...
//         </p> */}

//         <button
//           type="button"
//           className="flex justify-end items-center mt-4 gap-2 font-bold text-lg hover:underline hover:text-neutral-orange"
//           onClick={() => setScale(!scaled)}
//         >
//           <span className="bg-pale-orange rounded-full p-2">
//             {scaled ? (
//               <TiMinus className="text-xl text-neutral-orange" />
//             ) : (
//               <TiPlus className="text-xl text-neutral-orange" />
//             )}
//           </span>
//           {scaled ? "Show Less" : "Show More"}
//         </button>
//       </div>

//       <div
//         className={`${
//           !scaled && "hidden"
//         } h-full w-full -ml-8 py-4 px-4 rounded-r-lg border-y border-r border-y-neutral-red border-r-neutral-red`}
//         // style={
//         //  {
//         //   boxShadow:
//         //     "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
//         // }
//         // }
//       >
//         <div className="flex flex-col justify-center items-start rounded-lg bg-pale-orange h-full w-full p-2 gap-4">
//           {React.Children.toArray(description)[0]
//             .props.children.slice(1)
//             .map((child) => {
//               return (
//                 <p
//                   key={crypto.randomUUID()}
//                   //   className="text-light-grey text-xs uppercase font-medium"
//                   className="text-lg mx-4"
//                 >
//                   {child.props.children}
//                 </p>
//               );
//             })}
//             {source.map((link) => {
//               return (
//                 <a
//                   key={crypto.randomUUID()}
//                   className="text-light-grey text-xs uppercase font-light bg-pale-orange p-1 mx-4 rounded"
//                   href={link}
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   source
//                 </a>
//               );
//             })}

//         </div>
//       </div>
//     </>
//   );
// };

// export default ExpandCard;
