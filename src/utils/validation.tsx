import * as yup from 'yup';

export const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Minimo de 6 caracteres'),
});

export const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Minimo de 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas não coincidem'),
});
