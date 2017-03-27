/* @flow */

import {PropTypes} from 'react';

export const CompanyProps = PropTypes.shape({
  title: PropTypes.string.isRequired,
  address: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
});
