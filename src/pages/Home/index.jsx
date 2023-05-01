import { FiPlus} from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Note } from '../../components/note';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export function Home() {
  return (
    <Container>

      <Header />
        <Section title="Meus filmes"> 
          <Button 
            to="/new"
            icon={<FiPlus/>}
            title="Adicionar filme"
          />

          <Note data={{
            title: 'Três Homens em Conflito',
            rating: '', 
            text: 'ab',
            tags: [
             {id:'1', name: 'Faroeste'},
             {id:'2', name: 'Clint Eastwood'},
             {id:'2', name: 'Sergio Leone'}
            ]
           }}
           />
        </Section>
    </Container>
  );
}