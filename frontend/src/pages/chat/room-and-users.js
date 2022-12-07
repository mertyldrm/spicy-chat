import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './chili-pepper.png'
import Button from '@mui/material/Button';

const RoomAndUsers = ({ socket, username, room }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    socket.on('chatroom_users', (data) => {
      console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off('chatroom_users');
  }, [socket]);

  const leaveRoom = () => {
    const __createdtime__ = Date.now();
    socket.emit('leave_room', { username, room, __createdtime__ });
    // Redirect to home page
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.roomAndUsersColumn}>
      <div className={styles.logoDiv}>
        <img src={logo} alt="logo" className={styles.logo} />
        <label className={styles.logoName}>Spicy Chat</label>
      </div>
      <div className={styles.logoDiv}>
        <h2 className={styles.roomTitle}>{room}</h2>
        <Button
          variant='contained'
          color='error'
          style={{ fontWeight: 'bold' }}
          onClick={leaveRoom}
        >
          Leave
        </Button>
      </div>

      <div>
        {roomUsers.length > 0 && <h5 className={styles.usersTitle}>Users:</h5>}
        <ul className={styles.usersList}>
          {roomUsers.map((user) => (
            <li
              style={{
                fontWeight: `${user.username === username ? 'bold' : 'normal'}`,
              }}
              key={user.id}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomAndUsers;
