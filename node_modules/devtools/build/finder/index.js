"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const edge_1 = __importDefault(require("./edge"));
const firefox_1 = __importDefault(require("./firefox"));
exports.default = (browserName, platform) => {
    const finder = {
        firefox: firefox_1.default,
        edge: edge_1.default
    }[browserName];
    const supportedPlatforms = Object.keys(finder);
    if (!supportedPlatforms.includes(platform)) {
        throw new Error(`Operating system ("${process.platform}") is not supported`);
    }
    return finder[platform];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmluZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQStCO0FBQy9CLHdEQUFxQztBQUVyQyxrQkFBZSxDQUFDLFdBQStCLEVBQUUsUUFBeUIsRUFBRSxFQUFFO0lBQzFFLE1BQU0sTUFBTSxHQUFHO1FBQ1gsT0FBTyxFQUFFLGlCQUFhO1FBQ3RCLElBQUksRUFBRSxjQUFVO0tBQ25CLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFZCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFzQixDQUFBO0lBQ25FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsT0FBTyxDQUFDLFFBQVEscUJBQXFCLENBQUMsQ0FBQTtLQUMvRTtJQUVELE9BQU8sTUFBTSxDQUFDLFFBQStCLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUEifQ==