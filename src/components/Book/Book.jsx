import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { id, name, author, image, rating, category, tags } = book;
    return (
        <div>
            <Link to={`/book/${id}`}>

                {/* card 1 */}
                <div className="shadow-xl border-[1px] border-slate-200 rounded-lg">
                    <div className="space-y-6 p-8">
                        <figure className=" bg-[#f3f3f3] flex justify-center items-center py-6 rounded-lg">
                            <img src={image} alt="books" className="rounded-xl" />
                        </figure>

                        <div className="flex items-center gap-6">
                            
                            {
                                tags.map((tag, index) => <span key={index} className='mr-2 bg-[#f3f3f3]  text-[#23be0a] p-2 px-4 rounded-full font-semibold '> #{tag}</span>
                                )
                            }
                        </div>


                        <div >
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className="my-3 text-base font-medium opacity-90">By : {author}</p>
                            <div className="border-b-2 border-dashed "></div>
                            <div className="flex justify-between items-center mt-5 text-base font-medium opacity-90">
                                <p>{category}</p>
                                <p className="flex items-center gap-2">
                                    <span>{rating}</span>
                                    <span><FaRegStar></FaRegStar></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </Link>

        </div>
    );
};

export default Book;