export const segmentedToggleAlignmentData = {
  id: 'segmentedToggleAlignment',
  name: 'Segmented Toggle Alignment',
  category: 'Form',
  description: 'SegmentedToggleAlignment allows the user to select alignment options through a segmented toggle interface with visual alignment controls',
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
      name: 'class',
      description: 'content_layout_alignment'
    },
    {
      name: 'name',
      description: 'name for the segmented toggle alignment field'
    },
    {
      name: 'addClass',
      description: 'col-2, col-3, col-4'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleAlignment/basic.png`,
      code: `
@include('widget::components.design-parts.position', [
    'position_title' => 'title',
    'position_desc' => 'desc',
    'addClass' => 'mainClass',
    'class' => 'content_layout_alignment',
    'name' => 'name',
    'custom_positions' => [
        [
            "text" => 'Left',
            "value" => "left"
        ],
        [
            "text" => 'Center',
            "value" => "center"
        ],
        [
            "text" => 'Right',
            "value" => "right"
        ]
    ]
])
`
    },
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleAlignment/secondary.png`,
      code: `
@include('widget::components.design-parts.position', [
    'position_title' => 'title',
    'position_desc' => 'desc',
    'name' => 'name',
    'addClass' => 'col-2',
    'custom_positions' => [
        [
            "text" => 'Option 1',
            "value" => "option_1"
        ],
        [
            "text" => 'Option 2',
            "value" => "option_2"
        ]
    ]
])
`
    },    
    {
      id: 'tertiary',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleAlignment/3.png`,
      code: `
@include('widget::components.design-parts.position', [
    'position_title' => 'title',
    'position_desc' => 'desc',
])
`
    },    
  ]
}; 