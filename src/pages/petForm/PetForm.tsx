import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { usePetForm } from './PetForm.hook';
import style from './PetForm.style';
import { CustomButton } from '../../shared/components/customButton/CustomButton';
import { Formik } from 'formik';

/**
 * REMARKS :
 - A page is not included in a component => a page should not have props
 - No logic in this file: only JSX !
 - All the logic is placed in the .hook file
 - The JSX itself does not contain any logic
 **/
export const PetForm: React.FC = () => {
    const h = usePetForm();
    return (
        <View style={style.container}>
            <Text>{h.title}</Text>
            <Formik
                enableReinitialize
                validateOnMount
                initialValues={h.initialValues}
                onSubmit={h.onSubmit}
                validationSchema={h.petFormSchema()}>
                {({
                    values,
                    setFieldValue,
                    handleChange,
                    handleSubmit,
                    touched,
                    errors,
                    handleBlur,
                    isValid,
                }) => (
                    <View>
                        <TextInput
                            placeholder={h.name}
                            value={values.name}
                            setValue={handleChange('name')}
                            onBlur={handleBlur('name')}
                            error={errors.name && touched.name ? errors.name : undefined}
                        />
                        <CustomButton
                            title={h.submitButtonText}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
};
