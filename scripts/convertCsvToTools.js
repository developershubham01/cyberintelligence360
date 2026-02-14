import fs from "fs";
import Papa from "papaparse";

const CSV_FILE_PATH = "osintframework_links.csv";


const OUTPUT_FILE_PATH = "src/data/sheetTools.js";

function guessCategory(name, link) {
  const str = `${name} ${link}`.toLowerCase();

  if (str.includes("username") || str.includes("namechk") || str.includes("sherlock") || str.includes("usersearch"))
    return "Username";

  if (str.includes("email") || str.includes("hunter") || str.includes("pwned"))
    return "Email";

  if (str.includes("domain") || str.includes("dns") || str.includes("subdomain"))
    return "Domain";

  if (str.includes("ip") || str.includes("shodan") || str.includes("censys") || str.includes("nmap"))
    return "Network";

  if (str.includes("malware") || str.includes("virustotal") || str.includes("hybrid-analysis"))
    return "Malware";

  if (str.includes("image") || str.includes("tineye") || str.includes("pimeyes"))
    return "Images";

  if (str.includes("metadata") || str.includes("exif"))
    return "Metadata";

  if (str.includes("archive") || str.includes("wayback") || str.includes("archive.org"))
    return "Archives";

  if (str.includes("social") || str.includes("facebook") || str.includes("instagram") || str.includes("twitter") || str.includes("linkedin"))
    return "Social Media";

  if (str.includes("google") || str.includes("ghunt"))
    return "Google";

  if (str.includes("map") || str.includes("geo") || str.includes("location"))
    return "Geo";

  return "OSINT Tools";
}

function guessIcon(category) {
  const map = {
    Username: "👤",
    Email: "✉️",
    Domain: "🌍",
    Network: "🌐",
    Malware: "🦠",
    Images: "🖼️",
    Metadata: "🏷️",
    Archives: "📚",
    "Social Media": "📱",
    Google: "🔍",
    Geo: "📍",
    "OSINT Tools": "🧰",
  };

  return map[category] || "🧰";
}

const csvText = fs.readFileSync(CSV_FILE_PATH, "utf8");

const parsed = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: true,
});

const rows = parsed.data;

// ✅ Convert CSV rows to tools objects
let idCounter = 1000;
const tools = rows
  .filter((r) => r["Tool Name"] && r["Link"])
  .map((r) => {
    const name = String(r["Tool Name"]).replace("(T)", "").trim();
    const link = String(r["Link"]).trim();

    const description =
      r["Description"] && String(r["Description"]).trim().length > 10
        ? String(r["Description"]).trim()
        : `OSINT tool for investigation and data gathering: ${name}`;

    const category = guessCategory(name, link);
    const icon = guessIcon(category);

    return {
      id: idCounter++,
      name,
      description,
      link,
      category,
      icon,
    };
  });


const fileContent = `// AUTO GENERATED FILE ✅
// This file is generated from CSV sheet.

export const sheetTools = ${JSON.stringify(tools, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE_PATH, fileContent, "utf8");

console.log(`✅ Done! Tools generated: ${tools.length}`);
console.log(`✅ Output: ${OUTPUT_FILE_PATH}`);
