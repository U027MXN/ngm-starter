import {Validators} from '@angular/forms';
import {FieldConfig} from '../../ui-elements/abstract-form/field.interface';


export const FORM_COFNIG: FieldConfig[] = [
  {
    type: 'input',
    label: 'Username',
    inputType: 'text',
    name: 'name',
    columnSpanFraction: 1,
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text'
      }
    ]
  },
  {
    type: 'input',
    label: 'Email Address',
    inputType: 'email',
    name: 'email',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Invalid email'
      }
    ]
  },
  {
    type: 'input',
    label: 'Password',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      }
    ]
  },
  {
    type: 'radiobutton',
    label: 'Gender',
    name: 'gender',
    options: [{
      label: 'Male',
      value: 0
    }, {
      label: 'Female',
      value: 1
    }],
    value: 'Male',
    alignment: 'flex-start'
  },
  {
    type: 'date',
    label: 'DOB',
    name: 'dob',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date of Birth Required'
      }
    ]
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    value: 'UK',
    options: [{
      label: 'India',
      value: 0
    }, {
      label: 'USA',
      value: 1
    }],
  },
  {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'term',
    value: true,
    alignment: 'center'
  },
  {
    type: 'button',
    label: 'Save',
    width: '10em',
    rowWidth: '100%',
    alignment: 'center',
    columnSpanFraction: 1
  }
];
