import SignUp from "../../Components/SignUp/SignUp";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SignUpPage.css"

const SignUpPage = () => {
    return ( 
        <div>
            <div id="sign_up_main">
                <Header />
                <SignUp />
            </div>
            <Footer />
        </div>
     );
}
 
export default SignUpPage;