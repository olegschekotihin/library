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
import { createBook } from '../../../store/actions/bookActions';

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
  books: any;
  authors: any;
  state: AuthorsStateValues[];
}

interface AuthorsProps {
  authorsList: AuthorsListValues[];
  createBook: any;
}

/**
 * Component for showing form for adding a book
 *
 * @param authorsList
 * @param createBook
 * @constructor
 */

const AddBookForm = ({ authorsList, createBook }: AuthorsProps) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<InputsValue>();

  const onSubmit: SubmitHandler<InputsValue> = (data, event: any) => {
    event.preventDefault();

    const book = {
      title: data.title,
      description: data.description,
      codeId: data.code,
      author: data.selectAuthor,
      pagesCount: data.pagesCount,
      publicationDate: data.publicationDate,
    };
    createBook(book);
  };

  return (
    <FormFlexContainer>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <FormFlexRow>
          <InputWrapper>
            <Input
              type="text"
              placeholder={t('form-content.placeholders.title')}
              data={{
                ...register('title',
                  {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  }),
              }}
            />
            {errors?.title?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder={t('form-content.placeholders.description')}
              data={{
                ...register('description',
                  {
                    required: true,
                    minLength: 3,
                  }),
              }}
            />
            {errors?.description?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          </InputWrapper>
        </FormFlexRow>
        <FormFlexRow>
          <InputWrapper>
            <Input
              type="text"
              placeholder={t('form-content.placeholders.code')}
              data={{
                ...register('code',
                  {
                    required: true,
                    minLength: 3,
                  }),
              }}
            />
            {errors?.code?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          </InputWrapper>
          <InputWrapper>
            <Select
              optionsData={authorsList}
              defaultValue={t('form-content.placeholders.select-author')}
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
            {errors?.selectAuthor?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          </InputWrapper>
        </FormFlexRow>
        <FormFlexRow>
          <InputWrapper>
            <Input
              type="number"
              placeholder={t('form-content.placeholders.pages-count')}
              data={{
                ...register('pagesCount',
                  {
                    required: true,
                    min: 3,
                  }),
              }}
            />
            {errors?.pagesCount?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
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
            {errors?.publicationDate?.type === 'required' && <WrongNotice>{t('form-content.notice.required-field')}</WrongNotice>}
          </InputWrapper>
        </FormFlexRow>
        <FormFlexRow>
          <InputTypeSubmit type="submit" value={t('form-content.submit')} />
        </FormFlexRow>
      </FormStyled>
    </FormFlexContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (bookInfo) => dispatch(createBook(bookInfo)),
});

const mapStateToProps = (state: StateValues) => ({
  books: state.books,
  authorsList: state.authors.authors,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);
