
const Comments = () => {
  const comments = [
    {
      img: "/public/peaple/a-2-1_380x380_crop_center.webp",
      name: "Ahmed Youssef",
      comment:
        "Amazing experience! The staff was incredibly welcoming, and the ambiance was fantastic!",
      date: "April 5, 2024",
      rating: 5,
    },
    {
      img: "/public/peaple/a-2-2_380x380_crop_center.webp",
      name: "Sara Mohamed",
      comment:
        "The food was delicious, but the service was a bit slow. Overall, a good experience.",
      date: "April 7, 2024",
      rating: 3,
    },
    {
      img: "/public/peaple/a-2-3_380x380_crop_center.webp",
      name: "Khaled Hassan",
      comment:
        "A wonderful place to relax and unwind. Definitely coming back soon!",
      date: "April 10, 2024",
      rating: 4,
    },
    {
      img: "/public/peaple/testi_img_1.webp",
      name: "Mona Adel",
      comment:
        "The view from my room was breathtaking! Highly recommended for couples and families.",
      date: "April 15, 2024",
      rating: 5,
    },
    {
      img: "/public/peaple/testi_img_2.webp",
      name: "Hassan Ibrahim",
      comment:
        "Good value for money. The location was perfect, but the rooms could use some updates.",
      date: "April 20, 2024",
      rating: 4,
    },
  ];

  return (
    <div id="comments" className="container mt-5">
      <h2 className="text-center mb-4">Comments From Our Clients</h2>
      <div className="row">
        {comments.map((comment, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div className="img">
                  {comment.img && (
                    <img
                      src={comment.img}
                      alt={comment.name}
                      className=" "
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                </div>
                <div className="text">
                  <h5 className="card-title">{comment.name}</h5>
                  <p className="mt-2">Rating: {"⭐".repeat(comment.rating)}</p>
                  <p className="card-text">{comment.comment}</p>
                  <small className="text-muted">{comment.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
