import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Homepage from './pages/Homepage';
import Photographer from './pages/Photographer';
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
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/newsportal/" element={<Homepage />} />
          <Route exact path="/newsportal/photographer/:id" element={<Photographer />} />
        </Fragment>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
