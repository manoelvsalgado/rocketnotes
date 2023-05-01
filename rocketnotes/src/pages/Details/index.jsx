import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section} from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag'

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
      <ButtonText title="Excluir nota" />

      <h1> Introdução ao React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Velit vero fugit minus delectus doloribus ullam facere architecto 
        repellat rerum laborum debitis vel consectetur dicta voluptatum, 
        deserunt dolorum labore amet nemo. Lorem ipsum dolor sit amet 
        consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Velit vero fugit minus delectus doloribus ullam facere architecto 
        repellat rerum laborum debitis vel consectetur dicta voluptatum, 
        deserunt dolorum labore amet nemo.
      </p>
      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>


      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>
      <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
   );
}