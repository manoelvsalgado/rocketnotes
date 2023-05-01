import { Container, Profile, Logout, Search } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../Input';


export function Header() {
  
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>
    <Profile to="/profile">
      <div>
        <strong>Manoel Salgado</strong>
      </div>
      <Logout>
        <a href="/">
          Sair 
        </a>
      </Logout>
    </Profile>
    </Container>
  );
}