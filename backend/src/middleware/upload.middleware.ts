import multer from "multer";
import path from "path";
import fs from "fs";

// Create uploads folder if it doesn't exist
const uploadDir = path.join(__dirname, "../../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter: multer.Options["fileFilter"] = (req, file, cb) => {
  if (
    file.mimetype === "text/csv" ||
    file.originalname.toLowerCase().endsWith(".csv")
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only CSV files are allowed."));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

export default upload;