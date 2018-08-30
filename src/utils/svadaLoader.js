import Papa from "papaparse";
import svada from "../assets/svada.csv";

export const loadSvada = onSuccess => {
  Papa.parse(svada, {
    download: true,
    delimiter: ";",
    header: false,
    complete: results => {
      if (results.errors.length > 0) {
        console.log("Error parsing svada from CSV.");
        console.log(results.errors);
      } else {
        onSuccess(results.data);
      }
    }
  });
};
