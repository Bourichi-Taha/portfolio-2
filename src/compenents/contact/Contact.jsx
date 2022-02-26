import "./contact.css"
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';
import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useRef } from "react";
import { ContactAnimations } from "../../animations/Animations";
import  emailjs  from "emailjs-com";

const Contact = () => { 
    const ref = useRef(null);
    const form = useRef(null);
    useEffect(() => {
        const element = ref.current;
        ContactAnimations(element);
    },[]);
    const SubmitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_k8qdyrq','template_giu4ing',form.current,'user_DLi4HUetQbj9btmASRcdz')
        .then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        )
    }
    return (
        <div ref={ref} className="c">
            <div className="c-banner"></div>
            <div className="c-banner-corner"></div>
            <div className="c-left">
                <div className="c-title">Let's discuss</div>
                <div className="c-title" style={{ marginBottom: "100px" }}>your project!</div>
                <div className="c-info">
                    <PhoneIcon className="c-icon" />
                    <div className="c-item-info">+212 626661516</div>
                </div>
                <div className="c-info">
                    <EmailIcon className="c-icon" />
                    <div className="c-item-info">Bourichi.taha@gmail.com</div>
                </div>
                <div className="c-info">
                    <PlaceIcon className="c-icon" />
                    <div className="c-item-info">marrocco tangier bendibane hay ouarda</div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quod ipsa voluptatem enim doloribus repellat. Magni assumenda distinctio dolorum quaerat illum! Voluptatibus natus eligendi adipisci?</p>
                <form ref={form} onSubmit={SubmitHandler} className="c-form">
                    <div className="c-name ">
                        <input type="text" placeholder="Name" name="user_name" className="c-input " />
                    </div>
                    <div className="c-subject ">
                        <input type="text" placeholder="Subject" name="user_subject" className="c-input" />
                    </div>
                    <div className="c-email">
                        <input type="email" placeholder="Email" name="email" className="c-input" />
                    </div>
                    <div className="c-message">
                        <TextareaAutosize maxRows={4} rows={2} placeholder="Message" name="message" className="c-text-area" />
                    </div>
                    <button type="submit" className="c-submit">Submit</button>
                </form>
                <div className="c-banner-left"></div>
            </div>
        </div>
    )
}

export default Contact