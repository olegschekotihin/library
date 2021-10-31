import React from 'react';
import {
  useParams,
} from 'react-router-dom';

interface AdditionalTypes {
  data: [
    currentData: {
      firstName: string
      lastName: string
      birthDate: string
      description: string
      publicationDate: string
      title: string
      author: string
    }
  ]
  type: string
}

const AdditionalInformation = ({ type, data }:AdditionalTypes) => {
  const { id } = useParams();
  console.log('data', data);
  const currentData = data.find((elem: Object) => elem.id == id);
  return (
    <div>
      {(type === 'author')
      && (
        <div>
          <div>asdasdsad</div>
          <h3>
            Name:
            {' '}
            {currentData.firstName}
            {' '}
            {currentData.lastName}
          </h3>
          <div>
            <p>
              Birthdate: {currentData.birthDate}
            </p>
            <p>
              About: {currentData.description}
            </p>
          </div>
        </div>
      )}
      {(type === 'book')
      && (
        <div>
          <div>Book</div>
          <h3>
            Name:
            {' '}
            {currentData.title}
          </h3>
          <div>
            <p>
              Author: {currentData.author}
            </p>
            <p>
              Birthdate:{currentData.publicationDate}
            </p>
            <p>
              About: {currentData.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalInformation;
