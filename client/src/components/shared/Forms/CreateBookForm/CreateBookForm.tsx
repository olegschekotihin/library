import React from 'react';
import { FormStyled } from '../../GlobalStyle';
import { Input } from '../Input';
import { Button } from '../Button';

function CreateBookForm() {
  return (
    <FormStyled>
      <Input
        name="title"
        type="text"
        placeholder="Title"
      />
      <Input
        name="description"
        type="textarea"
        placeholder="Description"
      />
      <Input
        name="code"
        type="text"
        placeholder="Code"
      />
      <Input
        name="title"
        type="author"
        placeholder="Author"
      />
      <Input
        name="pagesCount"
        type="number"
        placeholder="Pages count"
      />
      <Input
        name="publicationDate"
        type="text"
        placeholder="Publication date/year"
      />
      <Button value="Send" />
    </FormStyled>
  );
}

export default CreateBookForm;
