# Component Data Structure

This folder contains data files for each component in the dashboard.

## How to Add a New Component

1. **Create a new data file** (e.g., `src/data/newcomponent.js`):

```javascript
export const newComponentData = {
  id: "newcomponent", // Unique ID for the component
  name: "NewComponent", // Display name
  category: "Form", // Category (Form, Layout, UI, etc.)
  description: "Component description here",
  sections: [
    {
      id: "basic", // Unique section ID
      title: "Basic Usage", // Section title
      description: "Section description",
      code: `// Your component code here`,
      image: `${process.env.PUBLIC_URL}/assets/images/newcomponent-preview.png`
    }
    // Add more sections as needed
  ]
}
```

2. **Add the component to index.js**:

```javascript
import { newComponentData } from "./newcomponent"

export const componentData = [
  colorInputData,
  buttonData,
  newComponentData // Add your new component here
]
```

3. **Add component images** to `src/assets/images/` folder

## File Structure

```
src/data/
├── index.js          # Main export file
├── colorinput.js     # ColorInput component data
├── button.js         # Button component data
└── README.md         # This file
```

## Component Data Format

- **id**: Unique identifier (lowercase, no spaces)
- **name**: Display name of the component
- **category**: Component category for grouping
- **description**: Brief description of the component
- **sections**: Array of code examples and demonstrations
  - **id**: Unique section identifier
  - **title**: Section title
  - **description**: Section description
  - **code**: Code example (string)
  - **image**: Path to preview image
