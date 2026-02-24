// Import shared theme configuration FIRST (initializes unistyles before any StyleSheet.create)
import '@chore-hub/shared/theme';

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
