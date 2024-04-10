import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faBell, faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLaptop } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div>
            <div className="p-5 flex flex-wrap gap-5 justify-center shadow">
                <p className="hover:rounded-full  hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Account</p>
                <p className="hover:rounded-full hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Security</p>
                <p className="hover:rounded-full hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Data & Privacy</p>
                <p className="hover:rounded-full hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Payments</p>
                <p className="hover:rounded-full hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Notification</p>
                <p className="rounded-full bg-blue-200 text-blue-600 hover:rounded-full hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Seller Tools</p>
                <p className="hover:rounded-full hover:bg-blue-200 hover:text-blue-600 p-2 cursor-pointer transition duration-300">Statements and taxes</p>
            </div>
            <div className="px-8 py-3 sm:px-20 sm:w-1/2">
                <p className="text-3xl font-bold">Seller tools</p>
                <p>Sell online easily and grow your business with Seller Tools. Create PayPal buttons, get instant payment notifications, and do much more.</p>
            </div>
            <div className="px-28 ">
                <p className="text-2xl ">Seeling online</p>
                <p>Grow your business by making it easier for your customers to pay you.</p>
                <div className="my-3 max-w-3xl">
                    <div className="rounded-md p-3 shadow sm:flex justify-center items-center gap-3">
                        <p className="text-xl mx-auto rounded-full w-10 p-3 h-10 flex items-center justify-center bg-stone-300"><FontAwesomeIcon icon={faPaypal} style={{ color: "#74C0FC", }} />
                        </p>
                        <div>
                            <p className="font-bold">PayPal buttons</p>
                            <p> Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.</p>
                        </div>
                        <p className="text-blue-500">Manage</p>
                    </div>
                    <div className="rounded-md my-3 p-3 shadow sm:flex justify-center items-center gap-3">
                        <p className="text-xl mx-auto rounded-full w-10 p-3 h-10 flex items-center justify-center bg-stone-300">
                            <FaLaptop />
                        </p>
                        <div>
                            <p className="font-bold">Website preferences</p>
                            <p>
                                Control how you sell online by turning on express checkouts and bringing customers back to your website                            </p>
                        </div>
                        <p className="text-blue-500">Update</p>
                    </div>
                    <div className="rounded-md my-3 p-3 shadow sm:flex  items-center gap-3">
                        <p className="transform -rotate-45 text-xl rounded-full w-10 p-3 h-10 flex items-center justify-center bg-stone-300">
                            <FontAwesomeIcon icon={faBell} style={{ color: "#74C0FC", }} />
                        </p>
                        <div>
                            <p className="font-bold">Instant payment notifications</p>
                            <p> Stay informed by turning on notifications for payments made on your website.
                            </p>
                        </div>

                        <p className="text-blue-500">Update</p>
                    </div>
                </div>
            </div>
            <div className="px-28 max-w-3xl">
                <p className="text-2xl ">Getting paid</p>
                <p> Choose from various payment tools to attract your customers..</p>
                <div className="rounded-md my-3 p-3 shadow sm:flex justify-center items-center gap-3">
                    <p className="text-xl mx-auto rounded-full w-10 p-3  h-10 flex items-center justify-center bg-stone-300">
                        <FontAwesomeIcon icon={faFileInvoice} style={{ color: "#74C0FC", }} />
                    </p>
                    <div>
                        <p className="font-bold">Website preferences</p>
                        <p>
                            Control how you sell online by turning on express checkouts and bringing customers back to your website                            </p>
                    </div>
                    <p className="text-blue-500">Update</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;