import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import Comments from "./Comments";
import Feature from "./Feature";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [image, setImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const handleBooking = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  useEffect(() => {
    if (product) {
      setImage(`/${product.img[0]}`);
    }
  }, [product]);
  const getProduct = async () => {
    try {
      const res = await axios.get("/Api/Data.json");
      const selectedItem = res.data.find((item) => item.id == id);
      setProduct(selectedItem);
      setTotalPrice(selectedItem.price);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  useEffect(() => {
    if (startDate && endDate) {
      if (new Date(endDate) <= new Date(startDate)) {
        alert("End Date must be after Start Date");
        setEndDate("");
      }
    }
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate && product && product.price) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // check values
      console.log("Start Date:", start);
      console.log("End Date:", end);
      console.log("Price:", product.price);

      if (!isNaN(start) && !isNaN(end)) {
        const diffInTime = end.getTime() - start.getTime();
        const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

        if (diffInDays > 0) {
          setTotalPrice(product.price * diffInDays);
        } else {
          setTotalPrice(product.price);
        }
      }
    }
  }, [startDate, endDate, product]);

  if (!product) return <p className="text-center my-5">Loading...</p>;

  return (
    <div className="container my-5">
      <div className="container">
        <div className="row g-2">
          <div className="col-md-8">
            <img
              src={image}
              alt="main"
              className="img rounded-4 w-100 h-100"
              style={{ objectFit: "cover", aspectRatio: "4/3" }}
            />
          </div>

          <div className="col-md-4">
            <div className="row g-2">
              {product.img.slice(0, 6).map((img, index) => (
                <div
                  className="col-6"
                  key={index}
                  style={{ position: "relative" }}
                >
                  <img
                    src={`/${img}`}
                    alt={`small-${index}`}
                    className="img-fluid rounded-4 w-100 h-100"
                    style={{ objectFit: "cover", aspectRatio: "1/1" }}
                    onMouseEnter={() => setImage(`/${img}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h1 className="">{product.name}</h1>
      <h4 className="text-muted mb-2">
        Hosted by<strong> {product.host.name}</strong>{" "}
      </h4>
      <p className="text-muted mb-4">
        {" "}
        <strong>Since:</strong> {product.host.since}
      </p>

      <div className="card p-4 my-4">
        <div className="d-flex gap-3">
          <div className="form-group flex-fill">
            <label>Start Date</label>
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="form-group flex-fill">
            <label>End Date</label>
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>
<h3>Description :</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem amet
        error ut eligendi architecto? Nisi delectus neque ab explicabo,
        voluptatibus officiis. Dignissimos, consectetur repellat quasi mollitia
        fugit adipisci deserunt, vitae fuga porro saepe beatae necessitatibus
        voluptatum eius impedit rerum? Provident veniam, inventore eaque
        eligendi tempore nam vero dolores quasi blanditiis nisi exercitationem,
        vel fugit dolor amet alias velit assumenda expedita, autem suscipit
        recusandae voluptatum pariatur? Reiciendis perspiciatis repellat aliquid
        minus, odio cumque deserunt dignissimos, vero similique maiores est
        sapiente magni corrupti laborum quisquam voluptate maxime labore
        voluptatem ipsum quidem nostrum eveniet recusandae. Saepe dolores
        dolorem ut dignissimos quo beatae exercitationem. Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Vitae ipsum, et non sunt itaque in
        quam! Quaerat consequuntur sint corrupti ex voluptates perferendis
        voluptatibus incidunt inventore sit architecto. Recusandae quos quia
        tempora sit dolore esse eum labore impedit optio reprehenderit. Harum id
        ducimus illum aliquam in consectetur officiis maiores nulla quae sed
        corrupti, suscipit ex cumque saepe sequi asperiores autem quo eius,
        repellat tenetur nam beatae. Est rem autem reprehenderit cumque corrupti
        exercitationem cum id eum, voluptate velit officia ipsam, a odio minus
        quas totam animi dolor enim quia officiis ex similique delectus. Cumque
        nesciunt sit numquam libero sapiente, quibusdam cum rem exercitationem,
        vero nostrum blanditiis cupiditate repellat, esse quam reprehenderit
        dolore. Fugiat, laboriosam tenetur earum quas vel facilis repellat vitae
        magnam inventore nobis, dolor id dolorum dolores ullam unde quis
        voluptas sed voluptatibus porro molestias dicta rerum debitis eligendi
        impedit. Cumque architecto nisi voluptatum sapiente vero, eveniet
        voluptates tempora sed? Error quasi nihil suscipit. Asperiores maxime
        voluptatem commodi. Ipsam tempore mollitia molestiae qui ea, quasi, modi
        distinctio inventore architecto sunt provident nobis incidunt suscipit
        deleniti facilis tempora. Voluptatibus, repellat modi, expedita eum
        laudantium deserunt error laborum est dolor animi voluptate dolore
        aliquid consequuntur sunt sed facilis hic nobis commodi!
      </p>

      <div className="d-flex align-items-center mt-4">
        <FaStar color="gold" size={14} />
        <span className="ms-2 fs-5">{product.stars} stars</span>
        <span className="ms-3 text-muted">({product.review} reviews)</span>
      </div>

      <h4 className="mt-4 text-danger">
        <strong>Total Price : </strong>
        {totalPrice.toLocaleString()} <strong>LE</strong>
      </h4>

      <button className="button mt-3 w-50" onClick={handleBooking}>
        Book Now
      </button>
      {showToast && (
        <div
          className="toast-container position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 1050 }}
        >
          <div className="toast show bg-success text-white">
            <div className="toast-header">
              <FaCheckCircle className="text-success me-2" />
              <strong className="me-auto">Booking Confirmed</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
            <div className="toast-body">✅ Your booking was successful!</div>
          </div>
        </div>
      )}
      <Feature />
      <Comments />
    </div>
  );
};

export default Product;
