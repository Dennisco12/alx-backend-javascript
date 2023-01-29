export default function guardrail(mathFunction) {
  let array = [];
  try {
    array.push(mathFunction());
  } catch(e) {
    array.push(e);
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
