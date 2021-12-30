import '../../styles/components/Card.css';
import Card from './Card';

function McMasterGoldCard() {
    const logoImagePath = "/assets/logos/mcmaster-crest-logo-gold.png";
    const dateTxt = "2017 - 2023"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "55px" };
    return (
        <div className="mcmasterCardGold">
            <Card {...cardProps} />
        </div>
    );
}

export default McMasterGoldCard;