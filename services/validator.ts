export function isValidEmail(email: string) {
  return email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) !== null;
}

export function isValidPhoneNumber(phoneNumber: string) {
  return (
    phoneNumber.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/
    ) !== null
  );
}
