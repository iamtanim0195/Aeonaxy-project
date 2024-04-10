import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="border flex flex-wrap pl-20 gap-5 text-xl p-5">
        <p>
          <FontAwesomeIcon icon={faPaypal} style={{ color: "#74C0FC", }} />
        </p>
        <p className="text-blue-900 text-xl">Pay<span className="text-blue-500">Pal</span></p>
        <p>Help</p>
        <p>Contact Us</p>
        <p>Security</p>
        <p>Fees</p>
      </div>
      <div className="border shadow mb-5 flex flex-wrap pl-20 gap-5 text-xl p-5">
        <p className="text-sm">
          &copy; 1999-2022 PayPal, Inc. All rights reserved. Privacy Legal Policy Updates
          1999-2022 PayPal, Inc. All rights reserved.
        </p>
        <p>Privacy</p>
        <p>Legal</p>
        <p>Policy Updates</p>
      </div>
    </div>
  )
}

export default Footer;