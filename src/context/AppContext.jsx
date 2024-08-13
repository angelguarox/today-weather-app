import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [personalInfo, setPersonalInfo] = useState(null);
	const [lastWeather, setLastWeather] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadPersonalInfo = async () => {
			const storedPersonalInfo = await AsyncStorage.getItem('personalInfo');
			if (storedPersonalInfo) {
				setPersonalInfo(JSON.parse(storedPersonalInfo));
			}
			setIsLoading(false);
		};

		const loadLastWeather = async () => {
			const storedWeather = await AsyncStorage.getItem('lastWeather');
			if (storedWeather) {
				setLastWeather(JSON.parse(storedWeather));
			}
		};

		loadPersonalInfo();
		loadLastWeather();
	}, []);

	const savePersonalInfo = async (info) => {
		setPersonalInfo(info);
		await AsyncStorage.setItem('personalInfo', JSON.stringify(info));
	};

	const saveLastWeather = async (weather) => {
		setLastWeather(weather);
		await AsyncStorage.setItem('lastWeather', JSON.stringify(weather));
	};

	return (
		<AppContext.Provider
			value={{
				personalInfo,
				lastWeather,
				savePersonalInfo,
				saveLastWeather,
				isLoading,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
