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
  login: string,
  password: string,
};

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const { EMAIL } = REGEXP;
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<InputsValue>();

  console.log('EMAIL', EMAIL);

  const onSubmit: SubmitHandler<InputsValue> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <PageContainerSmall>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('formContent.placeholders.email')}
            data={{
              ...register('login',
                {
                  required: true,
                  pattern: EMAIL,
                }),
            }}
          />
          {errors?.login?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          {errors?.login?.type === 'pattern' && (
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

export default LoginForm;
