import { HomeListItemProps } from './HomeListItem';
import i18n from '../../../../shared/i18n/i18n';

export const useHomeListItem = (props: HomeListItemProps) => {
    const { pet } = props;
    const name = `${i18n.t('HomeListItem.name')}: ${pet.name}`;
    const age = `${i18n.t('HomeListItem.age')}: ${pet.age.toString()}`;
    return {
        ...props,
        age,
        name,
    };
};
