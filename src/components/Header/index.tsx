import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img alt="dt money" src={logoImg} />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  );
}