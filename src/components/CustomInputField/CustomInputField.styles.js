import { StyleSheet } from 'react-native';
import { scale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		borderStyle: 'solid',
		borderColor: '#dedee0',
	},
	input: {
		width: '100%',
		height: moderateScale(42),
		paddingLeft: moderateScale(40),
		paddingRight: moderateScale(40),
		fontFamily: 'Inter-Medium',
	},
	iconInput: {
		position: 'absolute',
		left: scale(10),
	},
	iconClearInput: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		width: moderateScale(35),
		height: moderateScale(35),
		right: scale(4),
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
