import { Link } from "react-router-dom";
import { FaCheckCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import useWishlistStore from "../../Store/Zustand";
import { FaStar} from "react-icons/fa";
import { useState } from "react";

const Products = ({ products }) => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );
  const [showToast, setShowToast] = useState(false);
  const handleBooking = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleWishlist = (item) => {
    const inWishlist = wishlist.find((p) => p.id === item.id);
    if (inWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <div className="row" >
      {products.map((item) => {
        const inWishlist = wishlist.find((p) => p.id === item.id);
        return (
          <div key={item.id} className="col-lg-3 my-4" data-aos="zoom-in">
            <div className="card shadow h-100 position-relative">
              <div
                id={`carousel-${item.id}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {item.img.map((image, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`${item.name}-${index}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carousel-${item.id}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carousel-${item.id}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </button>
          
              </div>
    
              <div className="card-body">
                <div className=" d-flex align-items-center gap-3 ">
                <h5 className="card-title">{item.name<=20?item.name.slice(0,20):item.name.slice(0,20)+'...'}</h5>
                <button onClick={() => { toggleWishlist(item); handleBooking(); }} className="btn">
                  {inWishlist ? (
                    <FaHeart color="red" size={22} />
                  ) : (
                    <FaRegHeart color="gray" size={22} />
                  )}
                </button>
           
                </div>
                <div className="">
                <h6>
 <strong>Host by :</strong> {item.host.name}
</h6>
<h6>
 <strong>since:</strong> {item.host.since}
</h6>
                </div>


                <h5>
                  <strong>Price:</strong> {item.price} LE Night
                </h5>
               
                <Link
                  to={`/iteminfo/${item.id}`}
                  className="btn btn-outline-info"
                >
                  View Details
                </Link>
     
                <FaStar color="gold" />
                <span className="card-text fw-bold mx-2">{item.stars}</span>
              </div>
            </div>
          </div>
        );
        
      })}
       {showToast && (
              <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
                <div className="toast show bg-success text-white">
                  <div className="toast-header">
                    <FaCheckCircle className="text-success me-2" />
                    <strong className="me-auto">Wish List Confirmed</strong>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowToast(false)}
                    ></button>
                  </div>
                  <div className="toast-body">✅ Add To Wish List</div>
                </div>
              </div>
            )}
    </div>
  );
};

export default Products;
