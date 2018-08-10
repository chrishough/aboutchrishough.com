export default () => {
  const $contactForm = $('#contact-form');

  $.validator.addMethod('alpha', function (value, element) { // eslint-disable-line func-names
    return this.optional(element) || value === value.match(/^[a-zA-Z\s]+$/);
  });

  $.validator.setDefaults({
    submitHandler() {
      console.log('FORM SUBMITTED!');
    },
  });

  $contactForm.validate({
    rules: {
      'input-first-name': {
        required: true,
        alpha: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-last-name': {
        required: true,
        alpha: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-email': {
        required: true,
        email: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-subject': {
        required: true,
        alpha: true,
        normalizer(value) { return $.trim(value); },
      },
      'input-email-body': {
        required: true,
        normalizer(value) { return $.trim(value); },
      },
    },
    messages: {
      'input-first-name': 'Required. Only alphabetical characters.',
      'input-last-name': 'Required. Only alphabetical characters.',
      'input-email': 'Required.',
      'input-subject': 'Required. Only alphabetical characters.',
      'input-email-body': 'Required.',
    },
    errorElement: 'div',
    errorPlacement(error, element) {
      error.addClass('invalid-feedback');
      error.insertAfter(element);
    },
  });
};
