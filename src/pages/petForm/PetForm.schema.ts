import i18n from '../../shared/i18n/i18n';
import * as Yup from 'yup';

export const getPetSchema = () => {
    const petSchema = Yup.object().shape({
        age: Yup.string().required(
            i18n.t('errors.required', { field: i18n.t('PetForm.fieldIsRequired') })
        ),
        name: Yup.string().required(
            i18n.t('errors.required', { field: i18n.t('PetForm.fieldIsRequired') })
        ),
    });

    return () => petSchema;
};
