export const colorPickerData = {
  id: 'colorPicker',
  name: 'Color Picker',
  category: 'Form',
  description: 'Color Picker allows the user to select a color',
  parameters: [
    {
      name: 'title',
      description: 'Title for the color picker field'
    },
    
    {
      name: 'desc',
      description: 'Description for the color picker field'
    },
    {
      name: 'color_class',
      description: 'Class for the color picker field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/colorPicker/basic.png`,
      code: `
@include('widget::components.design-parts.block_color', [
    'title' => 'title',
    'desc' => 'desc',
    'color_class' => 'class',
])
    `
    },
  ]
}; 