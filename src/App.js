import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, personaje: "Personaje A", anime: "Anime A" },
  { id: 2, personaje: "Personaje B", anime: "Anime B" },
  { id: 3, personaje: "Personaje C", anime: "Anime C" },
  { id: 4, personaje: "Personaje D", anime: "Anime D" },
  { id: 5, personaje: "Personaje F", anime: "Anime F" },
  { id: 6, personaje: "Personaje AFG", anime: "Anime AFG" },
];

class App extends React.Component {
  state = { data: data };

  render() {
    console.log(this.state.data);
    return (
      <div>
        Hola Yordan
        <br />
        <Container>
          <Button color="primary">Insertar Nuevo Personaje</Button>

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personaje</th>
                <th>Amime</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((elemento) => (
                <tr>
                  <th>{elemento.id}</th>
                  <th>{elemento.personaje}</th>
                  <th>{elemento.anime}</th>
                  <th>
                    <Button color="primary">Editar</Button>
                    {"  "}
                    <Button color="danger">Borrar</Button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
