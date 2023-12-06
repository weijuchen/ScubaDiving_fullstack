//  imports the Link component from the "react-router-dom" package 

import Package from "./FunDivePackage";
import { Link } from "react-router-dom";
import "./FunDivePackageList.css";
import product1 from "../Images/product1.jpg";
import product2 from "../Images/product2.jpg";
import product3 from "../Images/product3.jpg";
import product4 from "../Images/product4.jpg";
import product5 from "../Images/product5.jpg";
import product6 from "../Images/product6.jpg";

// diving Products is an array contains objects that represent different 
// fun diving packages, each with properties like ID, image URL, name, rating, and price. 
const divingproducts = [
  {
    id: 1,
    // title: "Product 1",
    imageUrl: product1,
    name: "3-Day Dive Packages in Sipadan Island, Malaysia",
    rating: 4.9,
    price: 200,
  },
  {
    id: 2,
    // title: "Product 2",
    imageUrl: product2,
    name: "3-Day Dive Packages in Bali, Indonesia",
    rating: 4.8,
    price: 250,
  },
  {
    id: 3,
    // title: "Product 3",
    imageUrl: product3,
    name: "3-Day Dive Packages in Komodo, Indonesia",
    rating: 4.75,
    price: 270,
  },
  {
    id: 4,
    // title: "Product 4",
    imageUrl: product4,
    name: "3-Day Dive Packages in Palawan, Philippines",
    rating: 4.9,
    price: 200,
  },
  {
    id: 5,
    // title: "Product 5",
    imageUrl: product5,
    name: "3-Day Dive Packages in Verde Island, Philippines",
    rating: 4.7,
    price: 190,
  },
  {
    id: 6,
    // title: "Product 6",
    imageUrl: product6,
    name: "3-Day Dive Packages in Puerto Galera, Philippines",
    rating: 4.69,
    price: 300,
  },
];

export default function PackageList() {
  return (
    // #########################################################
    // here i use return statement to define what this component will render to the
    //screen, as you can see it'll show the image of diving package, and the name, price, rating of the package.

    <div className="PackageList">
      {divingproducts.map((p) => (
        <Link key={p.id} to={`/fundivePackage/product/${p.id}`}>
          <div className="Package img">
            <img src={p.imageUrl} alt={p.title} />
          </div>
          {/* <p>Testing</p> */}
          <div className="Package">
            <p>{p.name}</p>
            <p>£{p.price} 6 dives</p>
            <p>⭐️{p.rating}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
