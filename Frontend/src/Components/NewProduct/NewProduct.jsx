import { FaArrowRight } from "react-icons/fa";
import cylinder from "../../assets/cylinder.png"; 
import Seals from "../../assets/Seals.png";
import plastic from "../../assets/EngineeringPlastic.png";
import valves from "../../assets/Valves&Fittings.png";
import machinery from "../../assets/IndustrialMachinery.png";
import IndustrialMachinery from "../../assets/IndustrialMachinery.png";
import valves1 from "../../assets/Valves & Fittings.png"; 
import plastic1 from "../../assets/EngineeringPlastic.png";
import seals1 from "../../assets/Valves&Fittings.png";
import plastic2 from "../../assets/EngineeringPlastic.png";
import valves2 from "../../assets/Valves & Fittings.png";
import "./NewProduct.css";

export default function GridLayout() {
  const items = [
    { id: 1, label: "Hydraulic Cylinders", description: "Engineering plastics are high-performance materials.", image: cylinder },
    { id: 2, label: "Hydraulic Seals", description: "High-durability seals for hydraulic applications.", image: Seals },
    { id: 3, label: "Engineering Plastic", description: "Strong and lightweight industrial plastic.", image: plastic },
    { id: 4, label: "Valves & Fittings", description: "Precision-engineered valves for fluid control.", image: valves },
    { id: 5, label: "Industrial Machinery", description: "Advanced machinery for manufacturing needs.", image: machinery },
    { id: 6, label: "Industrial Machinery", description: "High-performance industrial tools.", image: IndustrialMachinery },
    { id: 7, label: "Valves & Fittings", description: "Reliable fittings for fluid regulation.", image: valves1 },
    { id: 8, label: "Engineering Plastic", description: "Durable and flexible plastic materials.", image: plastic1 },
    { id: 9, label: "Hydraulic Seals", description: "Sealing solutions for high-pressure systems.", image: seals1 },
    { id: 10, label: "Hydraulic Cylinders", description: "Powerful hydraulic force components.", image: cylinder },
    { id: 11, label: "Hydraulic Cylinders", description: "Reliable cylinders for industrial use.", image: plastic2 },
    { id: 12, label: "Valves & Fittings", description: "Quality valves for various industries.", image: valves2 }
  ];

  return (
    <div className="new-products-section">
      <div className="new-products-header">
        <p className="new-products-subtitle">NEW PRODUCTS/EXPANSIONS</p>
        <h2 className="new-products-title">Feature The Latest Expansions</h2>
      </div>

      {/* Grid Container */}
      <div className="new-products-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            {/* Image Container */}
            <div className="product-image-container">
              <img
                src={item.image}
                alt={item.label}
                className="product-image"
              />
            </div>

            {/* Overlay on Hover */}
            <div className="product-overlay">
              <div>
                <p className="product-description">{item.label}</p>
                <p className="product-details">{item.description}</p>
              </div>

              {/* Read More Section */}
              <div className="product-readmore">
                <div className="product-divider"></div>
                <button className="read-more-btn">
                  <span>Read More</span> <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Bottom Product Title */}
            <p className="product-title">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
