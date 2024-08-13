import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const logoImage = require('../../../assets/img/adaptive-icon.png');

export default function Loader() {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			]),
		).start();
	}, [fadeAnim]);

	return (
		<View style={styles.container}>
			<Animated.Image
				source={logoImage}
				style={[styles.logo, { opacity: fadeAnim }]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	logo: {
		width: moderateScale(450),
		height: moderateScale(450),
		resizeMode: 'contain',
	},
});
