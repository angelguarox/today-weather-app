import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	mainCard: {
		paddingBottom: moderateScale(8),
		backgroundColor: '#fff',
	},
	logoMain: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	greetingMain: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: moderateScale(10),
		paddingBottom: moderateScale(8),
	},
	greetingMainText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(16, 0.3),
	},
	instructionsMain: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: moderateScale(10),
		paddingBottom: moderateScale(8),
	},
	instructionsMainText: {
		fontFamily: 'Inter-Regular',
		fontSize: moderateScale(10, 0.3),
	},
	formMain: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingHorizontal: moderateScale(10),
		paddingBottom: moderateScale(8),
	},
	weatherCards: {
		width: '100%',
		height: '64%',
		alignItems: 'center',
		paddingVertical: moderateScale(15),
		gap: moderateScale(15),
		zIndex: -11,
	},
	noResults: {
		fontFamily: 'Inter-SemiBold',
		fontSize: moderateScale(14, 0.3),
		textAlign: 'center',
		color: '#ea6a4b',
	},
});

export default styles;
