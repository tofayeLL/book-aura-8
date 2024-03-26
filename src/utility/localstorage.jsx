import { toast } from 'react-toastify';


const getStoredRead = () => {
    const storedRead = localStorage.getItem('read-list');
    if (storedRead) {
        return JSON.parse(storedRead);
    }
    return [];
}

const saveReadBooks = (id) => {

    const storedRead = getStoredRead();
    const isExist = storedRead.find(readId => readId === id);
    if (isExist) {
        toast.warn("Already added this book to the read list");
    }
    else {
        storedRead.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedRead));
        toast.success("Added this book to the read list successfully");
    }

}




// wish list
const getStoredWish = () => {
    const storedWish = localStorage.getItem('wish-list');
    if (storedWish) {
        return JSON.parse(storedWish);
    }
    return [];
}

const saveWishBooks = (id) => {
    const storedWish = getStoredWish();

    const readList = getStoredRead();
    const alreadyExist = readList.find(readListId => readListId === id);
    if (alreadyExist) {
        return toast.error("This book already exist in the read list so you can't add to wish list");
    }


    const isExist = storedWish.find(wishId => wishId === id);
    if (isExist) {
        toast.warn("Already added this book to the wish list");
    }
    else {
        storedWish.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWish));
        toast.success("Added this book to the wish list successfully");
    }
}





export { saveReadBooks, getStoredRead, saveWishBooks, getStoredWish }