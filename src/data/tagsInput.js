export const tagsInputData = {
  id: 'tags_input',
  name: 'Tags Input',
  category: 'Form',
  description: 'Tags allows the user to select multiple values from a list of options',
  parameters: [
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/tagsInput/1.png`,
      code: `
@include('widget::components.design-parts.tags_input', [
    'title' => 'title',
    'desc' => 'desc',
    'name' => 'name',
    'placeholder' => 'add some tags',
])
    `
    },
  ]
}; 