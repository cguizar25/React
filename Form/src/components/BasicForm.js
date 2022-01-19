import useFormInput from '../hooks/form-input';

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useFormInput(value => value.trim() !== '');

  const {
    value: enteredSurname,
    isValid: enteredSurnameIsValid,
    hasError: enteredSurnameHasError,
    valueChangeHandler: surnameChangeHandler,
    valueBlurHandler: surnameBlurHandler,
    reset: resetSurnameInput
  } = useFormInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useFormInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid && enteredSurnameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid || !enteredEmailIsValid || !enteredSurnameIsValid) {
      return;
    }
    resetNameInput();
    resetSurnameInput();
    resetEmailInput();
  }

  const nameInputClasses = enteredNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = enteredEmailHasError
    ? 'form-control invalid'
    : 'form-control';
  const surnameInputClasses = enteredSurnameHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form>
      <div>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={surnameChangeHandler}
            onBlur={surnameBlurHandler}
            value={enteredSurname}
           />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
         />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
