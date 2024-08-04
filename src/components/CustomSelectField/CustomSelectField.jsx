import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';
import styles from './CustomSelectField.styles';

export default function CustomSelectField({
	iconInput,
	iconClear,
	value,
	onPress,
	placeholder,
	focusedColor,
	selectFontSize,
	selectHeight,
	selectBorderWidth,
	selectBorderRadius,
	visible,
	hasError,
	errorMessage,
}) {
	return (
		<>
			<TouchableOpacity
				onPress={onPress}
				style={[
					styles.container,
					{
						borderColor: visible ? focusedColor : '#dedee0',
						borderWidth: moderateScale(selectBorderWidth),
						borderRadius: moderateScale(selectBorderRadius),
						height: moderateScale(selectHeight),
					},
					hasError && styles.borderErrorInput,
				]}
			>
				<Icon
					name={iconInput}
					size={20}
					color={visible ? focusedColor : '#dedee0'}
					style={styles.leftIcon}
				/>
				<Text
					style={[
						styles.text,
						{
							fontSize: moderateScale(selectFontSize, 0.3),
							color: value ? '#000' : '#dedee0',
						},
					]}
				>
					{value || placeholder}
				</Text>
				<Icon
					name={iconClear}
					size={20}
					color={visible ? focusedColor : '#dedee0'}
					style={styles.rightIcon}
				/>
			</TouchableOpacity>
			{hasError && <Text style={styles.errorText}>{errorMessage}</Text>}
		</>
	);
}
