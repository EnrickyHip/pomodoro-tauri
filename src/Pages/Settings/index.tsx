import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button';
import { Container } from '../../Components/Container';
import { Content } from '../../Components/Content';
import { H2 } from '../../Components/H2';

function Home() {
  return (
    <div>
      <H2 id="title">Pomodoro Settings</H2>
      <Container>
        <Content>
          <p>settings here</p>
          <Link to="/">
            <Button>Back</Button>
          </Link>
        </Content>
      </Container>
    </div>
  );
}

export default Home;
