import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	fullName: Yup.string()
		.matches(
			/^[a-zA-Z\s]+$/,
			'Este campo no admite números y/o caracteres especiales',
		)
		.required('Este campo es requerido'),
	gender: Yup.string().required('Este campo es requerido'),
});

export default validationSchema;
