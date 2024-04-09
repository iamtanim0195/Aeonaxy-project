import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LiaCheckCircle } from "react-icons/lia";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
            <div className="w-60 sm:w-96 text-center shadow mx-auto mt-5 p-5">
                <div className="text-6xl mx-auto flex justify-center text-green-500">
                    <LiaCheckCircle />
                </div>
                <p>Your product link is ready</p>
                <p className="p-3">You can spread the word by sharing this link on email, social media, chat, whatsapp and more</p>
                <div className="flex gap-5 justify-center text-2xl">
                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#3f98f8", }} />
                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC", }} />
                    <FontAwesomeIcon icon={faQrcode} style={{ color: "#74C0FC", }} />
                </div>
                <p className="bg-[#2a78b3] p-2 m-3 text-white rounded-full hover:bg-blue-600">Get link</p>
                <Link to={"/Dashboard"}>
                    <p className="text-[#2a78b3] p-2 m-3 border border-[#2a78b3] rounded-full hover:text-white hover:bg-[#2a78b3]">Return to Dashboard</p>
                </Link>
            </div>
        </div>
    )
}

export default Home;