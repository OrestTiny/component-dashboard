export const segmentedToggleMiniData = {
  id: 'segmentedToggleMini',
  name: 'Segmented Toggle Mini',
  category: 'Form',
  description: 'SegmentedToggleMini allows the user to select an option from a list of options',
  parameters: [
    {
      name: 'title',
      description: 'Title for the segmented toggle alignment field'
    },
    {
      name: 'desc',
      description: 'Description for the segmented toggle alignment field'
    },
    {
      name: 'addit_class',
      description: ''
    },
    {
      name: 'img_size',
      description: 'image name - "example.svg|example.png|...", default path - "/assets/images/image-radios/*.svg|*.png..."'
    },
    {
      name: 'svg',
      description: 'svg code'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleImage/basic.png`,
      code: `
@include('widget::components.design-parts.image_radio', [
  'title' => 'title',
  'desc' => 'desc',
  'input_name' => 'name',
  'img_size' => 46,
  'options' => [
    [
        'value' => 'value',
        'text' => 'text',
        'svg' => 'svg',
      ],
      [
          'value' => 'value',
          'text' => 'text',
          'svg' => 'svg',
      ],
  ],
])
`
    },
  ]
}; 