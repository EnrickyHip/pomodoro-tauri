import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SettingsForm } from '../../Components/SettingsForm';
import { Container } from '../../Components/UI/Container';
import { Content } from '../../Components/UI/Content';
import { H1 } from '../../Components/UI/H1';
import { TopButton } from '../../Components/UI/TopButton';

function Settings() {
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
          <SettingsForm />
        </Content>
      </Container>
    </div>
  );
}

export default Settings;
