import doubleCheck from "../HelperFunctions/findDouble";
import scrambleArray from "../HelperFunctions/scrambleArray";
import only20 from "../HelperFunctions/only20";

let wordsV4 = [
  "servile",
  "distinguish",
  "capricious",
  "sway",
  "behest",
  "toady",
  "obsequious",
  "intercession",
  "obfuscation",
  "fulsome",
  "menial",
  "foppish",
  "appoint",
  "redound",
  "confer",
  "connote",
  "liaison",
  "sycophant",
  "contempt",
  "inordinate",
  "conduce",
  "convolute",
  "preponderance",
  "dominion",
  "coil",
  "imbricate",
  "relay",
  "tryst",
  "illicit",
  "intrusion",
  "trunnion",
  "sovereignty",
  "stewardship",
  "ascendancy",
  "calumniate",
  "rustic",
  "construe",
  "helix",
  "intrauterine",
  "perplexity",
  "funereal",
  "amplitude",
  "overzealous",
  "copious",
  "muddle",
  "pertain",
  "subservient",
  "domestic",
  "elicit",
  "polity",
  "coercion",
];

wordsV4 = scrambleArray(wordsV4);
wordsV4 = doubleCheck(wordsV4);
wordsV4 = only20(wordsV4);

export default wordsV4;
