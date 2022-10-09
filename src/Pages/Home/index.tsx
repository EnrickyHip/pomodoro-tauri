import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Pomodoro } from '../../components/Pomodoro';
import { Container } from '../../components/UI/Container';
import { Content } from '../../components/UI/Content';
import { Title } from '../../components/UI/Title';
import { AbsoluteButton } from '../../components/AbsoluteButton';

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
            <AbsoluteButton right="0" top="0">
              <FiSettings size={24} />
            </AbsoluteButton>
          </Link>
          <Pomodoro />
        </Content>
      </Container>
    </div>
  );
}

export default Home;
