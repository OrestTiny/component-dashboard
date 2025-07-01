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
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleAlignment/basic.png`,
      code: `
@include('widget::components.design-parts.position', [
    'position_title' => 'title',
    'position_desc' => 'desc',
    'class' => 'content_layout_alignment',
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
  ]
}; 