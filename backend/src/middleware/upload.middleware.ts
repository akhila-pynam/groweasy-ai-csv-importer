import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, uploadDir);
  },

  filename: (_, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const fileFilter: multer.Options["fileFilter"] = (_, file, cb) => {
  const extension = path.extname(file.originalname).toLowerCase();

  if (extension !== ".csv") {
    return cb(new Error("Only CSV files are allowed"));
  }

  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
});