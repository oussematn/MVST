import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Repo() {
    return (
        <div>
            <button className="bg-gray-100 border-2 border-blue-400 rounded-lg font-semibold py-1 px-3 mt-4 float-right"><FontAwesomeIcon icon={faStar} color="gray" /> Star</button>
            <p className="font-bold text-2xl text-blue-400">Chatty</p>
            <p className="w-4/5 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, saepe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam fugiat laborum reprehenderit, laudantium enim amet autem? Nesciunt saepe provident hic. ?</p>
            <div className="flex gap-2 py-2">
                <p>TypeScript</p>
                <p>125</p>
                <p>MIT License</p>
                <p>Updated 5 days ago</p>
            </div>
            <hr className="my-4 border-t-1" />
        </div>
    )
}


export default Repo

