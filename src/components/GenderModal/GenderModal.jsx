import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './GenderModal.styles';

export default function GenderModal({
	visible,
	onSelect,
	onClose,
	selectedGender,
}) {
	const [selectedOption, setSelectedOption] = useState(selectedGender);

	const handleSelect = (option) => {
		setSelectedOption(option);
		onSelect(option);
	};

	return (
		<Modal
			visible={visible}
			transparent={true}
			animationType='fade'
			onRequestClose={() => onClose()}
		>
			<View style={styles.modalContainer}>
				<View style={styles.modalContent}>
					<View style={styles.optionContainer}>
						{['Masculino', 'Femenino', 'Otros'].map((option) => (
							<TouchableOpacity
								key={option}
								onPress={() => handleSelect(option)}
								style={[
									styles.option,
									selectedOption === option && styles.selectedOption,
								]}
							>
								<Text style={styles.optionText}>{option}</Text>
								{selectedOption === option && (
									<Icon name='check' size={20} color='#000' />
								)}
							</TouchableOpacity>
						))}
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.cancelButton} onPress={onClose}>
							<Text style={styles.closeText}>Cerrar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
}
