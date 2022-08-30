import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/pages/home';


export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      </SafeAreaView>
      <Home />
    </>
  );
}