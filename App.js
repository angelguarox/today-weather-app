/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import MainNavigator from './src/MainNavigator.jsx';
import { AppProvider } from './src/context/AppContext.jsx';
import { toastConfig } from './src/utils/toastConfig.jsx';
import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontsError] = useFonts({
		'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
		'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
		'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
		'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
		'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
		'Inter-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
	});

	useEffect(() => {
		const hideSplashScreen = async () => {
			if (fontsLoaded || fontsError) {
				await SplashScreen.hideAsync();
			}
		};
		hideSplashScreen();
	}, [fontsLoaded, fontsError]);

	if (!fontsLoaded && !fontsError) {
		return null;
	}

	return (
		<AppProvider>
			<NavigationContainer>
				<StatusBar backgroundColor='#fff' barStyle='dark-content' />
				<MainNavigator />
			</NavigationContainer>
			<Toast config={toastConfig} />
		</AppProvider>
	);
}
