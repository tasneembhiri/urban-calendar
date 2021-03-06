import React from 'react';
import { at } from 'lodash';
import { useField, Field } from 'formik';
import { Checkbox, Box } from '@material-ui/core';

const RadioButton = (props) => {
  const { data, name } = props;
  const [field, meta] = useField(props);

  const [touched, error] = at(meta, 'touched', 'error');
  const fieldName = name || field.name;

  const renderHelperText = () => {
    if (touched && error) {
      return error;
    }
  };
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="column" {...field} {...props}>
        {data.map((item) => (
          <label key={item.label}>
            <Field
              type="checkbox"
              value={item.value}
              as={Checkbox}
              name={fieldName}
              color="primary"
            />
            {item.label}
          </label>
        ))}
      </Box>
      <span style={{ color: 'red' }}>{renderHelperText()}</span>
    </React.Fragment>
  );
};

export default RadioButton;
