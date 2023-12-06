// "Because of the benefits of reusability, I use two components to display a list of fun dive packages.


import "./FunDivePackageComponent.css";
import PackageList from "./FunDivePackageList";
// import product1 from "../Images/product1.jpg";
// import product2 from "../Images/product2.jpg";
// import product3 from "../Images/product3.jpg";
// import product4 from "../Images/product4.jpg";
// import product5 from "../Images/product5.jpg";
// import product6 from "../Images/product6.jpg";
// import TipsImage2 from './TipsImage2.jpg';

// const property = [
//   {
//     id: 1,
//     name: "3-Day Dive Packages in Sipadan Island, Malaysia",
//     rating: 4.9,
//     price: 200,
//     imageURL: product1,
//   },
//   {
//     id: 2,
//     name: "3-Day Dive Packages in Bali, Indonesia",
//     rating: 4.8,
//     price: 250,
//     imageURL: product2,
//   },
//   {
//     id: 3,
//     name: "3-Day Dive Packages in Komodo, Indonesia",
//     rating: 4.75,
//     price: 270,
//     imageURL: product3,
//   },
//   {
//     id: 4,
//     name: "3-Day Dive Packages in Palawan, Philippines",
//     rating: 4.9,
//     price: 200,
//     imageURL: product4,
//   },
//   {
//     id: 5,
//     name: "3-Day Dive Packages in Verde Island, Philippines",
//     rating: 4.7,
//     price: 190,
//     imageURL: product5,
//   },
//   {
//     id: 6,
//     name: "3-Day Dive Packages in Puerto Galera, Philippines",
//     rating: 4.69,
//     price: 300,
//     imageURL: product6,
//   },
// ];

function FunDivePackageComponent() {
  return (
    <div>
      <PackageList />
      {/* <PackageList property={property} /> */}
    </div>
  );
}

export default FunDivePackageComponent;
