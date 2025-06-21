export const switcherData = {
  id: 'switcher',
  name: 'Switcher',
  category: 'Form',
  description: 'Switcher allows the user to select a value from a list of options',
  parameters: [
    {
      name: 'title_s',
      description: 'Title for the text range field'
    },
    {
      name: 'desc_s',
      description: 'Description for the text range field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/switcher/basic.png`,
      code: `
@include('widget::components.design-parts.switcher_secondary', [
    'title_s' => 'title',
    'desc_s' => 'desc',
    'name' => 'name',
])
    `
    },
  ]
}; 