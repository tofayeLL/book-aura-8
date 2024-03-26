
import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { MdFindInPage } from "react-icons/md";
const ReadList = ({ read }) => {
    const { image, name, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = read;
   
    return (
        <div>
            <div className="shadow-lg border-[1px] border-slate-200 rounded-lg my-8 p-6 ">
                <div className=" flex  justify-center gap-8">
                    <div className="lg:w-[20%]">
                        <img src={image} className="p-10 rounded-lg bg-[#f3f3f3]" />            
                    </div>

                    <div className="lg:w-[75%] space-y-4">
                        <h1 className="text-3xl font-semibold">{name}</h1>
                        <p className="text-base font-semibold">By: {author}</p>

                        <div className="flex  items-center gap-6 ">
                        <span className="text-base font-medium">Tags:</span>
                             {
                                tags.map((tag, index) => <span className="bg-[#f3f3f3]  text-[#23be0a] text-base p-2 px-4 rounded-full font-semibold"
                                    key={index}> # {tag}   </span>

                                )
                            }

                            <p className="flex gap-1 justify-center items-center font-semibold"> <CiLocationOn></CiLocationOn> Year of Publishing : {yearOfPublishing}</p>

                           
                        </div>

                        <div className="flex justify-start items-center gap-10 border-b-2 pb-5 font-semibold opacity-80">
                                <p className="flex gap-2 justify-center items-center"> <FaUserGroup ></FaUserGroup> Publishers : {publisher}</p>
                                <p className="flex gap-2 justify-center items-center"> <MdFindInPage></MdFindInPage> Page:  {totalPages}</p>

                            </div>

                            <div className="flex justify-normal items-center gap-6">
                                <p className="bg-blue-100  text-blue-400 p-2 px-4 rounded-full font-semibold">Category: {category}</p>
                                <p className="bg-purple-100  text-purple-400 p-2 px-4 rounded-full font-semibold">Ratings: {rating}</p>
                                <p className="bg-[#23be0a]  text-white p-2 px-4 rounded-full font-semibold">View Details</p>
                            </div>





                    </div>
                </div>
            </div>



        </div>
    );
};

export default ReadList;