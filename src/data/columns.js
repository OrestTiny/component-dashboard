export const columnsData = {
  id: 'columns',
  name: 'Columns',
  category: 'Form',
  description: 'Columns allows the user to enter a number',
  parameters: [],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/columns/basic.png`,
      code: `
@include('widget::components.popup.sections-styles.common-components.section-options')
    `
    },
  ]
}; 