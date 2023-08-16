import "./styles/App.css";
import Home from "./pages/home/Home.tsx";
import Settings from "./pages/settings/Settings.tsx";
import NoMatch from "./pages/noMatch/NoMatch.tsx";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            {
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />}></Route>
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            }
        </>
    );
}

export default App;
