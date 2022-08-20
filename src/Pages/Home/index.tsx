import { Container } from '../../Components/Container';
import { H2 } from '../../Components/H2';
import { Pomodoro } from '../../Components/Pomodoro';

function Home() {
  return (
    <div>
      <H2 id="title">Pomodoro App</H2>
      <Container>
        <Pomodoro />
      </Container>
    </div>
  );
}

export default Home;
