import { Pomodoro } from '../../Components/Pomodoro';
import './style.css';

function Home() {
  return (
    <div id="home">
      <Pomodoro defaultTime={15} />
    </div>
  );
}

export default Home;
