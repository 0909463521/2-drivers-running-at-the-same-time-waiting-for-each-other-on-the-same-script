"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require("./browser/$$"));
const _1 = __importDefault(require("./browser/$"));
const call_1 = __importDefault(require("./browser/call"));
const custom__1 = __importDefault(require("./browser/custom$$"));
const custom_1 = __importDefault(require("./browser/custom$"));
const debug_1 = __importDefault(require("./browser/debug"));
const deleteCookies_1 = __importDefault(require("./browser/deleteCookies"));
const execute_1 = __importDefault(require("./browser/execute"));
const executeAsync_1 = __importDefault(require("./browser/executeAsync"));
const getCookies_1 = __importDefault(require("./browser/getCookies"));
const getPuppeteer_1 = __importDefault(require("./browser/getPuppeteer"));
const getWindowSize_1 = __importDefault(require("./browser/getWindowSize"));
const keys_1 = __importDefault(require("./browser/keys"));
const mock_1 = __importDefault(require("./browser/mock"));
const newWindow_1 = __importDefault(require("./browser/newWindow"));
const pause_1 = __importDefault(require("./browser/pause"));
const react__1 = __importDefault(require("./browser/react$$"));
const react_1 = __importDefault(require("./browser/react$"));
const reloadSession_1 = __importDefault(require("./browser/reloadSession"));
const savePDF_1 = __importDefault(require("./browser/savePDF"));
const saveRecordingScreen_1 = __importDefault(require("./browser/saveRecordingScreen"));
const saveScreenshot_1 = __importDefault(require("./browser/saveScreenshot"));
const setCookies_1 = __importDefault(require("./browser/setCookies"));
const setTimeout_1 = __importDefault(require("./browser/setTimeout"));
const setWindowSize_1 = __importDefault(require("./browser/setWindowSize"));
const switchWindow_1 = __importDefault(require("./browser/switchWindow"));
const throttle_1 = __importDefault(require("./browser/throttle"));
const touchAction_1 = __importDefault(require("./browser/touchAction"));
const uploadFile_1 = __importDefault(require("./browser/uploadFile"));
const url_1 = __importDefault(require("./browser/url"));
const waitUntil_1 = __importDefault(require("./browser/waitUntil"));
exports.default = {
    $$: __1.default, $: _1.default, call: call_1.default, custom$$: custom__1.default, custom$: custom_1.default, debug: debug_1.default, deleteCookies: deleteCookies_1.default, execute: execute_1.default, executeAsync: executeAsync_1.default, getCookies: getCookies_1.default,
    getPuppeteer: getPuppeteer_1.default, getWindowSize: getWindowSize_1.default, keys: keys_1.default, mock: mock_1.default, newWindow: newWindow_1.default, pause: pause_1.default, react$$: react__1.default, react$: react_1.default, reloadSession: reloadSession_1.default,
    savePDF: savePDF_1.default, saveRecordingScreen: saveRecordingScreen_1.default, saveScreenshot: saveScreenshot_1.default, setCookies: setCookies_1.default, setTimeout: setTimeout_1.default, setWindowSize: setWindowSize_1.default,
    switchWindow: switchWindow_1.default, throttle: throttle_1.default, touchAction: touchAction_1.default, uploadFile: uploadFile_1.default, url: url_1.default, waitUntil: waitUntil_1.default
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQTZCO0FBQzdCLG1EQUEyQjtBQUMzQiwwREFBaUM7QUFDakMsaUVBQXlDO0FBQ3pDLCtEQUF1QztBQUN2Qyw0REFBbUM7QUFDbkMsNEVBQW1EO0FBQ25ELGdFQUF1QztBQUN2QywwRUFBaUQ7QUFDakQsc0VBQTZDO0FBQzdDLDBFQUFpRDtBQUNqRCw0RUFBbUQ7QUFDbkQsMERBQWlDO0FBQ2pDLDBEQUFpQztBQUNqQyxvRUFBMkM7QUFDM0MsNERBQW1DO0FBQ25DLCtEQUF1QztBQUN2Qyw2REFBcUM7QUFDckMsNEVBQW1EO0FBQ25ELGdFQUF1QztBQUN2Qyx3RkFBK0Q7QUFDL0QsOEVBQXFEO0FBQ3JELHNFQUE2QztBQUM3QyxzRUFBNkM7QUFDN0MsNEVBQW1EO0FBQ25ELDBFQUFpRDtBQUNqRCxrRUFBeUM7QUFDekMsd0VBQStDO0FBQy9DLHNFQUE2QztBQUM3Qyx3REFBK0I7QUFDL0Isb0VBQTJDO0FBRTNDLGtCQUFlO0lBQ1gsRUFBRSxFQUFGLFdBQUUsRUFBRSxDQUFDLEVBQUQsVUFBQyxFQUFFLElBQUksRUFBSixjQUFJLEVBQUUsUUFBUSxFQUFSLGlCQUFRLEVBQUUsT0FBTyxFQUFQLGdCQUFPLEVBQUUsS0FBSyxFQUFMLGVBQUssRUFBRSxhQUFhLEVBQWIsdUJBQWEsRUFBRSxPQUFPLEVBQVAsaUJBQU8sRUFBRSxZQUFZLEVBQVosc0JBQVksRUFBRSxVQUFVLEVBQVYsb0JBQVU7SUFDdkYsWUFBWSxFQUFaLHNCQUFZLEVBQUUsYUFBYSxFQUFiLHVCQUFhLEVBQUUsSUFBSSxFQUFKLGNBQUksRUFBRSxJQUFJLEVBQUosY0FBSSxFQUFFLFNBQVMsRUFBVCxtQkFBUyxFQUFFLEtBQUssRUFBTCxlQUFLLEVBQUUsT0FBTyxFQUFQLGdCQUFPLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxhQUFhLEVBQWIsdUJBQWE7SUFDekYsT0FBTyxFQUFQLGlCQUFPLEVBQUUsbUJBQW1CLEVBQW5CLDZCQUFtQixFQUFFLGNBQWMsRUFBZCx3QkFBYyxFQUFFLFVBQVUsRUFBVixvQkFBVSxFQUFFLFVBQVUsRUFBVixvQkFBVSxFQUFFLGFBQWEsRUFBYix1QkFBYTtJQUNuRixZQUFZLEVBQVosc0JBQVksRUFBRSxRQUFRLEVBQVIsa0JBQVEsRUFBRSxXQUFXLEVBQVgscUJBQVcsRUFBRSxVQUFVLEVBQVYsb0JBQVUsRUFBRSxHQUFHLEVBQUgsYUFBRyxFQUFFLFNBQVMsRUFBVCxtQkFBUztDQUNsRSxDQUFBIn0=