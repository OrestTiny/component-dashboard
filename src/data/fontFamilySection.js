export const fontFamilySectionData = {
  id: 'fontFamilySection',
  name: 'Font Family Section',
  category: 'Form',
  description: 'Font Family Section allows the user to select a value from a range',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/fontFamilySection/basic.png`,
      code: `
@include('widget::components.design-parts.range_unit', [
    'title' => 'title',
    'items' => [
        [
            'name' => 'name',
            'min_max' => ['0', '340'],
            'unit' => 'px'
        ]
    ]
])
    `
    },
  ]
}; 