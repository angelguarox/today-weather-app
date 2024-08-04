import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';
import styles from './CustomInputField.styles.js';

export default function CustomInputField({
	iconInput,
	iconClear,
	value,
	onChangeText,
	onPress,
	onFocus,
	onBlur,
	placeholder,
	isFocused,
	focusedColor,
	inputFontSize,
	inputHeight,
	inputBorderWidth,
	inputBorderRadius,
	hasError,
	errorMessage,
	handleActionIcon,
}) {
	const handleIconClearPress = () => {
		handleActionIcon();
	};

	return (
		<>
			<View
				style={[
					styles.inputContainer,
					{
						height: moderateScale(inputHeight),
						borderWidth: moderateScale(inputBorderWidth),
						borderRadius: moderateScale(inputBorderRadius),
					},
					isFocused && { borderColor: focusedColor },
					hasError && styles.borderErrorInput,
				]}
			>
				<Icon
					name={iconInput}
					size={20}
					color={isFocused ? focusedColor : '#dedee0'}
					style={styles.iconInput}
				/>
				<TextInput
					style={[
						styles.input,
						{ fontSize: moderateScale(inputFontSize, 0.3) },
					]}
					value={value}
					onChangeText={onChangeText}
					onPress={onPress}
					onFocus={onFocus}
					onBlur={onBlur}
					placeholder={placeholder}
					placeholderTextColor='#dedee0'
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<TouchableOpacity
					onPress={handleIconClearPress}
					style={styles.iconClearInput}
				>
					<Icon
						name={iconClear}
						size={18}
						color={isFocused ? focusedColor : '#dedee0'}
					/>
				</TouchableOpacity>
			</View>
			{hasError && <Text style={styles.errorText}>{errorMessage}</Text>}
		</>
	);
}
