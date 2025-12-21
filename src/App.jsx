import { useContext, useEffect } from 'react';
import { DataContext } from './components/DataProvider/DataProvider';
import Routing from './Routing';
import { Type } from './utility/action.type';
import { auth } from './Utility/firebase';
function App() {
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}
export default App;
