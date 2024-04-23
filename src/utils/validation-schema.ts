import moment from 'moment';
import * as Yup from 'yup';

export const createEventSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  startTime: Yup.date()
    .required('Start time is required')
    .nullable()
    .test('is-future', 'Start time must be in the future', function (value) {
      return moment(value).isAfter(moment());
    }),
  endTime: Yup.date()
    .required('End time is required')
    .nullable()
    .test('is-future', 'End time must be in the future', function (value) {
      const startTime = this.parent.startTime;
      return moment(value).isAfter(moment(startTime));
    }),
  date: Yup.date()
    .required('Date is required')
    .nullable()
    .test('is-future', 'Date must be in the future', function (value) {
      return moment(value).isAfter(moment().startOf('day'));
    }),
  desc: Yup.string().min(12).required('Description is required'),
  locations: Yup.string().required('Locations is required'),
  maxNumber: Yup.number()
    .required('Max Number is required')
    .positive('Max Number must be positive'),
});
