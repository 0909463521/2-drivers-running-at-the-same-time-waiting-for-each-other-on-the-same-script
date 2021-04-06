"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function selectOption(html, elem) {
    elem.selected = true;
    let parent = elem.parentElement;
    while (parent && parent.tagName.toLowerCase() !== 'select') {
        parent = parent.parentElement;
    }
    parent.dispatchEvent(new Event('input', { bubbles: true }));
    parent.dispatchEvent(new Event('change', { bubbles: true }));
}
exports.default = selectOption;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0T3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NjcmlwdHMvc2VsZWN0T3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBd0IsWUFBWSxDQUFFLElBQWlCLEVBQUUsSUFBdUI7SUFDNUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7SUFFcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQTRCLENBQUE7SUFDOUMsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFDeEQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUE0QixDQUFBO0tBQy9DO0lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNoRSxDQUFDO0FBVkQsK0JBVUMifQ==