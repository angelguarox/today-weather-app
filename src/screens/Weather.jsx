import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Weather() {
	const { personalInfo } = useContext(AppContext);
	const { fullName, gender } = personalInfo;

	return (
		<>
			<View>
				<Text>{fullName}</Text>
				<Text>{gender}</Text>
			</View>
			<Footer isWeatherScreen={true} />
		</>
	);
}
