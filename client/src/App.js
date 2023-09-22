import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginV from './views/LoginV';

function App() {
    return (
        <div className="App">
            <h1>Title</h1>

            <Routes>
                <Route path='/' element={<LoginV />} />
                <Route path='/home/:id' element={<Home />} />
                <Route path='/shop/:uId/:gId' element={<Shop />} />
                <Route path='/shoppingcart/:id' element={<ShoppingCart />} />
            </Routes>

        </div>
    );
}

export default App;
