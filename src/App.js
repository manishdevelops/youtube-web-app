import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Head from './Components/Head';
import Body from './Components/Body';
import store from './utils/store';
import MainContainer from './Components/MainContainer';
const WatchPage = React.lazy(() => import('./Components/WatchPage'));

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
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<WatchPage />
					</Suspense>
				),
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
