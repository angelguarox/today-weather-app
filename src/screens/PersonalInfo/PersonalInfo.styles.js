import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scroll: {
		flex: 1,
	},
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		paddingBottom: moderateScale(100),
	},
	card: {
		width: '95%',
		justifyContent: 'center',
		backgroundColor: '#fff',
		paddingVertical: moderateScale(15),
		paddingHorizontal: moderateScale(15),
		borderRadius: moderateScale(5),
	},
	greeting: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	greetingText: {
		fontFamily: 'Inter-Black',
		fontSize: moderateScale(25, 0.3),
	},
	instruction: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	instructionText: {
		fontFamily: 'Inter-Regular',
		fontSize: moderateScale(12, 0.3),
	},
	form: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		gap: moderateScale(20),
		paddingVertical: moderateScale(20),
	},
	saveButton: {
		width: moderateScale(120),
		height: moderateScale(35),
		flexDirection: 'row',
		backgroundColor: '#ea6a4b',
		justifyContent: 'center',
		alignItems: 'center',
		gap: moderateScale(10),
		borderRadius: moderateScale(5),
	},
	saveButtonText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(16, 0.3),
		color: '#fff',
	},
});

export default styles;
