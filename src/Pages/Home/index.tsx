import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from '../../Components/Container';
import { Content } from '../../Components/Content';
import { H1 } from '../../Components/H1';
import { Pomodoro } from '../../Components/Pomodoro';
import { TopButton } from '../../Components/TopButton';

function Home() {
  return (
    <div>
      <H1 id="title">Pomodoro App</H1>
      <Container>
        <Content>
          <Link to="/settings">
            <TopButton>
              <FiSettings size={24} />
            </TopButton>
          </Link>
          <Pomodoro />
        </Content>
      </Container>
    </div>
  );
}

export default Home;
