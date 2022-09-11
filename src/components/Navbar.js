import { Component } from "react";
import Logo from './Logo.js'
import Carro from './Carro.js'

const styles = {
    navbar: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        boxShadow: '0 2px 4px rgb(0, 0, 0, 0.2)'
    },
    
}

class Navbar extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } = this.props
        return (
            <nav style={styles.navbar}>
                <Logo />

                <Carro 
                carro={carro} 
                esCarroVisible={esCarroVisible}
                mostrarCarro={mostrarCarro}
                />
            </nav>
        )
    }
}

export default Navbar;