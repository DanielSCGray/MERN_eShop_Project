import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
    return (
        <div className="App">
            <h1>Title</h1>

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/subjectnames/:id' element={<DisplaySubjectname />} />
                <Route path='/edit/:id' element={<EditSubjectname />} />
            </Routes>

        </div>
    );
}

export default App;
