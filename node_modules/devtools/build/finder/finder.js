"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.darwinGetInstallations = exports.darwinGetAppPaths = void 0;
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const utils_1 = require("@wdio/utils");
const DARWIN_LIST_APPS = 'system_profiler SPApplicationsDataType -json';
exports.darwinGetAppPaths = (app) => {
    const apps = JSON.parse(child_process_1.execSync(DARWIN_LIST_APPS).toString());
    const appPaths = apps.SPApplicationsDataType
        .filter(inst => inst.info && inst.info.startsWith(app))
        .map(inst => inst.path);
    return appPaths;
};
exports.darwinGetInstallations = (appPaths, suffixes) => {
    const installations = [];
    appPaths.forEach((inst) => {
        suffixes.forEach(suffix => {
            const execPath = path_1.default.join(inst.substring(0, inst.indexOf('.app') + 4).trim(), suffix);
            if (utils_1.canAccess(execPath) && installations.indexOf(execPath) === -1) {
                installations.push(execPath);
            }
        });
    });
    return installations;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2ZpbmRlci9maW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXVCO0FBQ3ZCLGlEQUF3QztBQUV4Qyx1Q0FBdUM7QUFFdkMsTUFBTSxnQkFBZ0IsR0FBRyw4Q0FBOEMsQ0FBQTtBQVMxRCxRQUFBLGlCQUFpQixHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDN0MsTUFBTSxJQUFJLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDbkYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjtTQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUUzQixPQUFPLFFBQVEsQ0FBQTtBQUNuQixDQUFDLENBQUE7QUFFWSxRQUFBLHNCQUFzQixHQUFHLENBQUMsUUFBa0IsRUFBRSxRQUFrQixFQUFFLEVBQUU7SUFDN0UsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFBO0lBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN0QixRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLE1BQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUN0RixJQUFJLGlCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDL0QsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUMvQjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLGFBQWEsQ0FBQTtBQUN4QixDQUFDLENBQUEifQ==