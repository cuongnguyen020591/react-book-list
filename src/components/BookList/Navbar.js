import React, {useContext} from 'react';
import  {BookContext} from '../Context/BookContext';

const NavBar = () =>{
    const {books} = useContext(BookContext);

    return (
        <div className= "navbar">
            <h2>I'm Reading Book List</h2>
            <p>Currently, i have {books.length} books to get through ...</p>
        </div>
    );
}

export default NavBar;