import '../../styles/components/Card.css';
import Card from './Card';

function MetaCard() {
    const logoImagePath = "/assets/logos/meta-logo.png";
    const dateTxt = "06/22 - 09/22"
    const cardProps = { logoImagePath: logoImagePath, dateTxt: dateTxt, logoImageWidth: "75px" };
    return (
        <div className="metaCard">
            <Card {...cardProps} />
        </div>
    );
}

export default MetaCard;