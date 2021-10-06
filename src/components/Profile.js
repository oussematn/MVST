import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faStar, faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    return (
        <div>
            <div className="flex md:block">
                <img src="https://avatars.githubusercontent.com/u/24320168?v=4" alt="avatar" className="border-4 border-blue-400 rounded-full max-h-48 md:max-h-80" />
                <div className="pl-4 md:pl-0">
                    <p className="font-bold text-3xl mt-4">Miled Oussema</p>
                    <p className="text-xl text-gray-500">oussematn</p>
                    <p className="mt-4">I do many things at a time</p>
                </div>
            </div>
            <button className="bg-gray-100 w-full border-2 border-blue-400 rounded-lg font-semibold py-1 mt-4">Follow</button>
            <div className="mt-4 text-gray-700">
                <FontAwesomeIcon icon={faUser} /> <span className="font-bold">7</span> followers  - <span className="font-bold">0</span> following - <FontAwesomeIcon icon={faStar} /> <span className="font-bold">2</span>
            </div>
            <div className="mt-6 mb-4 text-gray-700">
                <FontAwesomeIcon icon={faMapMarkedAlt} /> Tunis Tunisia
                <br />
                <FontAwesomeIcon icon={faEnvelope} /> oussmiled@gmail.com
            </div>
            <hr />
            <div>
                <p className="font-bold text-lg mt-4">Organizations</p>
                <div className="flex gap-1">
                    <img src="https://avatars.githubusercontent.com/u/24320168?v=4" alt="avatar" className="max-h-10" />
                    <img src="https://avatars.githubusercontent.com/u/24320168?v=4" alt="avatar" className="max-h-10" />
                </div>
            </div>
        </div>
    )
}

export default Profile
