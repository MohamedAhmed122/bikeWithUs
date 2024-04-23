import { StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AppPicker } from '../../common/app-picker';
import { mentions } from '../../data/picker-mentions';
import { PickerItemType } from '../../types/common';
import { AppForm } from '../../common/form/app-form';
import { AppInputField } from '../../common/form/app-input-field';
import { createEventSchema } from '../../utils/validation-schema';
import { AppDatePickerField } from '../../common/form/app-date-picker-field';
import { AppTimePickerField } from '../../common/form/app-time-picker-field';
import { AppSubmitButton } from '../../common/form/app-submit-button';

export default function CreateEvents() {
  const [selectedItems, setSelectedItems] = useState<PickerItemType[]>([]);

  return (
    <ScrollView>
      <AppForm
        validationSchema={createEventSchema}
        initialValues={{
          title: '',
          date: undefined,
          startTime: undefined,
          endTime: undefined,
          desc: '',
          locations: '',
          maxNumber: 0,
        }}
        onSubmit={(values) => {
          console.log({ ...values, selectedItems });
        }}>
        <React.Fragment>
          <AppInputField name="title" placeholder="Title" />
          <AppInputField name="desc" placeholder="Description" />
          <AppInputField name="locations" placeholder="Location" />
          <AppInputField name="maxNumber" placeholder="Max number" />
          <AppPicker
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            items={mentions}
            placeholder="Mention your Friends"
          />
          <AppDatePickerField />
          <AppTimePickerField />
          <AppSubmitButton title="Submit" />
        </React.Fragment>
      </AppForm>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
