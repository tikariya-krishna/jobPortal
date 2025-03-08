import TitleContaint from "./TitleContaint";
import list from "../../lists/JobPostList";

const ManageJobs = () => {
    return(
        <>
        <TitleContaint name="Manage Jobs" path="manage jobs"/>
            <div className="mx-10 my-5">
                <div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Posted
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {list.map((ele)=>(
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={ele.logo} alt="Logo" width={"39px"} height={"39px"} className="rounded-full"></img><span>{ele.jobTitle}</span>
                            </th>
                            <td className="px-6 py-4">
                                {ele.location}
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        
                    </tbody>
                    ))}
                </table>
                </div>
            </div>
        </>
    )
}
export default ManageJobs;