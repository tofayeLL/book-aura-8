import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    const { name, author, image, rating, category, review, tags, totalPages, publisher, yearOfPublishing } = book;

    

    return (
        <section>

            <div className="grid grid-cols-2 gap-6 ">
                <div className="bg-red-400 flex flex-col justify-center items-center ">
                    <img src={image} alt="" className="h-[50vh] mx-auto object-cover" />

                </div>
                <div className="bg-green-200   h-[80vh]">
                    <h1 className="text-2xl">{name}</h1>
                    <p>By: {author}</p>
                    <div className="border-b-2 border-t-2 py-4">
                        <p>{category}</p>
                    </div>

                    <p>Review: <span>{review}</span></p>

                    <div className="flex  items-center gap-6 border-b-2 pb-5">
                        Tags:
                        {
                            tags.map((tag, index) => <span key={index} className='mr-2'> #{tag}</span>
                            )
                        }
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="space-y-4">
                            <p className="flex  items-center gap-8">Number of Pages:</p>
                            <p className="flex items-center gap-8">Publisher:</p>
                            <p className="flex items-center gap-8">Year of Publishing:</p>
                            <p className="flex items-center gap-8">Rating:</p>

                        </div>
                        <div className="space-y-4">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>

                        </div>       

                    </div>


                    <div className="space-x-4">
                        <button  className="btn">Read</button>
                        <button className="btn">Wishlist</button>

                    </div>


                </div>


            </div>



        </section>
    );
};

export default BookDetails;