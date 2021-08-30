import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
// import { useSelector, useDispatch } from 'react-redux';

const AddActivityForm = () => {
  const option = [
    { value: 'shopping', label: 'Shopping' },
    { value: 'sightseeing', label: 'sightseeing' },
    { value: 'concert', label: 'concert' },
  ];
  return (
    // <div>Hello</div>
    <Form>
      <Select defaultValue={option[0]} label="Single select" options={option} />
    </Form>
  );
};

export default AddActivityForm;
