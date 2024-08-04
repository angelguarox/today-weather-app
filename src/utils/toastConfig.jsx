import { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message';
import { moderateScale } from 'react-native-size-matters';

export const toastConfig = {
	success: (props) => (
		<BaseToast
			{...props}
			style={{ borderLeftColor: '#03a6a6' }}
			contentContainerStyle={{
				backgroundColor: '#fff',
				borderStyle: 'solid',
				borderWidth: 0.5,
				borderColor: '#03a6a6',
				borderTopRightRadius: 4,
				borderBottomRightRadius: 4,
			}}
			text1Style={{
				fontFamily: 'Inter-Bold',
				fontSize: moderateScale(12, 0.3),
				color: '#03a6a6',
			}}
			text2Style={{
				fontFamily: 'Inter-Regular',
				fontSize: moderateScale(12, 0.3),
				color: '#000',
			}}
		/>
	),
	error: (props) => (
		<ErrorToast
			{...props}
			style={{ borderLeftColor: '#d63031' }}
			contentContainerStyle={{
				backgroundColor: '#fff',
				borderStyle: 'solid',
				borderWidth: 0.5,
				borderColor: '#d63031',
				borderTopRightRadius: 4,
				borderBottomRightRadius: 4,
			}}
			text1Style={{
				fontFamily: 'Inter-Bold',
				fontSize: moderateScale(12, 0.3),
				color: '#d63031',
			}}
			text2Style={{
				fontFamily: 'Inter-Regular',
				fontSize: moderateScale(12, 0.3),
				color: '#000',
			}}
		/>
	),
	info: (props) => (
		<InfoToast
			{...props}
			style={{ borderLeftColor: '#0984e3' }}
			contentContainerStyle={{
				backgroundColor: '#fff',
				borderStyle: 'solid',
				borderWidth: 0.5,
				borderColor: '#0984e3',
				borderTopRightRadius: 4,
				borderBottomRightRadius: 4,
			}}
			text1Style={{
				fontFamily: 'Inter-Bold',
				fontSize: moderateScale(12, 0.3),
				color: '#0984e3',
			}}
			text2Style={{
				fontFamily: 'Inter-Regular',
				fontSize: moderateScale(12, 0.3),
				color: '#000',
			}}
		/>
	),
};
