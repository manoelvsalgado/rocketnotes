import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  
  return (
    <Container>
      <Profile>
        <img 
        src="https://github.com/manoelvsalgado.png"
        alt="Foto de Usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Manoel Salgado</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}