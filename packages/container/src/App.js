import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import MarketingApp from "../component/MarketingApp";

export default () => {
    return <div>
       <MarketingApp />
    </div>
}