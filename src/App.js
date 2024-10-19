import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useRoutesCustom from './routes/useRoutesCustom'
import './index.css';

function App() {
const routes = useRoutesCustom()

  return routes
}

export default App
