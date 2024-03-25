import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { id, name, author, image, rating, category } = book;
    return (
        <div>
            <Link to={`/book/${id}`}>

                {/* card 1 */}
                <div className="shadow-xl border-[1px] border-slate-200 rounded-lg">
                    <div className="space-y-6 p-8">
                        <figure className=" bg-[#f3f3f3] flex justify-center items-center py-6 rounded-lg">
                            <img src={image} alt="books" className="rounded-xl" />
                        </figure>


                        <div className="py-4" >
                            <h2 className="text-xl font-semibold">{name}</h2>
                            <p className="my-5">By : {author}</p>
                            <div className="border-b-2 border-dashed "></div>
                            <div className="flex justify-between items-center mt-5">
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