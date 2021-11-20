import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Input } from '../../shared/Input';
import {
  FormStyled,
  InputWrapper,
  PageContainerSmall,
  WrongNotice,
} from '../../shared/StyledComponents';
import { REGEXP } from '../../../const';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';
import { signUserUp } from '../../../store/actions/userActions';

type InputsValue = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
};

/**
 * Component for showing register form
 *
 * @constructor
 */

const RegisterForm = ({signUserUp}) => {
  const { t } = useTranslation();
  const { EMAIL } = REGEXP;
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<InputsValue>();

  const onSubmit: SubmitHandler<InputsValue> = (data, event: any) => {
    event.preventDefault();

    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };
    signUserUp(user);
  };

  return (
    <PageContainerSmall>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.first-name')}
            data={{
              ...register('firstName',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.firstName?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.last-name')}
            data={{
              ...register('lastName',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.lastName?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.email')}
            data={{
              ...register('email',
                {
                  required: true,
                  pattern: EMAIL,
                }),
            }}
          />
          {errors?.email?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.email?.type === 'pattern' && (
          <WrongNotice>{t('form-content.notice.invalid-email')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.password')}
            data={{
              ...register('password',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.password?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.password?.type === 'maxLength' && (
          <WrongNotice>{t('form-content.notice.wrongPassword')}</WrongNotice>
          )}
        </InputWrapper>
        <InputTypeSubmit type="submit" value={t('form-content.submit')} />
      </FormStyled>
    </PageContainerSmall>
  );
};

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
