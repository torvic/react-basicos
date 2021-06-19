import { Link, Switch, Route, useRouteMatch, useParams } from "react-router-dom"

const Topic = () => {
	let {topic} = useParams();	

	return(
		<div>
			<h4>{topic}</h4>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere ex eligendi minus quod soluta dicta enim voluptates voluptatibus odio dignissimos sed, suscipit a aperiam molestiae porro, commodi debitis ea?</p>
		</div>
	)
}

const ReactTopics = () => {
	//let match = useRouteMatch();
	//console.log(match);
	/* 'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativas <Link> o <NavLink> */
	let {path, url} = useRouteMatch();
	return (
		<div>
			<h3>Temas de React</h3>
			<ul>
				<li>
					<Link to={`${url}/jsx`} >JSX</Link>
				</li>
				<li>
					<Link to={`${url}/props`} >Props</Link>
				</li>
				<li>
					<Link to={`${url}/estado`} >Estado</Link>
				</li>
				<li>
					<Link to={`${url}/componentes`} >Componentes</Link>
				</li>
			</ul>
			<Switch>
				<Route exact path={path} >
					<h4>Elige un tema de React</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iure soluta, recusandae molestiae placeat excepturi delectus impedit, dolorem quod, corporis debitis atque laborum nulla. Corporis laudantium dolore voluptates beatae eum!</p>
				</Route>
				<Route path={`${path}/:topic`} component={Topic} />
			</Switch>
		</div>
	)
}

export default ReactTopics
