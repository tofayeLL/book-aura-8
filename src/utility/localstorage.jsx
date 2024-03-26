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
        alert('exist book')
    }
    else {
        storedRead.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedRead));
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
    if(alreadyExist){
        return alert('already exist in read list');
    }


    const isExist = storedWish.find(wishId => wishId === id);
    if (isExist) {
        alert('already exist wish list');
    }
    else {
        storedWish.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWish));
    }
}














export { saveReadBooks, getStoredRead, saveWishBooks, getStoredWish }