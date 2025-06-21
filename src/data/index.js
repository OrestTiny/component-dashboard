import { segmentedToggleAlignmentData } from './segmentedToggle';
import { textEditorData } from './textEditor';
import { textInputData } from './textInput';
import { rangeData } from './range';
// Export all component data
export const componentData = [
  textInputData,
  textEditorData,
  segmentedToggleAlignmentData,
  rangeData,
];

// You can also export individual components
export { segmentedToggleAlignmentData, textEditorData, textInputData, rangeData }; 