import AppProvider from './context/AppProvider';
import AppContainer from './components/navigation';

const AppJobs = () => {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
};

export default AppJobs;
