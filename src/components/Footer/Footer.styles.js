import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	footerContainer: {
		width: '100%',
		height: '6%',
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		/* position: 'absolute',
		bottom: 0, */
	},
	unitsContainer: {
		width: '80%',
		height: '100%',
		paddingLeft: moderateScale(15),
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	unitsButton: {
		width: moderateScale(35),
		height: moderateScale(30),
		borderWidth: moderateScale(1),
		borderColor: '#ea6a4b',
		justifyContent: 'center',
		alignItems: 'center',
	},
	celciusButton: {
		borderTopLeftRadius: moderateScale(5),
		borderBottomLeftRadius: moderateScale(5),
	},
	fahrenheitButton: {
		borderLeftWidth: 0,
		borderRightWidth: 0,
	},
	kelvinButton: {
		borderTopRightRadius: moderateScale(5),
		borderBottomRightRadius: moderateScale(5),
	},
	buttonText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(14, 0.3),
		color: '#ea6a4b',
	},
	isActiveButton: {
		backgroundColor: '#ea6a4b',
	},
	isActiveText: {
		color: '#fff',
	},
	settingsContainer: {
		width: '20%',
		height: '100%',
		paddingRight: moderateScale(5),
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});

export default styles;
