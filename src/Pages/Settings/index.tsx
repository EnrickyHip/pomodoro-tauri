import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SettingsForm } from '../../components/SettingsForm';
import { Container } from '../../components/UI/Container';
import { Content } from '../../components/UI/Content';
import { Title } from '../../components/UI/Title';
import { TopButton } from '../../components/UI/TopButton';

function Settings() {
  return (
    <div>
      <Title>Pomodoro</Title>
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
