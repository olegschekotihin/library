import React from 'react';
import {connect} from 'react-redux';
import Table from '../../components/shared/Table';

interface AuthorsTypes {
  authors: Array<Object>
}

const authorsHeadTableData = {
  firstName: 'First Name',
  lastName: 'Last Name',
  birthDate: 'Birth Date',
  countryOfBirth: 'Country of birth',
};

const Authors = ({ authors }: AuthorsTypes) => {
  console.log('Authors table');
  console.log('State, state', mapStateToProps);
  return (
    <div>
      <h3>Authors</h3>
      <Table
        headData={authorsHeadTableData}
        bodyData={authors}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  authors: state.authorsState.authors,
});

export default connect(mapStateToProps)(Authors);

// export default Authors;
