import { Component } from "react";
import BubbleAlert from './BubbleAlert.js'
import DetallesCarro from './DetallesCarro.js'

const styles = {
    carro: {
        background: '#359a2c',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        curson: 'pointer',
        marginRight: '50px',
    },

    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    },
}

class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad} />
                        : null}

                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                { esCarroVisible ? <DetallesCarro carro={carro}/> : null}
            </div>
        )
    }
}

export default Carro