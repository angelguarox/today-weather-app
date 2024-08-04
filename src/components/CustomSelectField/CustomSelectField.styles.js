import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: moderateScale(42),
		paddingLeft: moderateScale(40),
	},
	text: {
		fontFamily: 'Inter-Medium',
	},
	leftIcon: {
		position: 'absolute',
		left: scale(10),
	},
	rightIcon: {
		position: 'absolute',
		right: scale(10),
	},
	borderErrorInput: {
		borderColor: '#d63031',
	},
	errorText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(10, 0.3),
		color: '#d63031',
	},
});

export default styles;
