import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
// import { useSelector, useDispatch } from 'react-redux';

const AddActivityForm = () => {
  const option = [
    { value: 'shopping', label: 'shopping' },
    { value: 'sightseeing', label: 'sightseeing' },
    { value: 'concert', label: 'concert' },
    { value: 'movie', label: 'movie' },
    { value: 'museum', label: 'museum' },
    { value: 'din', label: 'movie' },
    { value: 'movie', label: 'movie' },
  ];
  return (
    // <div>Hello</div>
    <Form>
      <Select defaultValue={option[0]} label="Single select" options={option} />
    </Form>
  );
};

export default AddActivityForm;
