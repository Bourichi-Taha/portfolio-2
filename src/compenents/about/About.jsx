import "./about.css";
import Dev from "../../images/developer-image.jpg";
import Dip from "../../images/certificate.jpeg";
import { useEffect, useRef } from "react";
import { AboutAnimations } from "../../animations/Animations";

const About = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        AboutAnimations(element);
    },[]);
  return (
    <div ref={ref} className="a">
        <div className="a-banner"></div>
        <div className="a-banner-corner"></div>
        <div className="a-left">
            <div className="a-img-bg"></div>
            <img src={Dev} alt="tzha" className="a-img" />
        </div>
        <div className="a-right">
            <div className="a-title">About Me</div>
            <div className="a-intro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quod earum fugit aliquam exercitationem fugiat culpa?</div>
            <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quisquam veritatis est, distinctio rerum omnis voluptatibus vel tempore asperiores magni neque eum, voluptate repudiandae voluptates hic consequuntur dolorem!</p>
            <ul className="a-diploms">
                <li className="a-diplom">
                    <img src={Dip} alt="" className="a-diplom-img" />
                    <p className="a-doplom-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis repellat architecto quibusdam optio earum recusandae!</p>
                </li>
                <li className="a-diplom">
                    <img src={Dip} alt="" className="a-diplom-img" />
                    <p className="a-doplom-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis repellat architecto quibusdam optio earum recusandae!</p>
                </li>
                <li className="a-diplom">
                    <img src={Dip} alt="" className="a-diplom-img" />
                    <p className="a-doplom-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis repellat architecto quibusdam optio earum recusandae!</p>
                </li>
                <li className="a-diplom">
                    <img src={Dip} alt="" className="a-diplom-img" />
                    <p className="a-doplom-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis repellat architecto quibusdam optio earum recusandae!</p>
                </li>
            </ul>
        </div>
        <div className="a-banner-left"></div>
    </div>
  )
}

export default About