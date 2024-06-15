import './App.css';
import { useEffect } from 'react';
//import { getAllAvailableRooms } from './services/rooms';
import { useSelector } from 'react-redux';
import { useThunk } from './hooks/useThunk';
import { createUserThunk } from './store';

function App() {
  const state = useSelector((state) => state);
  console.log(state, 'state');
  const { runThunk: doFetchUsers } = useThunk(createUserThunk);

  const createUser = async () => {
    doFetchUsers(undefined);
  };

  useEffect(() => {
    void createUser();
  }, []);
  return (
    <div>
      {state.user.data.id}/{state.user.data.name}
    </div>
  );
}

export default App;
