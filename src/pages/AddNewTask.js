import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, InputNumber, Select, ColorPicker } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addTaskAction } from '../redux/reducers/TodolistReducers';



const { RangePicker } = DatePicker;
const { TextArea } = Input;

const validationSchema = Yup.object({
  taskName: Yup.string().required('Task name is required'),
  id: Yup.number().required('ID is required'),
  description: Yup.string().required('Description is required'),
  dateRange: Yup.array().required('Please select a date range'),
  color: Yup.string().required('Please pick a color'),
});

const FormikFormDemo = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        taskName: '',
        select: '',
        id: '',
        description: '',
        dateRange: null,
        color: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
      const action = addTaskAction(values)
      dispatch(action)
      }}
    >
      {({ setFieldValue, handleSubmit }) => (
        <Form className="container mx-auto" onSubmit={handleSubmit}>
          {/* Task Name */}
          <div className="form-item">
            <label>Task Name</label>
            <Field name="taskName" as={Input} />
            <ErrorMessage name="taskName" component="div" className="error" />
          </div>

          

          {/* Date Range Picker */}
          <div className="form-item">
            <label>Date</label>
            <DatePicker
              onChange={(dates) => setFieldValue('dateRange', dates)}
            />
            <ErrorMessage name="dateRange" component="div" className="error" />
          </div>

          {/* ID */}
          <div className="form-item">
            <label>ID</label>
            <Field name="id" as={InputNumber} />
            <ErrorMessage name="id" component="div" className="error" />
          </div>

          {/* Description */}
          <div className="form-item">
            <label>Description</label>
            <Field name="description" as={TextArea} rows={4} />
            <ErrorMessage name="description" component="div" className="error" />
          </div>

          {/* Color Picker */}
          <div className="form-item">
            <label>Color Picker</label>
            <ColorPicker
              onChange={(color) => setFieldValue('color', color.toHexString())}
            />
            <ErrorMessage name="color" component="div" className="error" />
          </div>

          {/* Submit Button */}
          <div className="form-item">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormikFormDemo;
