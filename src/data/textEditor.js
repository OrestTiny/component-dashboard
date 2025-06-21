export const textEditorData = {
  id: 'texteditor',
  name: 'Text Editor',
  category: 'Form',
  description: 'TextEditor allows the user to edit text with a rich text editor',
  parameters: [
    {
      name: 'title_edit',
      description: 'Title for the text editor field'
    },
    {
      name: 'desc_edit',
      description: 'Description text for the text editor field'
    },
    {
      name: 'editor_class',
      description: 'CSS class name for styling the editor'
    },
    {
      name: 'editor_name',
      description: 'Name attribute for the editor input (e.g., "k-contentHtml")'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/textEditor/basic.png`,
      code: `
@include('widget::components.design-parts.text_editor', [
    'title_edit' => 'title',
    'desc_edit' => 'description',
    'editor_name' => 'contentHtml',
])`
    },
  ]
}; 