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


            {/* filter sort by */}

            <div className='flex flex-col justify-center items-center my-6'>

                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23be0a] text-white px-8 text-lg">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>

            </div>




            {/* tab section */}

            <div>

                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
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

                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='space-y-8'>
                            {
                                wishList.map((wishList, index) => <WishList
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