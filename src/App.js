import { Provider } from 'react-redux';
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <MainContainer />,
			},
			{
				path: 'watch',
				element: <WatchPage />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<div>
				<Head />
				<RouterProvider router={appRouter}>
					<Body />
				</RouterProvider>
			</div>
		</Provider>
	);
}

export default App;

// Head
// Body
//   sidebar
//     menuItems
//   mainContainer
//     ButtonsList
//     VideoContainer
//       VideoCard
