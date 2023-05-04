export const gradients = [
    "linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 55%, #e5e5f7 55%)",
    "linear-gradient(225deg,#120E43 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #444cf7 55%, #120E43 55%)",
    "linear-gradient(225deg,#120E43 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #444cf7 55%, #22CB5C 55%)",
    "linear-gradient(225deg,#E21717 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #444cf7 55%, #22CB5C 55%)",
    "linear-gradient(225deg,#E21717 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #D9D55B, #22CB5C 55%)",
    "linear-gradient(225deg,#E21717 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #D9D55B, #CAD5E2 55%)",
    "linear-gradient(225deg,#E21717 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #758283, #CAD5E2 55%)",
    "linear-gradient(225deg,#E21717 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #51E1ED, #CAD5E2 55%)",
    "linear-gradient(225deg,#E07C24 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #51E1ED, #CAD5E2 55%)",
    "linear-gradient(225deg,#E07C24 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #B9345A,#B9345A 55%)",
    "linear-gradient(225deg,#6AC47E 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #B9345A,#B9345A 55%)",
    "linear-gradient(225deg,#6AC47E 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #B9345A,#242B2E 55%)",
    "linear-gradient(225deg,#207398 25%, transparent 25%), linear-gradient(45deg, #120E43 25%, transparent 25%), linear-gradient(315deg, #B9345A,#242B2E 55%)",
    "linear-gradient(225deg,#207398 25%, transparent 25%), linear-gradient(45deg, #1C8D73 25%, transparent 25%), linear-gradient(315deg, #B9345A,#242B2E 55%)",
  ];
  
  export const sampleCode = `module.exports = leftpad;

function leftpad(str, len, ch) {
  str = String(str);
  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (i++ < len) {
    str = ch + str;
  }
  return str;
}
`;