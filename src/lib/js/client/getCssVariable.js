export function getCssVariableValue(variableName) {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}