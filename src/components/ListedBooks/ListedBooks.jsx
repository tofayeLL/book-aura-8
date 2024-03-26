import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredRead, getStoredWish } from '../../utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import ReadList from '../ReadList/ReadList';
import WishList from '../WishList/WishList';

const ListedBooks = () => {
    const books = useLoaderData();


    const [tabIndex, setTabIndex] = useState(0);
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    useEffect(() => {

        const getReadListId = getStoredRead();
        if (books.length > 0) {
            const readBooks = books.filter((book) => getReadListId.includes(book.id));
            setReadList(readBooks);
        }

        const getWishListId = getStoredWish();
        if (books.length > 0) {
            const wishListBooks = books.filter(wishBook => getWishListId.includes(wishBook.id));
            setWishList(wishListBooks);
        }

    }, [books])





    return (
        <div>
            <div className="bg-[#f3f3f3] flex justify-center items-center
            py-6 rounded-lg my-10 ">
                <h1 className="text-3xl font-bold">Listed Books</h1>
            </div>

            {/* tab section */}

            <div>


                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Whish List</Tab>
                    </TabList>

                    <TabPanel>
                        <div className=''>

                            <div className='space-y-8'>
                                {
                                    readList.map((read, index) => <ReadList
                                        read={read}
                                        key={index}></ReadList>)
                                }
                            </div>

                            {/* card 1 */}

                            {/*  <div className="hero  bg-base-200">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src="" className="max-w-sm rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div> */}
                            {/* card 1 */}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='space-y-8'>
                            {
                                 wishList.map((wishList , index) => <WishList
                                 wishList={wishList} 
                                 key={index}></WishList>)
                            }

                        </div>
                    </TabPanel>
                </Tabs>









            </div>

        </div>
    );
};

export default ListedBooks;