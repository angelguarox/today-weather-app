import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './Footer.styles.js';

export default function Footer({ isWeatherScreen }) {
	return (
		<View style={styles.footerContainer}>
			<View style={styles.unitsContainer}>
				{isWeatherScreen && (
					<>
						<TouchableOpacity
							style={[
								styles.unitsButton,
								styles.celciusButton,
								styles.isActiveButton,
							]}
						>
							<Text
								style={[
									styles.buttonText,
									styles.celciusText,
									styles.isActiveText,
								]}
							>
								°C
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[styles.unitsButton, styles.fahrenheitButton]}
						>
							<Text style={[styles.buttonText, styles.fahrenheitText]}>°F</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.unitsButton, styles.kelvinButton]}>
							<Text style={[styles.buttonText, styles.kelvinText]}>°K</Text>
						</TouchableOpacity>
					</>
				)}
			</View>
			<View style={styles.settingsContainer}>
				<TouchableOpacity style={styles.themeButton}>
					<Icon name='moon-waning-crescent' color='#ea6a4b' size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.networkButton}>
					<Icon name='wifi-check' color='#00b894' size={22} />
				</TouchableOpacity>
			</View>
		</View>
	);
}
