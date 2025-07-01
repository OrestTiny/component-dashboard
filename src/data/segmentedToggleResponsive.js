export const segmentedToggleResponsiveData = {
  id: 'segmentedToggleResponsive',
  name: 'Segmented Toggle Responsive',
  category: 'Form',
  description: 'SegmentedToggleResponsive allows the user to select an option from a list of options',
  parameters: [
    {
      name: 'title',
      description: 'Title for the segmented toggle alignment field'
    },
    {
      name: 'desc',
      description: 'Description for the segmented toggle alignment field'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleResponsive/basic.png`,
      code: `
@include('widget::components.design-parts.switcher_responsive', [
    'title' => 'title',
    'desc' => 'desc',
])
`
    },
  ]
}; 