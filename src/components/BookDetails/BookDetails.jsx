import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishBooks } from "../../utility/localstorage";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    const { name, author, image, rating, category, review, tags, totalPages, publisher, yearOfPublishing } = book;

    const handleRead = () => {
        saveReadBooks(idInt);


    }


    const handleWish = () => {
        saveWishBooks(idInt)
    }

    return (
        <section>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 my-10">

                <div className="bg-[#f3f3f3] flex flex-col justify-center items-center  lg:w-[100%] lg:h-[100%] mx-auto object-cover rounded-lg">
                    <img src={image} alt="" className="w-[40vh]  mx-auto object-cover" />

                </div>

                <div className=" p-6 space-y-2">

                    <h1 className="lg:text-2xl text-xl font-bold">{name}</h1>

                    <p className="lg:text-lg text-sm font-semibold">By: {author}</p>

                    <div className="border-b-2 border-t-2 py-2">
                        <p className="lg:text-lg text-sm font-semibold">{category}</p>
                    </div>

                    <p className="lg:w-[70%] "><span className="text-base font-medium">Review : </span>{review}</p>

                    <div className="flex  items-center gap-6 border-b-2 pb-5">
                        <span className="text-base font-medium">Tags:</span>
                        {
                            tags.map((tag, index) => <span key={index} className='mr-2 bg-[#f3f3f3]  text-[#23be0a] p-2 px-4 rounded-full font-semibold'> #{tag}</span>
                            )
                        }
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="space-y-2">
                            <p className="flex  items-center gap-8">Number of Pages:</p>
                            <p className="flex items-center gap-8">Publisher:</p>
                            <p className="flex items-center gap-8">Year of Publishing:</p>
                            <p className="flex items-center gap-8">Rating:</p>

                        </div>
                        <div className="space-y-2 text-base font-medium">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>

                        </div>

                    </div>


                    <div className="space-x-4 ">
                        <button onClick={handleRead} className="btn text-base  mt-4">Read</button>
                        <button onClick={handleWish} className="btn text-base  bg-[#59c6d2]">Wishlist</button>

                    </div>


                </div>


            </div>



        </section>
    );
};

export default BookDetails;