import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginV from './views/LoginV';
import Home from './views/Home';
import Shop from './views/Shop';
import ShoppingCart from './views/ShoppingCart';
import AddUser from './views/AddUser';
import AddGrill from './views/AddGrill';

function App() {
    return (
        <div className="App">
            <h1>Title</h1>

            <Routes>
                <Route path='/' element={<LoginV />} />
                <Route path='/home/:id' element={<Home />} />
                <Route path='/shop/:uId/:gId' element={<Shop />} />
                <Route path='/shoppingcart/:id' element={<ShoppingCart />} />
                <Route path='/adduser' element={<AddUser />} />
                <Route path='/addgrill' element={<AddGrill />} />
            </Routes>

        </div>
    );
}

export default App;
