import { FaRegEdit } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";
import { TbPassword } from "react-icons/tb";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    function HandleProfile() {
        navigate("/");
    }
    return (
        <div className="bg-gray-800 h-screen w-72 flex flex-col p-6">


            <Button clickHandle={HandleProfile} css="text-white text-3xl self-start hover:text-gray-300">
                <CiCircleChevLeft />
            </Button>

            <div className="flex flex-col items-center space-y-6 mt-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src="https://picsum.photos/200/300"
                        alt="Profile"
                    />
                </div>

                <div className="w-full text-white">
                    <h2 className="font-semibold mb-1">Username</h2>
                    <div className="flex justify-between items-center border rounded-lg px-3 py-2">
                        <span>aditya2607</span>
                        <FaRegEdit className="cursor-pointer" />
                    </div>
                </div>

                <div className="w-full text-white">
                    <h2 className="font-semibold mb-1">Email</h2>
                    <div className="border rounded-lg px-3 py-2">
                   
                    </div>
                </div>

                <div className="w-full text-white">
                    <h2 className="font-semibold mb-1">Password</h2>
                    <div className="flex items-center border rounded-lg px-3 py-2">
                        <TbPassword size={22} />
                    </div>
                </div>
            </div>


            <button className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold">
                Logout
            </button>

        </div>
    );
}

export default Profile;
