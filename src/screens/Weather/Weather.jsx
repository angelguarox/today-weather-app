import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { AppContext } from '../../context/AppContext.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import CustomSearch from '../../components/CustomSearch/CustomSearch.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import WeatherItem from './WeatherItem.jsx';
import styles from './Weather.styles.js';

export default function Weather() {
	const { personalInfo, lastWeather } = useContext(AppContext);
	const { fullName, gender } = personalInfo;

	let greetingGender;
	if (gender === 'Masculino') {
		greetingGender = 'Bienvenido';
	} else if (gender === 'Femenino') {
		greetingGender = 'Bienvenida';
	} else {
		greetingGender = 'Bienvenid@';
	}

	return (
		<>
			<View style={styles.mainCard}>
				<View style={styles.logoMain}>
					<Logo
						widthContainer={200}
						heightContainer={70}
						widthImage={200}
						heightImage={50}
					/>
				</View>
				<View style={styles.greetingMain}>
					<Text style={styles.greetingMainText}>
						{`${greetingGender}, ${fullName}`}
					</Text>
				</View>
				<View style={styles.instructionsMain}>
					<Text style={styles.instructionsMainText}>
						Ingresa el nombre de un lugar de acuerdo a zonas y localidades de un
						estado y/o país, presiona Buscar y elige unos de los resultados
						mostrados que coincida con tu búsqueda.
					</Text>
				</View>
				<View style={styles.formMain}>
					<CustomSearch />
				</View>
			</View>
			<View style={styles.weatherCards}>
				{lastWeather === null ? (
					<Text style={styles.noResults}>No hay lugar almacenado</Text>
				) : (
					<WeatherItem />
				)}
			</View>
			<Footer isWeatherScreen={true} />
		</>
	);
}
