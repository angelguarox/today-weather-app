import React, { useState, useContext } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	ActivityIndicator,
} from 'react-native';
import Emoji from 'react-native-emoji';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import Logo from '../../components/Logo/Logo.jsx';
import { AppContext } from '../../context/AppContext.jsx';
import CustomInputField from '../../components/CustomInputField/CustomInputField.jsx';
import CustomSelectField from '../../components/CustomSelectField/CustomSelectField.jsx';
import GenderModal from '../../components/GenderModal/GenderModal.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import validationSchema from '../../utils/formValidation.js';
import styles from './PersonalInfo.styles.js';

const initialValues = {
	fullName: '',
	gender: '',
};

export default function PersonalInfo({ navigation }) {
	const [isFocused, setIsFocused] = useState({});
	const [formData, setFormData] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const { savePersonalInfo } = useContext(AppContext);

	const handleSave = () => {
		const personalInfo = {
			fullName: formData.fullName,
			gender: formData.gender,
		};
		savePersonalInfo(personalInfo);
		navigation.replace('Weather');
	};

	const handleSubmit = async () => {
		setIsLoading(true);
		try {
			await validationSchema.validate(formData, { abortEarly: false });
			setErrors({});
			handleSave();
			Toast.show({
				type: 'success',
				text1: 'Satisfactorio',
				text2: 'Datos guardados exitosamente',
				position: 'top',
			});
			setIsLoading(false);
		} catch (err) {
			setIsLoading(false);
			if (err.inner) {
				const newErrors = {};
				err.inner.forEach((error) => {
					newErrors[error.path] = error.message;
				});
				setErrors(newErrors);
			}
			Toast.show({
				type: 'error',
				text1: 'Fallido',
				text2: 'Debes proporcionar la información',
				position: 'top',
			});
		}
	};

	const handleInputChange = async (name, value) => {
		setFormData({ ...formData, [name]: value });
		try {
			await validationSchema.validateAt(name, { [name]: value });
			setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
		} catch (err) {
			setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
		}
	};

	const handleFocus = async (name) => {
		setIsFocused({ ...isFocused, [name]: true });
	};

	const handleBlur = async (name) => {
		setIsFocused({ ...isFocused, [name]: false });
	};

	const handleActionIcon = (name) => {
		setFormData({ ...formData, [name]: '' });
	};

	const toggleModal = () => {
		setIsModalVisible(true);
	};

	const handleGenderSelect = (value) => {
		handleInputChange('gender', value);
		setIsModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scroll} contentContainerStyle={styles.wrapper}>
				<Logo
					widthContainer='100%'
					heightContainer={250}
					widthImage={300}
					heightImage={100}
				/>
				<View style={styles.card}>
					<View style={styles.greeting}>
						<Text style={styles.greetingText}>Hola! </Text>
						<Emoji name='wave' style={{ fontSize: 20 }} />
					</View>
					<View style={styles.instruction}>
						<Text style={styles.instructionText}>
							Para conocer más de ti, llena el siguiente formulario. Todos los
							campos son obligatorios.
						</Text>
					</View>
					<View style={styles.form}>
						<CustomInputField
							iconInput='account'
							iconClear='backspace'
							value={formData.fullName}
							onChangeText={(value) => handleInputChange('fullName', value)}
							onFocus={() => handleFocus('fullName')}
							onBlur={() => handleBlur('fullName')}
							placeholder='Nombre y Apellido'
							isFocused={isFocused.fullName}
							focusedColor='#ea6a4b'
							inputFontSize={14}
							inputHeight={35}
							inputBorderWidth={1}
							inputBorderRadius={5}
							hasError={errors.fullName}
							errorMessage={errors.fullName}
							handleActionIcon={() => handleActionIcon('fullName')}
						/>
						<CustomSelectField
							iconInput='gender-male-female'
							iconClear='chevron-down'
							value={formData.gender}
							onPress={toggleModal}
							visible={isModalVisible}
							placeholder='Género'
							focusedColor='#ea6a4b'
							selectFontSize={14}
							selectHeight={35}
							selectBorderWidth={1}
							selectBorderRadius={5}
							hasError={errors.gender}
							errorMessage={errors.gender}
						/>
						<TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
							{isLoading ? (
								<ActivityIndicator size='small' color='#fff' />
							) : (
								<>
									<Text style={styles.saveButtonText}>Guardar</Text>
									<Icon name='arrow-right' size={18} color='#fff' />
								</>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<GenderModal
				visible={isModalVisible}
				onSelect={handleGenderSelect}
				onClose={() => setIsModalVisible(false)}
				selectedGender={formData.gender}
			/>
			<Footer isWeatherScreen={false} />
		</View>
	);
}
