import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Homepage from './pages/Homepage';
import Agency from './pages/Agency';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Fragment>
          <Route exact path="/newsportal/" element={<Homepage />} />
          <Route exact path="/newsportal/agency/:name" element={<Agency />} />
        </Fragment>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
