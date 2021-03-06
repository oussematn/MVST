import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faLanguage, faStar } from "@fortawesome/free-solid-svg-icons"
import ReactTimeAgo from 'react-time-ago'

/** This is a single repository info */
function Repo(props) {
    return (
        <div>
            <button className="bg-gray-100 border-2 border-blue-400 rounded-lg font-semibold py-1 px-3 mt-4 float-right"><FontAwesomeIcon icon={faStar} color="gray" /> Star</button>
            <p className="font-bold text-2xl text-blue-400"><a href={props.html_url} target="_blank" rel="noreferrer">{props.name}</a></p>
            {props.description ?
                <p className="w-4/5 mt-2">{props.description}</p>
                : ''}
            <div className="pt-4">
                <span className="mr-6"><FontAwesomeIcon icon={faLanguage} color="gray" /> {props.language}</span>
                <span className="mr-6"><FontAwesomeIcon icon={faCodeBranch} color="gray" /> {props.forks}</span>
                <span>Updated <ReactTimeAgo date={props.updated_at} /></span>
            </div>
            <hr className="my-4 border-t-1" />
        </div>
    )
}

// Making sure we have the props needed
Repo.propTypes = {
    props: PropTypes.object.isRequired,
}

export default Repo
