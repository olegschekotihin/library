import React from 'react';
import { FormStyled } from '../../GlobalStyle';
import { Input } from '../../Input';
import { Button } from '../../Button';

function AddBookForm() {
  return (
    <FormStyled>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <Button value="Add book" />
    </FormStyled>
  );
}

export default AddBookForm;
