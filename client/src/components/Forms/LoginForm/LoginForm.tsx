import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../../shared/Input';
import { FormStyled, PageContainerSmall, WrongNotice } from '../../shared/StyledComponents';
import { REGEXP, VALIDATION_ERROR, FORMS_CONTENT } from '../../../const';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';

type InputsValue = {
  login: string,
  password: string,
};

const LoginForm = () => {
  const { INVALID_EMAIL, WRONG_PASSWORD, REQUIRED_FIELD } = VALIDATION_ERROR;
  const {
    EMAIL,
    PASSWORD,
  } = FORMS_CONTENT.PLACEHOLDERS;
  const { EMAIL_REGEXP } = REGEXP;
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
        <Input
          type="text"
          placeholder={EMAIL}
          data={{
            ...register('login',
              {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              }),
          }}
        />
        {errors?.login?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        {errors?.login?.type === 'pattern' && (
          <WrongNotice>{INVALID_EMAIL}</WrongNotice>
        )}
        <Input
          type="text"
          placeholder={PASSWORD}
          data={{
            ...register('password',
              {
                required: true,
                maxLength: 10,
              }),
          }}
        />
        {errors?.password?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        {errors?.password?.type === 'maxLength' && (
          <WrongNotice>{WRONG_PASSWORD}</WrongNotice>
        )}
        <InputTypeSubmit type="submit" />
      </FormStyled>
    </PageContainerSmall>
  );
};

export default LoginForm;
