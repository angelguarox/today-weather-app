import React from 'react';
import { View, Image } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import styles from './Logo.styles';

export default function Logo({
	widthContainer,
	heightContainer,
	widthImage,
	heightImage,
}) {
	return (
		<View
			style={[
				styles.logoWrapper,
				{
					width: widthContainer,
					height: verticalScale(heightContainer),
				},
			]}
		>
			<Image
				source={require('../../../assets/logo.png')}
				style={[
					styles.logo,
					{
						width: moderateScale(widthImage),
						height: moderateScale(heightImage),
					},
				]}
			/>
		</View>
	);
}
