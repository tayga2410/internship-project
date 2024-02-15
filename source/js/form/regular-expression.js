const setLimitationError = (limitation) => {
  // eslint-disable-next-line no-console
  console.error(`Переданный формат ограничения(data-limitation="${limitation}") - не поддерживается. Проверьте корректность введённых значений.`);
};

export const getLimitationsRegEx = (limitation) => {
  switch (limitation) {
    case 'digit':
      return /[^\d]/g;
    case 'name':
      return /[^a-zA-Zа-яёА-ЯЁ\-\s]/g;
    case 'letters':
      return /[^a-zA-Zа-яёА-ЯЁ\s]/g;
    case 'letters-and-digit':
      return /[^a-zA-Zа-яёА-ЯЁ\s\d]/g;
    case 'cyrillic':
      return /[^а-яёА-ЯЁ\s]/g;
    case 'latin':
      return /[^a-zA-Z\s]/g;
    default:
      return setLimitationError(limitation);
  }
};

export const getMatrixLimitationsRegEx = (matrix) => {
  switch (matrix) {
    case 'digit':
      return /[^\d]/g;
    case 'name':
      return /[^\u0430-\u044f\u0451\u0410-\u042f\u0401a-zA-Z-]/gu;
    case 'letters':
      return /[^\u0430-\u044f\u0451\u0410-\u042f\u0401a-zA-Z]/gu;
    case 'letters-and-digit':
      return /[^\u0430-\u044f\u0451\u0410-\u042f\u0401a-zA-Z\d]/gu;
    case 'cyrillic':
      return /[^\u0430-\u044f\u0451\u0410-\u042f\u0401]/gu;
    case 'latin':
      return /[^\u0061-\u007a\u0041-\u005a]/gu;
    default:
      return false;
  }
};
