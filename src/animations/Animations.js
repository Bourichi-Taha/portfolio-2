import {gsap} from "gsap";
import { random } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export function IntroAnimations(element) {
    gsap.fromTo(
        element.querySelector(".i-clip-path"),
        1,
        {
            opacity: 0,
            y:-50,
            width:"30%"
        },
        {
            opacity:1,
            y:0,
            width:"100%",
        }
    );
    gsap.fromTo(
        element.querySelector(".i-img"),
        1,
        {
            opacity: 0,
            x:-50,
        },
        {
            opacity:1,
            x:0,
            delay:0.5
        }
    );
    gsap.fromTo(
        element.querySelector(".i-banner"),
        1,
        {
            opacity: 0,
            height:0,
            top:0,
            left:0
        },
        {
            opacity:1,
            height:"100vh",
            delay:0.6,
        },
        
    );
    gsap.fromTo(
        element.querySelector(".i-banner-corner"),
        0.4,
        {
            opacity: 0,
            bottom:0,
            height:0,
            width:0,
            left:"60px"
        },
        {
            opacity:1,
            delay:1.3,
            height:"40px",
            width:"40px",
        },
        
    );
    gsap.fromTo(
        element.querySelector(".i-title"),
        0.8,
        {
            opacity: 0,
            x:50,
        },
        {
            opacity:1,
            x:0,
            delay:1.3,
        },
        
    );
    gsap.fromTo(
        element.querySelector(".i-name"),
        0.8,
        {
            opacity: 0,
            scale:0,
            y:50,
        },
        {
            opacity:1,
            scale:1,
            y:0,
            delay:1.8,
        },
        
    );
    gsap.fromTo(
        element.querySelector(".i-animation"),
        0.5,
        {
            opacity: 0,
            x:-50,
        },
        {
            opacity:1,
            x:0,
            delay:2,
        },
        
    );
    gsap.fromTo(
        element.querySelector(".i-desc"),
        0.5,
        {
            opacity: 0,
            y:-50,
        },
        {
            opacity:1,
            y:0,
            delay:2.3,
        },
        
    );
}

export function AboutAnimations(element) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
        element.querySelector(".a-banner"),
        0.3,
        {
            width:0,
            top:0,
            left:0
        },
        {
            width:"100%",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top bottom",
                end: "top center"
              }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-banner-corner"),
        0.5,
        {
            opacity:1,
            height:0,
            width:0,
            top:"60px",
            right:"60px"
        },
        {
            width:"40px",
            height:"40px",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top center",
                end: "top center",
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-banner-left"),
        1,
        {
            height:0,
            width:"60px",
            top:0,
            right:0
        },
        {
            width:"60px",
            height:"100vh",
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-img-bg"),
        1,
        {
            scale:0,
            opacity:0,
            x:-10,
            y:-10
        },
        {
            scale:1,
            opacity:1,
            x:0,
            y:0,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-img"),
        1,
        {
            scale:2,
            opacity:0,
        },
        {
            scale:1,
            opacity:1,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-title"),
        1,
        {
            y:20,
            opacity:0,
            fontSize:"12px"
        },
        {
            y:0,
            opacity:1,
            fontSize:"50px",
            delay:0.4,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-intro"),
        1,
        {
            x:20,
            opacity:0,
        },
        {
            x:0,
            opacity:1,
            delay:0.8,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".a-desc"),
        1,
        {
            scale:0,
            opacity:0,
        },
        {
            opacity:1,
            delay:1.2,
            scale:1,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
        
    );
    gsap.fromTo(
        element.querySelectorAll(".a-doplom-desc"),
        1,
        {
            x:20,
            opacity:0,
        },
        {
            opacity:1,
            x:0,
            delay:1.3,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
        
    );

    gsap.fromTo(
        element.querySelectorAll(".a-diplom-img"),
        1,
        {
            scale:0,
            opacity:0,
        },
        {
            opacity:1,
            delay:1.5,
            scale:1,
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
        
    );
}

export function ProductListAnimations(element) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
        element.querySelector(".pl-banner"),
        0.3,
        {
            width:0,
            top:0,
            right:0
        },
        {
            width:"100%",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top bottom",
                end: "top center"
              }
        }
    );
    gsap.fromTo(
        element.querySelector(".pl-banner-corner"),
        0.5,
        {
            opacity:1,
            height:0,
            width:0,
            top:"60px",
            left:"60px"
        },
        {
            width:"40px",
            height:"40px",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top center",
                end: "top center",
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".pl-banner-left"),
        1,
        {
            height:0,
            width:"60px",
            top:0,
            left:0
        },
        {
            width:"60px",
            height:"100vh",
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".pl-title"),
        1,
        {
            fontSize: "0px",
            fontWeight:0,
            opacity:0,
            scale:0
        },
        {
            fontSize: "60px",
            fontWeight:500,
            opacity:1,
            scale:1,
            scrollTrigger: {
                trigger: element.querySelector(".pl-title"),
                start:"top bottom",
                end:"top center",
                scrub: true
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".pl-desc"),
        1,
        {
            x:-100,
            opacity:0
        },
        {
            x:0,
            opacity:1,
            scrollTrigger: {
                trigger: element.querySelector(".pl-container"),
                start:"top bottom",
                end:"top center",
                scrub: true
            }
        }
    );
    
}

export function ListItemAnimation(element) {
    gsap.fromTo(
        element,
        1,
        {
            x:random(50,150),
            opacity:0
        },
        {
            x:0,
            opacity:1,
            scrollTrigger: {
                trigger: element,
                start:"top bottom",
                end:"top top",
                scrub: true
            }
        }
    );
}
export function ContactAnimations(element) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
        element.querySelector(".c-banner"),
        0.3,
        {
            width:0,
            top:0,
            left:0
        },
        {
            width:"100%",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top bottom",
                end: "top center"
              }
        }
    );
    gsap.fromTo(
        element.querySelector(".c-banner-corner"),
        0.5,
        {
            opacity:1,
            height:0,
            width:0,
            top:"60px",
            right:"60px"
        },
        {
            width:"40px",
            height:"40px",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top center",
                end: "top center",
            }
        }
    );
    gsap.fromTo(
        element.querySelector(".c-banner-left"),
        1,
        {
            height:0,
            width:"60px",
            top:0,
            right:0
        },
        {
            width:"60px",
            height:"100vh",
            scrollTrigger: {
                trigger: element,
                start:"top center",
                end:"top top",
                scrub: true
            }
        }
    );
}