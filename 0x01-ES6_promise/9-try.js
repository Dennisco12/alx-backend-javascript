export default function guardrail(mathFunction) {
  var array = [];
  try {
    array.push(mathFunction())
  } catch(e) {
    array.push(e)
  } finally {
    array.push("Guardrail was processed")
  }
  return array;
}
