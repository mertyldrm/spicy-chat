import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import logo from './chili-pepper.png'

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate(); // Add this

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }

    // Redirect to /chat
    navigate('/chat', { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logoDiv}>
          <img src={logo} alt="logo" className={styles.logo} />
          <label className={styles.logoName}>Spicy Chat</label>
        </div>
        <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <Button
          variant='contained'
          color='success'
          style={{ width: '100%', fontWeight: 'bold' }}
          onClick={joinRoom}
        >
          Join Room
        </Button>
      </div>
    </div>
  );
};

export default Home;
