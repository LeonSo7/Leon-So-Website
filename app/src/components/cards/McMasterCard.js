import '../../styles/components/Card.css';
import Card from './Card';

function McMasterCard() {
    const logoImagePath = "/assets/logos/mcmaster-crest-logo.png";
    const dateTxt = "2017 - 2023"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "55px" };
    return (
        <div className="mcmasterCard">
            <Card {...cardProps} />
        </div>
    );
}

export default McMasterCard;