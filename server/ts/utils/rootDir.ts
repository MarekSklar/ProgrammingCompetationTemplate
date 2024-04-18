import { dirname } from "path";
import { fileURLToPath } from 'url';
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default path.join(__dirname, '../../../');