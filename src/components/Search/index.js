import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./SearchData";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

function Search() {
    const [searchedBooks, setsearchedBooks] = useState([]);

    return (
        <SearchContainer>
            <Title>Do you know what you're looking for?</Title>
            <Subtitle>Find your book on our shelf!</Subtitle>
            <Input 
                placeholder="Write your next reading here..."
                onBlur={(e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
                    setsearchedBooks(filteredBooks);
                }}
            />
            { searchedBooks.map(book => (
                <ResultContainer key={book.id}>
                    <p key={book.id}>{book.title}</p>
                    <img key={book.id} src={book.src} alt={book.title} />
                </ResultContainer>                
            ))}            
        </SearchContainer>        
    );
}

export default Search;