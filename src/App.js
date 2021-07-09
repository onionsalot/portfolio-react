import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import IndexPage from './Pages/IndexPage/IndexPage'

export default function App() {
  return (
		<main className='App'>
				<Switch>
					<Route path='/'>
						<IndexPage />
					</Route>
					<Redirect to='/' />
				</Switch>
		</main>
  );
}