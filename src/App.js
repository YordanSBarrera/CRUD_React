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
  state = {
    data: data,
    form: {
      id: "",
      personaje: "",
      anime: "",
    },
    modalInsertar: false,
  };
  handleChange = (e) => {
    this.setState({
      ...this.state.form,
      [e.target.name]: e.target.value,
    });
  };
  cerrarModal = () => {
    this.setState({ modalInsertar: false });
  };

  render() {
    return (
      <div>
        <Container>
          <Button
            color="primary"
            onClick={() => {
              this.setState({ modalInsertar: true });
            }}
          >
            Insertar Nuevo Personaje
          </Button>

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
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Registro</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>ID:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
                name="id"
              />
            </FormGroup>
            <FormGroup>
              <label>Personaje:</label>
              <input
                className="form-control"
                onChange={this.handleChange}
                type="text"
                name="personaje"
              />
            </FormGroup>
            <FormGroup>
              <label>Anime:</label>
              <input className="form-control" type="text" name="anime" on />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.cerrarModal}>Agregar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
