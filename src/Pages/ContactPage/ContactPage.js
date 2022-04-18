import ContactEmail from "../../Components/ContactEmail/ContactEmail";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./ContactPage.css"
const ContactPage = () => {
    return ( 
        <div>
            <div id="contact_main">
                <Header />
                <ContactEmail />
            </div>
            <Footer />
        </div>
     );
}
 
export default ContactPage;