import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  FormFlexContainer,
  FormFlexRow,
  WrongNotice,
  FormStyled,
  InputWrapper,
} from '../../shared/StyledComponents';
import { Input } from '../../shared/Input';
import { Select } from '../../shared/Select';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';

type InputsValue = {
  title: string,
  description: string,
  code: string,
  selectAuthor: string,
  pagesCount: number,
  publicationDate: string,
};

type AuthorsListValues = {
  id: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  countryOfBirth: string,
  description: string,
}

type AuthorsStateValues = {
  authors: any,
}

interface StateValues {
  authors: any;
  state: AuthorsStateValues[];
}

interface AuthorsProps {
  authorsList: AuthorsListValues[];
}

const AddBookForm = ({ authorsList }: AuthorsProps) => {
  const { t, i18n } = useTranslation();
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
    <FormFlexContainer>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <FormFlexRow>
          <InputWrapper>
            <Input
              type="text"
              placeholder={t('formContent.placeholders.title')}
              data={{
                ...register('title',
                  {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  }),
              }}
            />
            {errors?.title?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder={t('formContent.placeholders.description')}
              data={{
                ...register('description',
                  {
                    required: true,
                    minLength: 3,
                  }),
              }}
            />
            {errors?.description?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          </InputWrapper>
        </FormFlexRow>
        <FormFlexRow>
          <InputWrapper>
            <Input
              type="text"
              placeholder={t('formContent.placeholders.code')}
              data={{
                ...register('code',
                  {
                    required: true,
                    minLength: 3,
                  }),
              }}
            />
            {errors?.code?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          </InputWrapper>
          <InputWrapper>
            <Select
              optionsData={authorsList}
              defaultValue={t('formContent.placeholders.selectAuthor')}
              data={{
                ...register(
                  'selectAuthor',
                  {
                    required: true,
                  },
                ),
              }}
              required
            />
            {errors?.selectAuthor?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          </InputWrapper>
        </FormFlexRow>
        <FormFlexRow>
          <InputWrapper>
            <Input
              type="number"
              placeholder={t('formContent.placeholders.pagesCount')}
              data={{
                ...register('pagesCount',
                  {
                    required: true,
                    min: 3,
                  }),
              }}
            />
            {errors?.pagesCount?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="date"
              placeholder=""
              data={{
                ...register('publicationDate',
                  {
                    required: true,
                  }),
              }}
            />
            {errors?.publicationDate?.type === 'required' && <WrongNotice>{t('formContent.notice.requiredField')}</WrongNotice>}
          </InputWrapper>
        </FormFlexRow>
        <FormFlexRow>
          <InputTypeSubmit type="submit" value={t('formContent.submit')} />
        </FormFlexRow>
      </FormStyled>
    </FormFlexContainer>
  );
};

const mapStateToProps = (state: StateValues) => ({
  authorsList: state.authors.authors,
});

export default connect(mapStateToProps)(AddBookForm);
