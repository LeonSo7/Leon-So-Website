import '../../styles/components/aboutSection/Bio.css'
import ContactIcons from '../ContactIcons';

function NextContent() {
    return (
        <div>
            <div id="headerTxtDiv">
                <h1 id="mainHeaderTxt">
                    What's Next?
                </h1>
            </div>
            <div id="bioTextDiv">
                <p>
                    What's next? Who knows! <br />
                    <br />
                    Have an opportunity where I can help shape the future and make a positive impact? <br />
                    Please reach out!
                </p>
                <ContactIcons />
            </div>
        </div>
    );
}

export default NextContent;