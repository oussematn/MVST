import { useState } from "react";
import Repo from "./Repo"

function Repos({ repos }) {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className="mt-8 md:mt-0">
            <div>
                <input type="text" placeholder="Find a repository..." className="w-full rounded-lg border-2 border-blue-400 outline-none p-1" onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <hr className="my-4 border-t-2" />
            <div>
                {repos.map(repo => {
                    if (repo.name.toLowerCase().includes(searchValue.toLowerCase()) || searchValue == '') {
                        return <Repo {...repo} key={repo.id} />
                    }
                })}
            </div>
        </div>
    )

}

export default Repos
