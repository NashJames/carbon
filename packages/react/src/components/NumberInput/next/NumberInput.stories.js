/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  boolean,
  number,
  text,
  object,
} from '@storybook/addon-knobs';
import { NumberInput } from './';
import NumberInputSkeleton from '../../NumberInput/NumberInput.Skeleton';
import mdx from '../NumberInput.mdx';

const props = () => ({
  className: 'some-class',
  id: 'tj-input',
  label: text('Label (label)', 'NumberInput label'),
  hideLabel: boolean('No label (hideLabel)', false),
  hideSteppers: boolean('No steppers (hideSteppers)', false),
  min: number('Minimum value (min)', 0),
  max: number('Maximum value (max)', 100),
  value: number('Value (value)', 50),
  step: number('Step of up/down arrow (step)', 10),
  disabled: boolean('Disabled (disabled)', false),
  readOnly: boolean('Read only (readOnly)', false),
  invalid: boolean('Show form validation UI (invalid)', false),
  invalidText: text(
    'Form validation UI content (invalidText)',
    'Number is not valid'
  ),
  warn: boolean('Show warning state (warn)', false),
  warnText: text(
    'Warning state text (warnText)',
    'A high threshold may impact performance'
  ),
  helperText: text('Helper text (helperText)', 'Optional helper text.'),
  light: boolean('Light variant (light)', false),
  onChange: action('onChange'),
  onClick: action('onClick'),
  allowEmpty: boolean('Allow empty value (allowEmpty)', false),
  numberInputArrowTranslationIds: object(
    'Number input arrow icon translation IDs (for translateWithId callback)',
    {
      'increment.number': 'Increment number',
      'decrement.number': 'Decrement number',
    }
  ),
});

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  decorators: [withKnobs],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      page: mdx,
    },

    subcomponents: {
      NumberInputSkeleton,
    },
  },
};

export const Default = (args) => {
  return (
    <NumberInput
      id="carbon-number"
      min={0}
      max={100}
      value={50}
      label="NumberInput label"
      helperText="Optional helper text."
      invalidText="Number is not valid"
      {...args}
    />
  );
};

Default.story = {
  name: 'Number Input',
};

export const Playground = (args) => {
  const { numberInputArrowTranslationIds, ...rest } = props();
  return (
    <NumberInput
      translateWithId={(id) => numberInputArrowTranslationIds[id]}
      {...rest}
      {...args}
    />
  );
};

export const Skeleton = () => <NumberInputSkeleton />;
