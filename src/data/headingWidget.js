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
    },
    {
      name: 'w_icon',
      description: 'path - "/assets/images/section/*.svg"'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/headingWidget/basic.png`,
      code: `
@include('widget::components.design-parts.widget_header', [
    'w_icon' => 'widgetName.svg',
    'w_title' => 'widgetName',
])
    `
    },
    {
      id: '2',
      image: `${process.env.PUBLIC_URL}/assets/images/headingWidget/2.png`,
      code: `
@include('widget::components.design-parts.widget_header', [
    'w_btn_class' => 'js-repeater-field__content-btn',
    'w_title' => $pre . '_title',
])
    `
    },
    {
      id: '3',
      image: `${process.env.PUBLIC_URL}/assets/images/headingWidget/3.png`,
      code: `
@include('widget::components.design-parts.widget_header', [
    'w_btn_class' => 'js-repeater-field__content-btn-inner',
    'w_title' => $pre . '_item_inner_title',
])
    `
    },
  ]
}; 