import { useNavigate } from 'react-router-dom'

import { } from '../services/firebase';

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';

import '../styles/auth.css';
import { Button } from '../components/Button';


function Home() {

  const navigate = useNavigate();

  function handlerCreateRoom() {

    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);

      navigate('/newroom')
    }).catch((error) => {

    });

    navigate('/newroom')
  }

  return (
    <div id='page-auth'>

      <aside>
        <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo real</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt="logomarca" />
          <button onClick={handlerCreateRoom} className='create-room'>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className='separator'>Ou entre em uma sala</div>
          <form>
            <input type="text" name="" id="" placeholder='Digite o nome da sala' />
            <Button type='submit'>
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>

    </div>
  )
}

export default Home;