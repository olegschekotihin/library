import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
  FormStyled,
  InputWrapper,
  PageContainerSmall,
  WrongNotice,
} from '../../shared/StyledComponents';
import { Input } from '../../shared/Input';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';
import { Textarea } from '../../shared/Textarea/index';
import { createAuthor } from '../../../store/actions/authorActions';

type InputsValue = {
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
  authorDescription: string,
};

type AuthorsStateValues = {
  authors: any,
}

interface StateValues {
  books: any;
  authors: any;
  state: AuthorsStateValues[];
}

interface AuthorsProps {
  createAuthor: any;
}

/**
 * Component for showing form for adding a author
 *
 * @constructor
 */

const AddAuthorForm = ({ createAuthor }: AuthorsProps) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<InputsValue>();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<InputsValue> = (data) => {
    const author = {
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate,
      countryOfBirth: data.countryOfBirth,
      description: data.authorDescription,
    };
    createAuthor(author);
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
                  minLength: 1,
                  maxLength: 20,
                }),
            }}
          />
          {errors?.firstName?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.firstName?.type === 'maxLength' && (
            <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.last-name')}
            data={{
              ...register('lastName',
                {
                  required: true,
                  minLength: 1,
                  maxLength: 30,
                }),
            }}
          />
          {errors?.lastName?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.lastName?.type === 'maxLength' && (
            <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="date"
            placeholder=""
            data={{
              ...register('birthDate',
                {
                  required: true,
                }),
            }}
          />
          {errors?.birthDate?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
        </InputWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('form-content.placeholders.country-of-birth')}
            data={{
              ...register('countryOfBirth',
                {
                  required: true,
                  minLength: 1,
                  maxLength: 30,
                }),
            }}
          />
          {errors?.countryOfBirth?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.countryOfBirth?.type === 'maxLength' && (
            <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>
          )}
        </InputWrapper>
        <InputWrapper>
          <Textarea
            placeholder={t('form-content.placeholders.description')}
            data={{
              ...register('authorDescription',
                {
                  required: true,
                  minLength: 10,
                }),
            }}
          />
          {errors?.authorDescription?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          {errors?.authorDescription?.type === 'maxLength' && (
            <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>
          )}
        </InputWrapper>
        <InputTypeSubmit type="submit" />
      </FormStyled>
    </PageContainerSmall>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createAuthor: (authorInfo) => dispatch(createAuthor(authorInfo)),
});

const mapStateToProps = (state: StateValues) => ({
  authors: state.authors,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAuthorForm);
