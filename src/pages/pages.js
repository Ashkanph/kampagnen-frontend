import { Switch, Route } from "react-router-dom";

import Home from "./home";
import PageNotFound from "./pageNotFound";

function Pages(props) {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    );
}

export default Pages;
