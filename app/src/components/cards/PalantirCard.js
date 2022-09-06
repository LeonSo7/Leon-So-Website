import '../../styles/components/Card.css';

import Card from './Card';

function PalantirCard() {
    const logoImagePath = "/assets/logos/palantir-logo.png";
    const dateTxt = "03/22 - 06/22"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "45px" };
    return (
        <div>
            <Card {...cardProps} />
        </div>
    );
}

export default PalantirCard;