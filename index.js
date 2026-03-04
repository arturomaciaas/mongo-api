"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = 3800;
const startServer = async () => {
    try {
        await mongoose_1.default.connect("mongodb://127.0.0.1:27017/");
        console.log("Ya te conectaste wey");
        app_1.default.listen(port, () => {
            console.log(`Ya estás corriendo el servidor en el puerto ${port} wey`);
        });
    }
    catch (err) {
        console.error(err);
    }
};
startServer();
//# sourceMappingURL=index.js.map