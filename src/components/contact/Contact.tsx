import Footer from "../home/Footer";
import ContactBanner from "./ContactBanner";
import ContactInformation from "./ContactInformation";
import GetInTouchSection from "./GetInTouchSection";






function Contact(){
    return(
     <><ContactBanner />
     <GetInTouchSection />
     <ContactInformation />
     <Footer />
     </>
    );
};

export default Contact;