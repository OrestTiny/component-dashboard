import { segmentedToggleAlignmentData } from './segmentedToggle';
import { textEditorData } from './textEditor';
import { textInputData } from './textInput';
import { rangeData } from './range';
import { switcherData } from './switcher';
import { uploadFileData } from './uploadFile';
// Export all component data
export const componentData = [
  textInputData,
  textEditorData,
  segmentedToggleAlignmentData,
  rangeData,
  switcherData,
  uploadFileData,
];

// You can also export individual components
export { segmentedToggleAlignmentData, textEditorData, textInputData, rangeData, switcherData, uploadFileData }; 