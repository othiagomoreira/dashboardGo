import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { resolveNaptr } from 'dns/promises';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        focusBorderColor="pink.500"
        {...rest}
      />
    </FormControl>
  );
};
