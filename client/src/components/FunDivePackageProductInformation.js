import React from "react";
import { useParams } from "react-router-dom";
import img1 from "../Images/Detail.jpeg";
import img2 from "../Images/Detail2.jpeg";
import img3 from "../Images/Detail3.jpg";

// import products from "../products.json";

const DivingProductDetail = () => {
  //   const { productId } = useParams();
  //   const selectedProduct = products.find((product) => product.id === productId);

  //   if (!selectedProduct) {
  //     return <div>Product not found.</div>;
  const product = {
    id: 1,
    title: "3-Day Dive Packages in Sipadan Island, Malaysia",
    keyInformation: "09:00 departure, 4 hours (approx)",
    MinimumCertification: "Open Water Certification required",
    Reviews1:
      "Reviewed on January 27, 2022 The dive operation in site Scuba Du had fantastic service. Allowing us switch our dive days upon request. Boats were well maintained and staff very helpful.  TANYA",
    Reviews2:
      "Reviewed on May 24, 2022 Greta resort and excellent dive operation !!Eric M",
  };

  return (
    <div className="product section">
      <div className="image section">
        {/* <img src={img1} alt="product" /> */}
        {/* <img src={img2} alt="product" /> */}
        <img src={img3} alt="product" />
      </div>
      <div className="info section">
        <h5>{product.title}</h5>
        <h5>key Information: {product.keyInformation}</h5>
        <h5>Requirements: {product.MinimumCertification}</h5>
        <p>Reviews:{product.Reviews1}</p>
        <p>Reviews:{product.Reviews2}</p>
        <h3></h3>
      </div>
    </div>
  );
};

export default DivingProductDetail;
