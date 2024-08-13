import React, { useState, useEffect } from 'react';
import {
	View,
	FlatList,
	Text,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import CustomInputField from '../CustomInputField/CustomInputField.jsx';

export default function SearchComponent() {
	const [searchText, setSearchText] = useState('');
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	const fetchData = async (query) => {
		if (query === '') {
			setResults([]);
			return;
		}
		setLoading(true);
		const formattedQuery = query.split(' ').join('+');
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${formattedQuery}&format=jsonv2&limit=10`,
			);
			const data = await response.json();
			setResults(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			fetchData(searchText);
		}, 300);
		return () => clearTimeout(delayDebounceFn);
	}, [searchText]);

	return (
		<View>
			<CustomInputField
				iconInput='map-search'
				iconClear='backspace'
				value={searchText}
				onChangeText={setSearchText}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				placeholder='Buscar...'
				isFocused={isFocused}
				focusedColor='#ea6a4b'
				inputFontSize={14}
				inputHeight={35}
				inputBorderWidth={1}
				inputBorderRadius={5}
				hasError={false}
				errorMessage=''
				handleActionIcon={() => setSearchText('')}
			/>
			{isFocused && (
				<View style={styles.resultsContainer}>
					{loading ? (
						<ActivityIndicator size='large' color='#ea6a4b' />
					) : (
						<FlatList
							data={results}
							keyExtractor={(item, index) => item.place_id.toString() + index}
							renderItem={({ item }) => (
								<Text
									numberOfLines={1}
									ellipsizeMode='tail'
									style={styles.resultItem}
								>
									{item.display_name}
								</Text>
							)}
							ListEmptyComponent={
								<Text style={styles.noResults}>
									No se encontraron resultados
								</Text>
							}
							contentContainerStyle={styles.flatListContent}
							scrollEnabled={true}
							keyboardShouldPersistTaps='handled'
							onEndReachedThreshold={0.1}
						/>
					)}
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	resultsContainer: {
		width: '100%',
		position: 'absolute',
		top: 35,
		left: 0,
		right: 0,
		backgroundColor: '#fff',
		borderColor: '#ea6a4b',
		borderWidth: 1,
		borderRadius: 8,
	},
	resultItem: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	noResults: {
		fontFamily: 'Inter-SemiBold',
		fontSize: moderateScale(14, 0.3),
		padding: 10,
		textAlign: 'center',
		color: 'gray',
	},
});
