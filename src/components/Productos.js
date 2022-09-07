import { Component } from "react";
import Producto from './Producto.js'

const styles = {
    productos : {
        display: 'grid',
        gridTemplateColumns: '30% 30% 30%',

        justifyContent: 'space-between',
        width: '100%'
    }
}

class Productos extends Component{
    render(){
        const { productos, agregarAlCarro } = this.props
        return(
            <div style={styles.productos}>
                {productos.map(producto => 
                    <Producto 
                    agregarAlCarro= {agregarAlCarro}
                    key={producto.name}
                    producto={producto}
                    />
                )}
            </div>
        )
    }
}

export default Productos