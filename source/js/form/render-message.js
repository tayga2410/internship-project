export class Message {
  constructor() {
    this._baseErrorText = 'Это поле является обязательным';
  }

  removeMessage(parent) {
    const formInput = parent.querySelector('.form__input');
    if (formInput) {
      formInput.style.outline = '';
    }
  }

  renderMessage(parent, validationState) {
    this.removeMessage(parent);

    const formInput = parent.querySelector('.form__input');
    if (formInput) {
      if (validationState === 'is-invalid') {
        formInput.style.outline = '5px solid #FF121F';
      }
    }
  }
}
