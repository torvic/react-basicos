import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenid@s al tema de las Rutas de React</p>
          </Route>
          <Route exact path="/acerca">
            <Acerca />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              consequuntur commodi, ut eaque asperiores officiis autem saepe
              voluptates necessitatibus nihil quae optio illo corporis assumenda
              harum ullam maxime eum ipsa!
            </p>
          </Route>
          {/* <Route exact path="/contacto" component={Contacto} /> */}
          <Route
            exact
            path="/contacto"
            children={
              <>
                <Contacto />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia voluptatem impedit commodi distinctio expedita culpa,
                  non natus minus temporibus repudiandae. Omnis magnam fuga
                  sequi ipsam, illum distinctio similique numquam?
                  Reprehenderit?
                </p>
              </>
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
