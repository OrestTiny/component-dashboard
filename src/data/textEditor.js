export const textEditorData = {
  id: 'texteditor',
  name: 'TextEditor',
  category: 'Form',
  description: 'TextEditor allows the user to edit text with a rich text editor',
  sections: [
    {
      id: 'basic',
      title: 'Basic Usage',
      description: 'Simple example of using TextEditor with basic parameters',
      image: `${process.env.PUBLIC_URL}/assets/images/textEditor/basic.png`,
      code: `
@include('widget::components.design-parts.text_editor', [
    'title_edit' => 'title',
    'desc_edit' => 'description',
    'name' => 'k-contentHtml',
])`
    },
  ]
}; 