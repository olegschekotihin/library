import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import {
  FormFlexContainer, FormFlexRow, WrongNotice, FormStyled,
} from '../../shared/StyledComponents';
import { Input } from '../../shared/Input';
import { Select } from '../../shared/Select';
import { FORMS_CONTENT, VALIDATION_ERROR } from '../../../const';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';

type InputsValue = {
  title: string,
  description: string,
  code: string,
  author: string,
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
  const { REQUIRED_FIELD } = VALIDATION_ERROR;
  const { SELECT_DEFAULT_VALUE } = FORMS_CONTENT.CREATE_BOOK;
  const {
    TITLE,
    DESCRIPTION,
    CODE,
    PAGE_COUNT,
    PUBLICATION_DATE,
  } = FORMS_CONTENT.PLACEHOLDERS;
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
          <Input
            type="text"
            placeholder={TITLE}
            data={{
              ...register('title',
                {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                }),
            }}
          />
          {errors?.title?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
          <Input
            type="text"
            placeholder={DESCRIPTION}
            data={{
              ...register('description',
                {
                  required: true,
                  minLength: 3,
                }),
            }}
          />
          {errors?.description?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        </FormFlexRow>
        <FormFlexRow>
          <Input
            type="text"
            placeholder={CODE}
            data={{
              ...register('code',
                {
                  required: true,
                  minLength: 3,
                }),
            }}
          />
          {errors?.code?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
          <Select
            optionsData={authorsList}
            defaultValue={SELECT_DEFAULT_VALUE}
          />
        </FormFlexRow>
        <FormFlexRow>
          <Input
            type="number"
            placeholder={PAGE_COUNT}
            data={{
              ...register('pagesCount',
                {
                  required: true,
                  min: 3,
                }),
            }}
          />
          {errors?.pagesCount?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
          <Input
            type="date"
            placeholder={PUBLICATION_DATE}
            data={{
              ...register('publicationDate',
                {
                  required: true,
                  maxLength: 10,
                }),
            }}
          />
          {errors?.publicationDate?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        </FormFlexRow>
        <FormFlexRow>
          <InputTypeSubmit type="submit" />
        </FormFlexRow>
      </FormStyled>
    </FormFlexContainer>
  );
};

const mapStateToProps = (state: StateValues) => ({
  authorsList: state.authors.authors,
});

export default connect(mapStateToProps)(AddBookForm);
