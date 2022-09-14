import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Login } from '../pages/Login';
import { RecoveryPassword } from "../pages/RecoveryPassword";
import { SendEmail } from "../pages/SendEmail";
import { NewPassword } from "../pages/NewPassword";
import { MyAccount } from "../pages/MyAccount";
import { CreateAccount } from "../pages/CreateAccount";
import { Checkout } from "../pages/Checkout";
import { Orders } from "../pages/Orders";
import { NotFound } from "../pages/NotFound";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";
import '../styles/global.css';


const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider
            value={initialState}
        >
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route 
                            exact
                            path="/"
                            element={ <Home /> }
                        />
                        <Route
                            exact
                            path="/NewPassword"
                            element={ <NewPassword /> }
                        />
                        <Route 
                            exact
                            path="/RecoveryPassword"
                            element={ <RecoveryPassword /> }
                        />
                        <Route
                            path="*"
                            element={ <NotFound /> }
                        />
                        <Route
                            exact
                            path="/Login"
                            element={ <Login /> }
                        />
                        <Route
                            exact
                            path="/CreateAccount"
                            element={ <CreateAccount /> }
                        />
                        <Route 
                            exact
                            path="/Checkout"
                            element= { <Checkout /> }
                        />
                        <Route 
                            exact
                            path="/MyAccount"
                            element={ <MyAccount /> }
                        />
                        <Route
                            exact
                            path="/Orders"
                            element={ <Orders /> }
                        />
                        <Route 
                            exact
                            path="/SendEmail"
                            element={ <SendEmail /> }
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
       </AppContext.Provider>
    );
}

export { App };