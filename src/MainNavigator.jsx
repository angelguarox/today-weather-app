import React, { useContext } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppContext } from './context/AppContext.jsx';
import PersonalInfo from './screens/PersonalInfo.jsx';
import Weather from './screens/Weather.jsx';

const Stack = createStackNavigator();

export default function MainNavigator() {
	const { personalInfo, isLoading } = useContext(AppContext);
	const isFirstLaunch = personalInfo === null;

	if (isLoading) {
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
