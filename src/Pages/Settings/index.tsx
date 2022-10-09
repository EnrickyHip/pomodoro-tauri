import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SettingsForm } from '../../components/SettingsForm';
import { Container } from '../../components/UI/Container';
import { Content } from '../../components/UI/Content';
import { Title } from '../../components/UI/Title';
import { AbsoluteButton } from '../../components/AbsoluteButton';

interface Props {
  lightMode: boolean;
}

function Settings({ lightMode }: Props) {
  return (
    <div>
      <Title>Settings</Title>
      <Container>
        <Content border={lightMode}>
          <Link to="/">
            <AbsoluteButton right="0" top="0">
              <BiArrowBack size={24} />
            </AbsoluteButton>
          </Link>
          <SettingsForm />
        </Content>
      </Container>
    </div>
  );
}

export default Settings;
