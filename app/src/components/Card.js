import '../styles/components/Card.css'

function Card() {
    return (
        <div className="idCard">
            <p id="cardDateTxt">05/21 - 08/21</p>
            <div id="cardLogoDiv">
                <img width="100px" src="/assets/logos/amazon-logo-blue.png" />
            </div>
            <div id="cardMemojiDiv">
                <img width="198px" src="/assets/images/memoji.png" />
            </div>
        </div>
    );
}

export default Card;