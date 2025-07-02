export const segmentedToggleMiniData = {
  id: 'segmentedToggleMini',
  name: 'Segmented Toggle Mini',
  category: 'Form',
  description: 'SegmentedToggleMini allows the user to select an option from a list of options',
  parameters: [
    {
      name: 'title_s',
      description: 'Title for the segmented toggle alignment field'
    },
    {
      name: 'desc_s',
      description: 'Description for the segmented toggle alignment field'
    },
    {
      name: 'switcher_type',
      description: 'primary-color, ...'
    },{
      name: 'class',
      description: 'Class for the segmented toggle alignment field'
    }

  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleMini/basic.png`,
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
    {
      id: 'secondary',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleMini/secondary.png`,
      code: `
@include('widget::components.design-parts.switcher', [
    'title_s' => 'title',
    'desc_s' => 'desc',
    'switcher_type' => 'primary-color',
    'custom_options' => [
            [
                'value' => '1',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                            <path d="M11 5.94434V17.4443" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M5.5 11.9443H17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>'
            ],
            [
                'value' => '2',
                'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                                <path style="fill:none !important" d="M5.5 9.94434L11.3586 15.8029C11.4367 15.881 11.5633 15.881 11.6414 15.8029L17.5 9.94434" stroke="black" stroke-width="2" stroke-linecap="round"/>
                            </svg>'
            ],
    ]
])
`
    },
    {
      id: 'tertiary',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleMini/3.png`,
      code: `
@include('widget::components.design-parts.switcher_responsive', [
    'title' => 'title',
    'desc' => 'desc',
])
`
    },    
  ]
}; 