import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
				<MenuConceptos/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
					<Route exact path="/about" >
						<Redirect to="/acerca" />
					</Route>
					<Route exact path="/contact" >
						<Redirect to="/contacto" />
					</Route>
          <Route path="/react" component={ReactTopics} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

/* const ConceptosBasicos = () => {
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
          <Route exact path="/contacto" component={Contacto} />
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
}; */

export default ConceptosBasicos;
