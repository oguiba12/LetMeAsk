import { Link } from 'react-router-dom';

import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';

import '../styles/auth.css';
import { Button } from '../components/Button';


function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" name="" id="" placeholder='Nome da sala' />
            <Button type='submit'>
              Criar sala
            </Button>
          </form>
          <p className='link-room'>
            Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
          </p>
        </div>
      </main>

    </div>
  )
}

export default NewRoom;