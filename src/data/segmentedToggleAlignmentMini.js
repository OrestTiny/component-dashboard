export const segmentedToggleAlignmentMiniData = {
  id: 'segmentedToggleAlignmentMini',
  name: 'Segmented Toggle Alignment Mini',
  category: 'Form',
  description: 'SegmentedToggleAlignmentMini allows the user to select an option from a list of options',
  parameters: [
    {
      name: 'title',
      description: 'Title for the segmented toggle alignment field'
    },
    {
      name: 'desc',
      description: 'Description for the segmented toggle alignment field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleAlignmentMini/basic.png`,
      code: `
@include('widget::components.design-parts.switcher', [
    'title_s' => 'title',
    'desc_s' => 'desc',
    'switcher_type' => 'primary-color',
    'custom_options' => [
            [
                'value' => 'left'
            ],
            [
                'value' => 'center'
            ],
            [
                'value' => 'right'
            ]
    ]
])
`
    },
  ]
}; 