export const colorPickerSingleData = {
  id: 'colorPickerSingle',
  name: 'Color Picker Single',
  category: 'Form',
  description: 'Color Picker Single allows the user to select a single color',
  parameters: [
    {
      name: 'color_class',
      description: 'Class for the color picker field'
    },
    {
      name: 'key',
      description: 'Key for the color picker field'
    },
    {
      name: 'hide_heading',
      description: 'Hide heading for the color picker field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/colorPickerSingle/basic.png`,
      code: `
@include('widget::components.design-parts.color', [
    'color_class' => 'class',
    'key' => 'key,
    'hide_heading' => true
])
    `
    },
  ]
}; 