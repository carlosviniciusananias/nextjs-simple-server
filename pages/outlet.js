import Link from 'next/link'

function Outlet() {
    return (
        <ul>
            <li>
                <Link href="/">
                <a>Voltar p/ home</a>
                </Link>
            </li>
         </ul>
    )
  }
  
  export default Outlet