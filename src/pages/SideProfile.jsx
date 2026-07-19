import Profile from "../component/profile/Profile"
import Home from "./Home"




function SideProfile() {
    return (
        <div className="relative">
            <div>
                <Home />
            </div>
            <div className="absolute top-0 right-0 ">
                <Profile />
            </div>
        </div>
    )
}

export default SideProfile
