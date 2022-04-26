import React from "react";
import Homepage from "./pages/Homepage/Homepage";
import Moviepage from "./pages/Moviepage/Moviepage";

const routes =  [
    {
        path:'/',
        exact : true,
        main: () => <Homepage/>
    },
    {
        path:'',
        exact :false,
        main: ()=> <Moviepage/>
    }
];

export default routes;
