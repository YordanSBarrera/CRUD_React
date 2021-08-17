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
    // console.log(this.state.form);
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
    //console.log(e.target.value);
  };
  cerrarModal = () => {
    this.setState({ modalInsertar: false });
  };
  insertar = () => {
    console.log(this.state.form);
    var ValorNuevo = { ...this.state.form };
    ValorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(ValorNuevo);
    this.setState({ data: lista });
    this.cerrarModal();
  };

  render() {
    return (
      <div>
        <Container>
          <Button
            color="success"
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
              <input
                className="form-control"
                type="text"
                name="anime"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.insertar} color="primary">
              Agregar
            </Button>
            <Button onClick={this.cerrarModal} color="danger">
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
