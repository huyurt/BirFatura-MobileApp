import validator from 'validator';

const IsEmpty = value => {
    return validator.isEmpty(value, {ignore_whitespace: true});
};

const EmailValidate = email => {
    return validator.isEmail(email)
};

const NameSurnameValidate = nameSurname => {
    nameSurname = nameSurname.replace(/\s/g, '');
    return validator.isAlpha(nameSurname, 'tr-TR') && validator.isLength(nameSurname, {min: 5})
};

const PasswordValidate = password => {
    return !IsEmpty(password) && validator.isLength(password, {min: 6})
};

const CompanyNameValidate = companyName => {
    return !IsEmpty(companyName) && validator.isLength(companyName, {min: 5})
};

const MobilePhoneValidate = mobilePhone => {
    return validator.isMobilePhone(mobilePhone, 'tr-TR') && validator.isLength(mobilePhone, {min: 10} && mobilePhone.match(/^5[0-9]/g));
};

export {
    IsEmpty,
    EmailValidate,
    NameSurnameValidate,
    PasswordValidate,
    CompanyNameValidate,
    MobilePhoneValidate,
};
