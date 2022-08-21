import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Container } from '../../Components/Container';
import { Content } from '../../Components/Content';
import { H1 } from '../../Components/H1';
import { TopButton } from '../../Components/TopButton';

function Home() {
  return (
    <div>
      <H1 id="title">Pomodoro Settings</H1>
      <Container>
        <Content>
          <Link to="/">
            <TopButton>
              <BiArrowBack size={24} />
            </TopButton>
          </Link>
          <p>settings here</p>
        </Content>
      </Container>
    </div>
  );
}

export default Home;
