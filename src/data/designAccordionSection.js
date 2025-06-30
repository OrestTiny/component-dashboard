export const designAccordionSectionData = {
  id: 'designAccordionSection',
  name: 'Design Accordion Section',
  category: 'Form',
  description: 'Design Accordion Section allows the user to select a value from a range',
  parameters: [
    {
      name: 'title',
      description: 'Description for the heading field'
    },
    {
      name: 'desc',
      description: 'Description for the heading field'
    },
    {
      name: 'type',
      description: 'accordion'
    },
    {
      name: 'id',
      description: 'ID - must be unique'
    },    
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/designAccordionSection/basic.png`,
      code: `           
@include('widget::components.template-parts.tile-group',
    ['tiles' => [
        [
            'type' => 'accordion',
            'title' => 'title',
            'desc' => 'desc',
            'id' => 'w-for-example-unique-id',
        ],
        [
            'type' => 'accordion',
            'title' => 'title',
            'desc' => 'desc',
            'id' => 'w-for-example-unique-id',
        ],
    ]])

<div class="w-for-example-unique-id tile-layout" style="padding: 0;">
  {{-- content --}}
</div>


<div class="w-for-example-unique-id tile-layout" style="padding: 0;">
  {{-- content --}}
</div>
    `
    },
  ]
}; 