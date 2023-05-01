import { FiPlus} from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Note } from '../../components/note';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>
      
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Node" /></li>     

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Content>
        <Section title="Minhas notas"> 
          <Note data={{
            title: 'React', 
            tags: [
             {id:'1', name: 'react'},
             {id:'2', name: 'rocketseat'}
            ]
           }}
           />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>

    </Container>
  );
}