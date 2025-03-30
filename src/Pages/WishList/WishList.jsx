
import useWishlistStore from '../../Store/Zustand';
import { Link } from 'react-router-dom';
import { FaStar, FaTimes } from 'react-icons/fa';



const Wishlist = () => {

  const wishlist = useWishlistStore((state) => state.wishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  

  return (
    <div className="container">

   
    <div className="row">
      {wishlist.length > 0 ? (
        wishlist.map((item) => (
          <div key={item.id} className="col-lg-3 my-4">
            <div className="card shadow h-100">
              <img src={item.img[0]} alt={item.name} className="w-100" />
              <div className="card-body">
                <h5 className="card-title"> <strong>Name :</strong>{item.name}</h5>
                <h5 className="card-title">   <FaStar color="gold" /> {item.stars}</h5>
                <h5 className="card-title"> <strong>Host :</strong>{item.host.name}</h5>
                <h5 className="card-text"> <strong>Price :</strong>{item.price}</h5>
                <Link to={`/iteminfo/${item.id}`} className="btn btn-outline-info">
                  View Details
                </Link>
                <button
                  className="btn btn-outline-danger mx-3"
                  onClick={() => removeFromWishlist(item.id)}
                ><FaTimes size={24} color="red" />
</button>
              </div>
            </div>
          </div>
        ))
      ) : (
   <h1 className='text-center my-5 ' style={{height:"70vh"}}> Wish List empty</h1>
      )}
    </div>
    </div>
  );
};

export default Wishlist;
