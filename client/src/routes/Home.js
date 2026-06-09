import styled from 'styled-components';
import Search from '../components/Search';
import RecentReleases from '../components/RecentReleases';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

function Home() {
  return (
    <AppContainer>
      <Search />
      <RecentReleases />
    </AppContainer>
  );
};

export default Home;
