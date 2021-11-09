import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormStyled, PageContainerSmall, WrongNotice } from '../../shared/StyledComponents';
import { Input } from '../../shared/Input';
import { FORMS_CONTENT, VALIDATION_ERROR } from '../../../const';
import { InputTypeSubmit } from '../../shared/Input/InputStyled';

type InputsValue = {
  firstName: string,
  birthDate: string,
  countryOfBirth: string,
};

const AddAuthorForm = () => {
  const { REQUIRED_FIELD, WRONG_PASSWORD } = VALIDATION_ERROR;
  const {
    FIRST_NAME,
    BIRTH_DATE,
    COUNTRY_OF_BIRTH,
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
    <PageContainerSmall>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder={FIRST_NAME}
          data={{
            ...register('firstName',
              {
                required: true,
                maxLength: 10,
              }),
          }}
        />
        {errors?.firstName?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        {errors?.firstName?.type === 'maxLength' && (
          <WrongNotice>{WRONG_PASSWORD}</WrongNotice>
        )}
        <Input
          type="text"
          placeholder={BIRTH_DATE}
          data={{
            ...register('birthDate',
              {
                required: true,
                maxLength: 10,
              }),
          }}
        />
        {errors?.birthDate?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        {errors?.birthDate?.type === 'maxLength' && (
          <WrongNotice>{WRONG_PASSWORD}</WrongNotice>
        )}
        <Input
          type="text"
          placeholder={COUNTRY_OF_BIRTH}
          data={{
            ...register('countryOfBirth',
              {
                required: true,
                maxLength: 10,
              }),
          }}
        />
        {errors?.countryOfBirth?.type === 'required' && <WrongNotice>{REQUIRED_FIELD}</WrongNotice>}
        {errors?.countryOfBirth?.type === 'maxLength' && (
          <WrongNotice>{WRONG_PASSWORD}</WrongNotice>
        )}
        <InputTypeSubmit type="submit" />
      </FormStyled>
    </PageContainerSmall>
  );
};

export default AddAuthorForm;
