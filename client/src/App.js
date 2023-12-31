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
            <h1>Crazy Jane's BBQ Emporium</h1>
            <h3>Grilling done well prevents grilling well done!</h3>

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

/*
user tom _id : 650dbaff8328c33771e6c625
*/
