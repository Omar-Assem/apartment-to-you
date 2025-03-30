import { FaWifi, FaUtensils, FaTshirt, FaSnowflake, FaParking, FaSwimmingPool, FaTv, FaSmokingBan, FaPaw, FaBan, FaClock, FaDoorClosed, FaBed, FaUsers, FaBath } from "react-icons/fa";

const features = {
  amenities: [
    { name: "Wi-Fi", icon: FaWifi },
    { name: "Kitchen", icon: FaUtensils },
    { name: "Washing machine", icon: FaTshirt },
    { name: "Air conditioning", icon: FaSnowflake },
    { name: "Free parking", icon: FaParking },
    { name: "Private pool", icon: FaSwimmingPool },
    { name: "Smart TV", icon: FaTv },
  ],
  houseRules: [
    { rule: "No smoking", icon: FaSmokingBan },
    { rule: "No pets", icon: FaPaw },
    { rule: "No parties or events", icon: FaBan },
    { rule: "Check-in after 3:00 PM", icon: FaClock },
    { rule: "Check-out before 11:00 AM", icon: FaDoorClosed },
  ],
  cancellationPolicy:
    "Free cancellation within 48 hours. After that, cancel up to 5 days before check-in and get a 50% refund.",
  area: {
    bedrooms: 2,
    guests: 4,
    beds: 3,
    bathrooms: 2,
  },
};

const Feature = () => {
  return (
    <div className="container py-5">
      {/* المرافق */}
      <div className="row mb-4">
        <div className="col-12">
          <h4 className="fw-bold mb-3">🏡 Amenities</h4>
          <div className="d-flex flex-wrap gap-3">
            {features.amenities.map(({ name, icon: Icon }, index) => (
              <div key={index} className="d-flex align-items-center gap-2 p-2 border rounded">
                <Icon className="text-primary" size={20} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* قواعد المنزل */}
      <div className="row mb-4">
        <div className="col-12">
          <h4 className="fw-bold mb-3">📜 House Rules</h4>
          <ul className="list-unstyled">
            {features.houseRules.map(({ rule, icon: Icon }, index) => (
              <li key={index} className="d-flex align-items-center gap-2 mb-2">
                <Icon className="text-danger" size={18} />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* سياسة الإلغاء */}
      <div className="row mb-4">
        <div className="col-12">
          <h4 className="fw-bold mb-3">📅 Cancellation Policy</h4>
          <p className="text-muted">{features.cancellationPolicy}</p>
        </div>
      </div>

      {/* تفاصيل المكان */}
      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-3">📏 Space Details</h4>
          <div className="d-flex flex-wrap gap-3">
            <div className="d-flex align-items-center gap-2">
              <FaBed className="text-secondary" size={20} />
              <span>{features.area.bedrooms} Bedrooms</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaUsers className="text-secondary" size={20} />
              <span>{features.area.guests} Guests</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaBed className="text-secondary" size={20} />
              <span>{features.area.beds} Beds</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaBath className="text-secondary" size={20} />
              <span>{features.area.bathrooms} Bathrooms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
