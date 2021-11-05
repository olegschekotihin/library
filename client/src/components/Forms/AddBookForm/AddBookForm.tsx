import React from 'react';
import { FormFlexContainer, FormFlexRow } from '../../shared/GlobalStyle';
import { Input } from '../../shared/Input';
import { Button } from '../../shared/Button';

function AddBookForm() {
  return (
    <FormFlexContainer>
      <FormFlexRow>
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
      </FormFlexRow>
      <FormFlexRow>
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
      </FormFlexRow>
      <FormFlexRow>
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
      </FormFlexRow>
      <FormFlexRow>
        <Button value="Add book" />
      </FormFlexRow>
    </FormFlexContainer>
  );
}

export default AddBookForm;
