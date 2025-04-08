import Image from "next/image";
import logo from '../../../public/assets/logo.png';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"


type NavbarProps = {
    name?: string;
    isLogged?: boolean;
}

export default function Navbar(props: NavbarProps){
  const { data: session, status } = useSession()

  // const handleLogin = () => {
  //   signIn('google').then(r => {
  //     console.log('r', r);
  //     window.location.href = '/dashboard';
  //   }).catch(err => {
  //     console.log(err);
  //     alert('Login failed');
  //   })
  // }

  return(
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black',
      position: 'absolute',
      width: 'calc(100vw - 40px)',
      padding: '20px',
      margin: 0,
      top: 0
    }}>
      <Link href='/'>
        <Image
          src={logo}
          alt='logo'
          style={{
              height: '20px',
              width: '150px',
          }} />
      </Link>
      { status === 'loading' ? <span style={{ color: 'white' }}>Loading...</span> : (session ? 
      <div style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <span>Signed in as {session?.user?.name} </span>        
        <Image src={session?.user?.image || ''} alt='Profile picture' width={50} height={50} style={{ borderRadius: '50%', margin: '0 15px'  }} />        
        <a href='#' onClick={() => signOut()}>Sign out</a>
      </div> : <button style={{
        backgroundColor: 'black',
        color: 'white',
        border: '1px solid white',
        borderRadius: '25px',
        padding: '10px 20px',
        cursor: 'pointer'
       }}
        onClick={() => signIn('google')}        
        >Login</button>) }      
    </div>
  )
}