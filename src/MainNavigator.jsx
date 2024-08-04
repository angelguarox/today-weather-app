import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PersonalInfo from './screens/PersonalInfo';
import Weather from './screens/Weather';

const Stack = createStackNavigator();

export default function MainNavigator() {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);

	useEffect(() => {
		const checkFirstLaunch = async () => {
			const storedPersonalInfo = await AsyncStorage.getItem('personalInfo');
			setIsFirstLaunch(storedPersonalInfo === null);
		};

		checkFirstLaunch();
	}, []);

	if (isFirstLaunch === null) {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicator size='large' color='#ea6e4b' />
			</View>
		);
	}

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{isFirstLaunch ? (
				<Stack.Screen name='PersonalInfo' component={PersonalInfo} />
			) : (
				<Stack.Screen name='Weather' component={Weather} />
			)}
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
