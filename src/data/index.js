import { segmentedToggleAlignmentData } from './segmentedToggle';
import { textEditorData } from './textEditor';
import { textInputData } from './textInput';
import { rangeData } from './range';
import { switcherData } from './switcher';
import { uploadFileData } from './uploadFile';
import { colorPickerData } from './colorPicker';
import { colorPickerSingleData } from './colorPickerSingle';
import { numberInputData } from './numberInput';
import { headingData } from './heading';
// Export all component data
export const componentData = [
  headingData,
  textInputData,
  textEditorData,
  numberInputData,
  segmentedToggleAlignmentData,
  rangeData,
  switcherData,
  uploadFileData,
  colorPickerData,
  colorPickerSingleData,
];

// You can also export individual components
export { segmentedToggleAlignmentData, textEditorData, textInputData, rangeData, switcherData, uploadFileData, colorPickerData, colorPickerSingleData, numberInputData, headingData  }; 