export default function DepartmentShortener(dept) {
  let deparment = dept.toString().toLowerCase();
  if (!deparment) return;
  else if (
    deparment === "bachelors of commerce" ||
    deparment === "101" ||
    deparment === "102"
  )
    return "BCOM";
  else if (
    deparment === "bachelor of business administration" ||
    deparment === "103"
  )
    return "BBA";
  else return "BCA";
}
