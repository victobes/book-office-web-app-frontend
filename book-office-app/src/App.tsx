import './App.css'
import { AppRoutes } from "./Routes"
import { useDispatch } from "./core/store";
import { saveUser } from "./core/store/slices/userSlice.ts";

function App() {
  const dispatch = useDispatch();

  dispatch(
    saveUser({
      username: "",
      isAuth: false,
    })
  );

  return (
    <AppRoutes />
  )
}

export default App
