import React from 'react';
import { Button } from 'react-native';
import { useCustomButton } from './CustomButton.hook';

export interface CustomButtonProps {
    onPress: () => any;
    title: string;
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
    const h = useCustomButton(props);
    return <Button title={h.title} onPress={h.onPress} color={'#dddddd'} />;
};
