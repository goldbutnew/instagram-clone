/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry: 앱 running을 위한 entry 포인트
// 최상위 컴포넌트인 App.js를 진입점에 등록
AppRegistry.registerComponent(appName, () => App);
 