import { Link } from "react-router-dom";

export default function Package({ name, price, rating, id, imageURL }) {
  return (
    <div className="Package">
      <Link to={`/fundivepackage/${id}`}></Link>
      <img src={imageURL} alt={name} />

      <Link to={`/fundivepackage/${id}`}></Link>
      <h4>{name}</h4>
      <h4>${price} 6 dives</h4>
      <h4>{rating}⭐️</h4>
    </div>
  );
}
