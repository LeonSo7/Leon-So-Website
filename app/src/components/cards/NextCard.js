import '../../styles/components/Card.css'
import { FaQuestion } from 'react-icons/fa';

// Card for What's Next (Future) timeline node
function NextCard() {
    return (
        <div className="idCard">
            <div id="cardLogoDiv">
                <p id="defaultNameCardTxt"><b>LEON SO</b></p>
                <p id="defaultNameCardTxt"><FaQuestion size={30} /><FaQuestion size={30} /><FaQuestion size={30} /></p>
            </div>
            <div id="cardMemojiDiv">
                <img width="198px" src="/assets/images/memoji-shrug.png" alt="ID Card Memoji Image" />
            </div>
        </div>
    );
}

export default NextCard;