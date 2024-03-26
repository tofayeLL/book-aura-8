
import { Link } from 'react-router-dom';
import img from '../../../public/images/book.png'

const Banner = () => {
    return (
            <section className="bg-[#f3f3f3] rounded-lg my-16">
                <div className="container flex flex-col lg:gap-0 gap-8 justify-center lg:items-center px-10 lg:px-20 mx-auto py-10 lg:py-20 lg:flex-row lg:justify-between ">
                    <div className="lg:space-y-12 space-y-6 flex-1">
                        <h1 className="lg:text-6xl text-xl font-bold">Books to freshen up
                            <br />your bookshelf</h1>
                        <div>
                            <Link to={'/listed'}> <button className="btn text-lg bg-[#23be0a] text-white font-medium">View The List</button></Link>
                        </div>
                    </div>

                    <div ><img className='lg:w-[100%] w-[50%]' src={img} alt="" /></div>


                </div>
            </section> 
    );
};

export default Banner;