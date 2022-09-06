import '../../styles/components/Card.css';

import Card from '../../components/cards/Card';

function AmazonBlueCard() {
    const logoImagePath = "/assets/logos/amazon-logo-blue.png";
    const dateTxt = "05/21 - 08/21"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "100px" };
    return (
        <div className="amazonCardBlue">
            <Card {...cardProps} />
        </div>
    );
}

export default AmazonBlueCard;