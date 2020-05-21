/**
 * January is 0
 * @param dateString format dd/mm/yyy
 */
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((value): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
