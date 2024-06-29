import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {WelcomePage} from "./pages/WelcomePage"; 
import {SignUpPhase} from "./pages/SignUpPhase"; 
import {LoginPhase} from "./pages/LoginPhase"; 
import {WorkspacePhase} from "./pages/WorkspacePhase"; 
import { useRoutes } from "react-router-dom";
import {LoginPhase1} from "./pages/LoginPhase1";

const ProjectRoutes = () => { 
    let element = useRoutes([
        { path: "/", element: <WelcomePage/> },
        // { path: "/", element: <Home/> },
        {path: "*",element: <NotFound /> },
        {
        path: "welcomepage",
        element: <WelcomePage/>,
        },
        {
        path: "signupphase",
        element: <SignUpPhase />,
        },
        {
        path: "loginphase",
        element: <LoginPhase />,
        },
        {
        path: "workspacephase",
        element: <WorkspacePhase />,
        },
        {
        path: "loginphase1",
        element: <LoginPhase1 />,
        },
        ]);
return element;
};
export default ProjectRoutes;