import './intro.css';
import screen from "../../images/R.png";
import { useEffect, useRef } from 'react';
import {IntroAnimations} from '../../animations/Animations';


const Intro = () => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        IntroAnimations(element);
    },[]);

    return (
        <div ref={ref} className='i'>
            <div className="i-banner"></div>
            <div className="i-banner-corner"></div>
            <div className="i-left">
                <div className="i-intro">
                    <h2 className="i-name-title">Hello, My name is</h2>
                    <h1 className="i-name">Taha Bourichi</h1>
                    <div className="i-animation">
                        <div className="i-animation-item">Front-end Developer</div>
                        <div className="i-animation-item">Back-end Developer</div>
                        <div className="i-animation-item">UI/UX Designer</div>
                        <div className="i-animation-item">Java Programmer</div>
                        <div className="i-animation-item">Database Administrator</div>
                    </div>
                    <div className="i-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione suscipit vero iure necessitatibus non fuga doloremque autem nulla laudantium, asperiores enim, officia dolorem odit.</div>
                </div>
            </div>
            <div className="i-right">
                <img src={screen} alt="" className="i-img" />
                <div className="i-clip-path"></div>
            </div>
        </div>
    )
}

export default Intro