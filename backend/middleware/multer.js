import multer from "multer";

const storage = multer.memoryStorage(); // memory me store kare
const upload = multer({ storage });

export default upload;
