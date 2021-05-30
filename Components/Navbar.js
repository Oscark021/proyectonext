import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <Link href="/"><a>Inicio |</a></Link>
            <Link href="/matery"><a> Materias |</a></Link>
            <Link href="/horary"><a> Horarios |</a></Link>
            <Link href="/didactic"><a>Material didactico |</a></Link>
            <Link href="/login"><a>Iniciar sesion</a></Link>
        </nav>
    );
    
}


export default Navbar;