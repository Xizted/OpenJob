import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppJobs from './src/AppJobs';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AppJobs />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
