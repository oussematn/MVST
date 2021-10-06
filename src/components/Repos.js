import Repo from "./Repo"

function Repos() {
    return (
        <div className="mt-8 md:mt-0">
            <div>
                <input type="text" placeholder="Find a repository..." className="w-full rounded-lg border-2 border-blue-400 outline-none p-1" />
            </div>
            <hr className="my-4 border-t-2" />
            <div>
                <Repo />
                <Repo />
                <Repo />
                <Repo />
                <Repo />
            </div>
        </div>
    )

}

export default Repos
