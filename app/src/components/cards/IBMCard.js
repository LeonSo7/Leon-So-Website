import '../../styles/components/Card.css';
import Card from './Card';

function IBMCard() {
    const logoImagePath = "/assets/logos/ibm-logo.png";
    const dateTxt = "05/20 - 04/21"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "80px" };
    return (
        <div className="ibmCard">
            <Card {...cardProps} />
        </div>
    );
}

export default IBMCard;