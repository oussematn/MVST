import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/** The component having user info */
const Profile = ({ user, orgs }) => {
    return (
        <div>
            {/* Listing user basic info */}
            <div className="flex md:block">
                <img src={user.avatar_url} alt="avatar" className="border-4 border-blue-400 rounded-full max-h-48 md:max-h-80" />
                <div className="pl-4 md:pl-0">
                    <p className="font-bold text-3xl mt-4">{user.name}</p>
                    <p className="text-xl text-gray-500">{user.login}</p>
                    {user.bio ? <p className="mt-4">{user.bio}</p> : ''}
                </div>
            </div>
            <button className="bg-gray-100 w-full border-2 border-blue-400 rounded-lg font-semibold py-1 mt-4">Follow</button>
            <div className="mt-4 text-gray-700">
                <FontAwesomeIcon icon={faUser} /> <span className="font-bold">{user.followers}</span> followers  - <span className="font-bold">{user.following}</span> following - <FontAwesomeIcon icon={faStar} /> <span className="font-bold">{user.public_repos}</span>
            </div>
            <div className="mt-6 mb-4 text-gray-700">
                {user.location ? <p> <FontAwesomeIcon icon={faMapMarkedAlt} /> {user.location}</p> : ''}
                {user.email ? <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p> : ''}
                {user.twitter_username ? <p><FontAwesomeIcon icon={faTwitter} /> {user.twitter_username}</p> : ''}
            </div>
            <hr />
            {/* Listing user organizations if he has any */}
            {orgs.length !== 0 ?
                <div>
                    <p className="font-bold text-lg mt-4">Organizations</p>
                    <div className="flex gap-1">
                        {orgs.map(org => {
                            return <img key={org.id} src={org.avatar_url} alt="avatar" className="max-h-10" />
                        })}
                    </div>
                </div>
                : ''}
        </div>
    )
}

// Making sure we have the props needed
Profile.propTypes = {
    user: PropTypes.array.isRequired,
    orgs: PropTypes.array.isRequired
}

export default Profile
