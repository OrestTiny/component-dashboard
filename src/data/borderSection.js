export const borderSectionData = {
  id: 'borderSection',
  name: 'Border Section',
  category: 'Form',
  description: 'Border Section allows the user to select a value from a range',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/borderSection/basic.png`,
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