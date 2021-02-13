import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import { Home } from "./home";
import { Orchards } from "./orchards";
import { Connected } from "./connected";
import { Abundant } from "./abundant";
import { Healthful } from "./healthful";
import { Navbar } from "./_shared/Navbar";
import { Footer } from "./_shared/Footer";
// import Community from "./community";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={() => (
                            <ViewWrapper>
                                <Home />
                            </ViewWrapper>
                        )}
                    />
                    <Route
                        path="/orchards"
                        exact
                        component={() => (
                            <ViewWrapper>
                                <Orchards />
                            </ViewWrapper>
                        )}
                    />
                    <Route
                        path="/connected"
                        exact
                        component={() => (
                            <ViewWrapper>
                                <Connected />
                            </ViewWrapper>
                        )}
                    />
                    <Route
                        path="/abundant"
                        exact
                        component={() => (
                            <ViewWrapper>
                                <Abundant />
                            </ViewWrapper>
                        )}
                    />
                    <Route
                        path="/healthful"
                        exact
                        component={() => (
                            <ViewWrapper>
                                <Healthful />
                            </ViewWrapper>
                        )}
                    />
                    {/* <Route
                        path="/community"
                        exact
                        component={() => (
                            <ViewWrapper>
                                <Community />
                            </ViewWrapper>
                        )}
                    /> */}
                </Switch>
            </div>
        </Router>
    );
}

const ViewWrapper = ({ children }) => (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
);

export default App;
