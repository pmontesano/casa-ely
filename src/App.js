import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Title from './components/Title';
import './App.css';

class App extends Component {
  state = {
    productos: [
      { name: 'Producto 1', price: 1500, img: '/img/1.jpeg' },
      { name: 'Producto 2', price: 2500, img: '/img/2.jpeg' },
      { name: 'Producto 3', price: 500, img: '/img/3.jpeg' },
      { name: 'Producto 4', price: 1500, img: '/img/4.jpeg' },
      { name: 'Producto 5', price: 2500, img: '/img/5.jpeg' },
      { name: 'Producto 6', price: 500, img: '/img/6.jpeg' },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    console.log(producto);
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;

    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
