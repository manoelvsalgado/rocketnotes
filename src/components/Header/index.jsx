import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { Link } from 'react-router-dom';


export function Header() {
  
  return (
    <Container>
      <Profile to="/profile">
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