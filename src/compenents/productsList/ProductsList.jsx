import { useEffect, useRef } from "react"
import { ProductListAnimations } from "../../animations/Animations";
import ProductItem from "../productItem/ProductItem"
import "./productsList.css"

const ProductsList = () => {
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        ProductListAnimations(element);
    },[]);
  return (
    <div ref={ref} className="pl">
        <div className="pl-banner"></div>
        <div className="pl-banner-corner"></div>
        <div className="pl-banner-left"></div>
        <div className="pl-title">My Finished Projects</div>
        <div className="pl-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque fuga sapiente accusantium cum quidem in excepturi, quasi officiis incidunt voluptas?</div>
        <div className="pl-container">
            <ProductItem />
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
    </div>
    )
}

export default ProductsList