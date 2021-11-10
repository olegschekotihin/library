import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  FormStyled,
  InputWrapper,
  PageContainerSmall,
  WrongNotice,
} from '../../shared/StyledComponents';
import { Input } from '../../shared/Input';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';

type InputsValue = {
  firstName: string,
  birthDate: string,
  countryOfBirth: string,
};

const AddAuthorForm = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<InputsValue>();
  const { t, i18n } = useTranslation();

  const onSubmit: SubmitHandler<InputsValue> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <PageContainerSmall>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.firstName')}
            data={{
              ...register('firstName',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.firstName?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          {errors?.firstName?.type === 'maxLength' && (
            <WrongNotice>{t('formContent.notice.wrongPassword')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.birthDate')}
            data={{
              ...register('birthDate',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.birthDate?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          {errors?.birthDate?.type === 'maxLength' && (
            <WrongNotice>{t('formContent.notice.wrongPassword')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.countryOfBirth')}
            data={{
              ...register('countryOfBirth',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.countryOfBirth?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          {errors?.countryOfBirth?.type === 'maxLength' && (
            <WrongNotice>{t('formContent.notice.wrongPassword')}</WrongNotice>
          )}
        </InputWrapper>
        <InputTypeSubmit type="submit" />
      </FormStyled>
    </PageContainerSmall>
  );
};

export default AddAuthorForm;
