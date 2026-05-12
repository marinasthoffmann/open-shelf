import { books } from "./ReleasesData";
import styled from "styled-components";
import { Title } from "../Title";
import RecommendationCard from "../RecommendationCard";
import bookImage from "../../images/book.jpg";

const RecentReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        width: 150px;
        margin: 0 15px;
    }
`;

function RecentReleases() {
    return (
        <RecentReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize="36px" 
            >
                RECENT RELEASES
            </Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt={book.title} />
                ))}
            </NewBooksContainer>
            <RecommendationCard 
                title="You might also like..."
                subtitle="Angular 11"
                description="Building an app with Google integration"
                imageSrc={bookImage}
            />               
        </RecentReleasesContainer>           
    );
}

export default RecentReleases;