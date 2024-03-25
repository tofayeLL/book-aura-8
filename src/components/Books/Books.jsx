import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
        .then(res => res.json() )
        .then (data => setBooks(data))

    }, [])

   


    return (
        <section className="my-16">

            <div className="text-center">
                <h1 className="text-5xl font-bold">Books{books.length}</h1>
            </div>


            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6  my-8">

              {
                books.map((book,index) => <Book 
                book={book}
                key={index} ></Book>)
              }



            </div>

        </section>
    );
};

export default Books;