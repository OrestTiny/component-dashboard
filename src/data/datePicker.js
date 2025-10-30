export const datePickerData = {
  id: 'datePicker',
  name: 'Date Picker',
  category: 'Form',
  description: 'Date Picker allows the user to select a date',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/datePicker/1.png`,
      code: `
@include('widget::components.design-parts.date', [
    'title' => 'title',
    'desc' => 'desc',
    'name' => 'name',
])
    `
    },
  ]
}; 