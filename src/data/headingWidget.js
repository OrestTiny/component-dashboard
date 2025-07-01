export const headingWidgetData = {
  id: 'headingWidget',
  name: 'Heading Widget',
  category: 'Form',
  description: 'Heading Widget allows the user to enter a heading',
  parameters: [
    {
      name: 'w_btn_class',
      description: 'Title for the heading field'
    },
    
    {
      name: 'w_title',
      description: 'Description for the heading field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/headingWidget/basic.png`,
      code: `
@include('widget::components.design-parts.widget_header', [
    'w_title' => 'widgetName_item_title',
    'w_btn_class' => 'js-repeater-field__content-btn',
])
    `
    },
  ]
}; 