import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Pomodoro } from '../../components/Pomodoro';
import { Container } from '../../components/UI/Container';
import { Content } from '../../components/UI/Content';
import { TopButton } from '../../components/UI/TopButton';
import { Title } from '../../components/UI/Title';

interface Props {
  lightMode: boolean;
}

function Home({ lightMode }: Props) {
  return (
    <div>
      <Title>Pomodoro</Title>
      <Container>
        <Content border={lightMode}>
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
