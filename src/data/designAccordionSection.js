export const designAccordionSectionData = {
  id: 'designAccordionSection',
  name: 'Design Accordion Section',
  category: 'Form',
  description: 'Design Accordion Section allows the user to select a value from a range',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/designAccordionSection/basic.png`,
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