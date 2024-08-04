import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		width: '90%',
		paddingHorizontal: moderateScale(15),
		paddingVertical: moderateScale(20),
		backgroundColor: '#fff',
		gap: moderateScale(20),
		borderRadius: moderateScale(5),
	},
	optionContainer: {
		justifyContent: 'center',
		gap: moderateScale(2),
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: moderateScale(8),
		borderRadius: moderateScale(5),
	},
	selectedOption: {
		backgroundColor: '#ea6a4b33',
	},
	optionText: {
		fontFamily: 'Inter-Regular',
		fontSize: moderateScale(16, 0.3),
		color: '#000',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	cancelButton: {
		width: moderateScale(70),
		height: moderateScale(30),
		backgroundColor: '#ea6a4b',
		borderRadius: moderateScale(5),
		justifyContent: 'center',
		alignItems: 'center',
	},
	closeText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(16, 0.3),
		color: '#fff',
	},
});

export default styles;
