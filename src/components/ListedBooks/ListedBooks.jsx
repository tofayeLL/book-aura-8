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

    const [filter, setFilter] = useState([]);

    const [filterWishList, setFilterWishList] = useState([]);

    useEffect(() => {
        const getReadListId = getStoredRead();
        if (books.length > 0) {
            const readBooks = books.filter((book) => getReadListId.includes(book.id));
            setReadList(readBooks);
            setFilter(readBooks);
        }

        const getWishListId = getStoredWish();
        if (books.length > 0) {
            const wishListBooks = books.filter(wishBook => getWishListId.includes(wishBook.id));
            setWishList(wishListBooks);
            setFilterWishList(wishListBooks);


        }

    }, [books])




    /* sorting data for read list and wish list click handler */
    
    const handleFilter = (filter) => {
        if (filter === 'pages') {

            const sortPagesReadList = [...readList].sort((a, b) => b.totalPages - a.totalPages);
            setFilter(sortPagesReadList);

            const sortPagesWishList = [...wishList].sort((a, b) => b.totalPages - a.totalPages);
            setFilterWishList(sortPagesWishList);
        }
        else if (filter === 'rating') {
            const sortRatingReadList = [...readList].sort((a, b) => b.rating - a.rating);
            setFilter(sortRatingReadList);

            const sortRatingWishList = [...filterWishList].sort((a, b) => b.rating - a.rating);
            setFilterWishList(sortRatingWishList);
        }
        else if (filter === 'year') {
            const sortYearReadList = [...readList].sort((a, b) => b?.yearOfPublishing - a?.yearOfPublishing);
            setFilter(sortYearReadList);

            const sortYearWishList = [...filterWishList].sort((a, b) => b?.yearOfPublishing - a?.yearOfPublishing);
            setFilterWishList(sortYearWishList);

        }

    }








    return (
        <div>
            <div className="bg-[#f3f3f3] flex justify-center items-center
            py-6 rounded-lg my-10 ">
                <h1 className="text-4xl font-bold">Books</h1>
            </div>


            {/* filter sort by */}

            <div className='flex flex-col justify-center items-center my-6'>

                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23be0a] text-white px-8 text-lg">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleFilter('pages')}><a>Number of pages</a></li>
                        <li onClick={() => handleFilter('year')}><a>Publisher year</a></li>
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
                                    filter.map((read, index) => <ReadList
                                        read={read}
                                        key={index}></ReadList>)
                                }
                            </div>

                        </div>
                    </TabPanel>



                    <TabPanel>
                        <div className='space-y-8'>
                            {
                                filterWishList.map((wishList, index) => <WishList
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