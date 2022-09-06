import '../../styles/components/Card.css';

import Card from './Card';

function AmazonCardOrange() {
    const logoImagePath = "/assets/logos/amazon-logo.png";
    const dateTxt = "01/22 - 03/22"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "100px" };
    return (
        <div className="amazonCardOrange">
            <Card {...cardProps} />
        </div>
    );
}

export default AmazonCardOrange;