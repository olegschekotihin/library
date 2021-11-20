import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Input } from '../../shared/Input';
import {
  FormStyled,
  InputWrapper,
  PageContainerSmall,
  WrongNotice,
} from '../../shared/StyledComponents';
import { REGEXP } from '../../../const';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';
import { fetchUser } from '../../../store/actions/userActions';

type InputsValue = {
  login: string,
  password: string,
};

/**
 * Component for showing login form
 *
 * @constructor
 */

const LoginForm = ({ fetchUser, users }) => {
  const { t } = useTranslation();
  const history = useHistory();
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
    const userData = {
      email: data.login,
      password: data.password,
    };
    fetchUser(userData);
  };

  useEffect(() => {
    if (users.loggedIn) {
      history.push('/my-account');
    }
  }, [users]);

  return (
    <PageContainerSmall>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.email')}
            data={{
              ...register('login',
                {
                  required: true,
                  pattern: EMAIL,
                }),
            }}
          />
          {errors?.login?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.login?.type === 'pattern' && (
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

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
});

const mapStateToProps = (state: any) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
