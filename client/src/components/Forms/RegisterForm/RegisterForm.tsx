import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Input } from '../../shared/Input';
import {
  FormStyled,
  InputWrapper,
  PageContainerSmall,
  WrongNotice,
} from '../../shared/StyledComponents';
import { REGEXP } from '../../../const';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';

type InputsValue = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

const RegisterForm = () => {
  const { t, i18n } = useTranslation();
  const { EMAIL } = REGEXP;
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<InputsValue>();

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
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.lastName')}
            data={{
              ...register('lastName',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.lastName?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.email')}
            data={{
              ...register('email',
                {
                  required: true,
                  pattern: EMAIL,
                }),
            }}
          />
          {errors?.email?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          {errors?.email?.type === 'pattern' && (
          <WrongNotice>{t('formContent.notice.invalidEmail')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.password')}
            data={{
              ...register('password',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.password?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          {errors?.password?.type === 'maxLength' && (
          <WrongNotice>{t('formContent.notice.wrongPassword')}</WrongNotice>
          )}
        </InputWrapper>
        <InputTypeSubmit type="submit" value={t('formContent.submit')} />
      </FormStyled>
    </PageContainerSmall>
  );
};

export default RegisterForm;
