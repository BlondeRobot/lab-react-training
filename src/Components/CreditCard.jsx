import Visa from "../assets/images/visa.png"
import Master from "../assets/images/master-card.svg"


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    let src = ""
    if (type === 'Visa') {
        src = Visa
    }
    else {
        src = Master
    }
    return (
      <div style={{ backgroundColor: bgColor, color: color }}>
        <img src={src} alt="bank-logo" />
        <p>**** **** **** {number.substr(-4)}</p>
        <p>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    );
}

export default CreditCard