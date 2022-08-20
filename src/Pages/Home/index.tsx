import { H2 } from '../../Components/H2';
import { Pomodoro } from '../../Components/Pomodoro';
import './style.css';

function Home() {
  return (
    <div>
      <H2 id="title">Pomodoro App</H2>
      <main>
        <Pomodoro defaultTime={15} />
      </main>
    </div>
  );
}

export default Home;
