export const segmentedToggleTabsData = {
  id: 'segmentedToggleTabs',
  name: 'Segmented Toggle Tabs',
  category: 'Form',
  description: 'SegmentedToggleTabs allows the user to select an option from a list of options',
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
      name: 'input_name',
      description: 'Name for the segmented toggle alignment field'
    },
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleTabs/basic.png`,
      code: `
@include('widget::components.template-parts.tab-group',[
  'title' => 'title',
  'desc' => 'desc',
  'tabs' => [
      [
          'option' => 'options_1',
          'value' => 'options_1',
          'id' => 'example_options_1',
      ],
      [
          'option' => 'options_2',
          'value' => 'options_2',
          'id' => 'example_options_2',
      ],
]])

<div class="tile-column example_options_1">
  {{-- content --}}
</div>

<div class="tile-column example_options_2">
  {{-- content --}}
</div>
`
    },
  ]
}; 