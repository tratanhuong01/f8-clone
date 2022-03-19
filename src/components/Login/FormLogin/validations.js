

import * as yup from 'yup';
import { REGEX_EMAIL_OR_USERNAME, REGEX_NUMBER, REGEX_NUMBER_PHONE } from '../../../constants/constants';

export const schemaLoginPhoneCode = yup.object().shape({
    code: yup.string().matches(REGEX_NUMBER, 'Mã xác nhận không hợp lệ !!').required('Mã xác nhận không được trống !!').min(4, 'Mã xác nhận phải có 4 kí tự !!').max(4, 'Mã xác nhận phải có 4 kí tự !!'),
    phone: yup.string('Số điện thoại phải là số !!').required('Số điện thoại không được trống!!').matches(REGEX_NUMBER_PHONE, 'Số điện thoại không hợp lệ !!'),
}).required();

export const schemaLoginPhonePassword = yup.object().shape({
    phone: yup.string('Số điện thoại phải là số !!').required('Số điện thoại không được trống!!').matches(REGEX_NUMBER_PHONE, 'Số điện thoại không hợp lệ !!'),
    password: yup.string().required('Mật khẩu không được trống !!').min(6, 'Mật khẩu phải hơn 6 kí tự !!'),
}).required();

export const schemaLoginEmail = yup.object().shape({
    email: yup.string().required('Email không được trống !!').matches(REGEX_EMAIL_OR_USERNAME, 'Email không hợp lệ'),
    password: yup.string().required('Mật khẩu không được trống !!').min(6, 'Mật khẩu phải hơn 6 kí tự !!'),
}).required();

export const schemaLoginEmailResetPassword = yup.object().shape({
    email: yup.string().required('Email không được trống !!').matches(REGEX_EMAIL_OR_USERNAME, 'Email không hợp lệ'),
    code: yup.string().matches(REGEX_NUMBER, 'Mã xác nhận không hợp lệ !!').required('Mã xác nhận không được trống !!').min(4, 'Mã xác nhận phải có 4 kí tự !!').max(4, 'Mã xác nhận phải có 4 kí tự !!'),
    newPassword: yup.string().required('New password is a required field').min(6, 'New password more than 6 character'),
}).required();

export const schemaSignInPhone = yup.object().shape({
    fullName: yup.string('Họ tên không được chứa chữ số !!').required('Họ tên không được trống !!'),
    phone: yup.string('Số điện thoại phải là số !!').required('Số điện thoại không được trống!!').matches(REGEX_NUMBER_PHONE, 'Số điện thoại không hợp lệ !!'),
    code: yup.string().matches(REGEX_NUMBER, 'Mã xác nhận không hợp lệ !!').required('Mã xác nhận không được trống !!').min(4, 'Mã xác nhận phải có 4 kí tự !!').max(4, 'Mã xác nhận phải có 4 kí tự !!')
})
export const schemaSignInEmail = yup.object().shape({
    fullName: yup.string('Họ tên không được chứa chữ số !!').required('Họ tên không được trống !!'),
    email: yup.string().required('Email không được trống !!').matches(REGEX_EMAIL_OR_USERNAME, 'Email không hợp lệ'),
    code: yup.string().matches(REGEX_NUMBER, 'Mã xác nhận không hợp lệ !!').required('Mã xác nhận không được trống !!').min(4, 'Mã xác nhận phải có 4 kí tự !!').max(4, 'Mã xác nhận phải có 4 kí tự !!'),
    password: yup.string().required('Mật khẩu không được trống !!').min(6, 'Mật khẩu phải hơn 6 kí tự !!'),
})