import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container } from '../../Components/UI/Container';
import { Content } from '../../Components/UI/Content';
import { H1 } from '../../Components/UI/H1';
import { Pomodoro } from '../../Components/Pomodoro';
import { TopButton } from '../../Components/UI/TopButton';

function Home() {
  return (
    <div>
      <H1 id="title">Pomodoro</H1>
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
