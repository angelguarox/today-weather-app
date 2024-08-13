import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './WeatherItem.styles.js';

export default function WeatherItem() {
	return (
		<>
			<View style={styles.placeInfoCard}>
				<View style={styles.placeInfoName}>
					<Text style={styles.placeInfoNameText}>
						Carretera Panamericana Trujillo - Lara
					</Text>
				</View>
				<View style={styles.placeInfoDirection}>
					<Text style={styles.placeInfoDirectionText}>
						Carretera Panamericana Trujillo - Lara, Carora, Parroquia Trinidad
						Samuel, Municipio Torres, Lara, 3050, Venezuela.
					</Text>
				</View>
				<View style={styles.placeInfoDetails}>
					<View style={styles.placeInfoFlag}>
						<Image
							source={require('../../../assets/be_64.png')}
							alt='belgica_64'
							style={{
								width: 50,
								height: 30,
							}}
						/>
					</View>
					<View style={styles.placeInfoMoreData}>
						<View style={styles.doubleItems}>
							<Text style={styles.cardSubtitleText}>Ciudad: </Text>
							<Text
								style={styles.cardContentText}
								numberOfLines={1}
								ellipsizeMode='tail'
							>
								Carora
							</Text>
						</View>
						<View style={styles.doubleItems}>
							<Text style={styles.cardSubtitleText}>País: </Text>
							<Text
								style={styles.cardContentText}
								numberOfLines={1}
								ellipsizeMode='tail'
							>
								Venezuela
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.todayWeatherCard}>
				<View style={styles.todayWeatherDetails}>
					<View style={styles.todayWeatherDetailsTemp}>
						<Text style={styles.todayWeatherDetailsTempText}>31.47°C</Text>
					</View>
					<View style={styles.todayWeatherDetailsMore}>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>
								Sensación térmica:{' '}
							</Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>Temp. mínima: </Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>Temp. máxima: </Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>Presión: </Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>Humedad: </Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>
								Nivel del mar:{' '}
							</Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
						<View style={styles.doubleItemsWeather}>
							<Text style={styles.cardSubtitleTextWeather}>
								Velocidad del viento:{' '}
							</Text>
							<Text style={styles.cardContentTextWeather}>Carora</Text>
						</View>
					</View>
				</View>
				<View style={styles.todayWeatherIcon}>
					<Text style={styles.todayWeatherIconDescription}>
						Nubes cubiertas
					</Text>
					<View style={styles.todayWeatherIconImg}>
						<Image
							src={'https://openweathermap.org/img/wn/10d@2x.png'}
							alt='belgica_64'
							style={{
								width: 110,
								height: 90,
								resizeMode: 'cover',
							}}
						/>
					</View>
				</View>
			</View>
			<View style={styles.forecastWeatherCard}></View>
		</>
	);
}
