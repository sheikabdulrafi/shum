import "./Styles/styles.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
export default App;