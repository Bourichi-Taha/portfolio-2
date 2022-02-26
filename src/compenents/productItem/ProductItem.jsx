import "./productItem.css";
import test from "../../images/project1.png";
import { useEffect, useRef } from "react";
import { ListItemAnimation } from "../../animations/Animations";

const ProductItem = () => {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    ListItemAnimation(element);
  },[]);
  return (
    <div ref={ref} className="pi">
        <div className="pi-banner">
            <div className="pi-banner-circle"></div>
            <div className="pi-banner-circle"></div>
            <div className="pi-banner-circle"></div>
        </div>
        <div className="pi-img-container">
            <img src={test} alt="" className="pi-img" />
        </div>
    </div>
  )
}

export default ProductItem