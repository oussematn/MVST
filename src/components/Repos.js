import PropTypes from 'prop-types'
import { useState } from "react";
import Repo from "./Repo"

/** The user repositories list */
function Repos({ repos }) {
    /** The 'Find a repository' input value */
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="mt-8 md:mt-0">
            <div>
                <input type="text" placeholder="Find a repository..." className="w-full rounded-lg border-2 border-blue-400 outline-none p-1" onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <hr className="my-4 border-t-2" />
            <div>
                {repos.map(repo => {
                    // Listing only the repos having the search string in the title
                    if (repo.name.toLowerCase().includes(searchValue.toLowerCase()) || searchValue === '') {
                        return <Repo {...repo} key={repo.id} />
                    }
                    return <span></span>
                })}
            </div>
        </div>
    )

}

// Making sure we have the props needed
Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos
