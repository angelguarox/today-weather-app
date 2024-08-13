import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
	placeInfoCard: {
		width: '95%',
		padding: moderateScale(10),
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	placeInfoName: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: moderateScale(4),
	},
	placeInfoNameText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(13, 0.3),
	},
	placeInfoDirection: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: moderateScale(4),
	},
	placeInfoDirectionText: {
		fontFamily: 'Inter-Regular',
		fontSize: moderateScale(10, 0.3),
		paddingBottom: moderateScale(5),
	},
	placeInfoDetails: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	placeInfoFlag: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	placeInfoMoreData: {
		width: '70%',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	doubleItems: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	cardSubtitleText: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(10, 0.3),
	},
	cardContentText: {
		fontFamily: 'Inter-Regular',
		fontSize: moderateScale(10, 0.3),
	},
	todayWeatherCard: {
		width: '95%',
		padding: moderateScale(10),
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
	},
	todayWeatherDetails: {
		width: '60%',
		justifyContent: 'center',
	},
	todayWeatherIcon: {
		width: '40%',
		alignItems: 'center',
	},
	todayWeatherDetailsTemp: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: moderateScale(5),
	},
	todayWeatherDetailsTempText: {
		fontFamily: 'Inter-Black',
		fontSize: moderateScale(26, 0.3),
		color: '#ea6a4b',
	},
	doubleItemsWeather: {
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	cardSubtitleTextWeather: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(14, 0.3),
	},
	cardContentTextWeather: {
		fontFamily: 'Inter-Regular',
		fontSize: moderateScale(14, 0.3),
	},
	todayWeatherDetailsMore: {
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	todayWeatherIconDescription: {
		fontFamily: 'Inter-Bold',
		fontSize: moderateScale(18, 0.3),
		textAlign: 'center',
	},
	todayWeatherIconImg: {
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default styles;
