import '../../styles/components/Card.css'
import React, { useState } from "react";

function Card(props) {
    const [logoImagePath, setLogoImagePath] = useState(props.logoImagePath);
    const [logoImageWidth, setLogoImageWidth] = useState(props.logoImageWidth);
    const [dateTxt, setDateTxt] = useState(props.dateTxt);

    return (
        <div className="idCard">
            <p id="cardDateTxt">{dateTxt ? dateTxt : " "}</p>
            <div id="cardLogoDiv">
                {logoImagePath ? <img width={logoImageWidth} src={logoImagePath} alt="ID Card Logo Image" /> : <p id="defaultNameCardTxt"><b>LEON SO</b></p>}
            </div>
            <div id="cardMemojiDiv">
                <img width="198px" src="/assets/images/memoji.png" alt="ID Card Memoji Image" />
            </div>
        </div>
    );
}

export default Card;