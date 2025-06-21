export const uploadFileData = {
  id: 'uploadFile',
  name: 'Upload File',
  category: 'Form',
  description: 'Upload File allows the user to upload a file',
  parameters: [
    {
      name: 'title',
      description: 'Title for the upload file field'
    },
    {
      name: 'desc',
      description: 'Description for the upload file field'
    },
    {
      name: 'name',
      description: 'Name for the upload file field'
    },
    {
      name: 'class',
      description: 'Class for the upload file field'
    },
    {
      name: 'type',
      description: 'image, pdf, audio, video'
    },
    {
      name: 'drop_title',
      description: 'Drop title for the upload file field'
    },
    {
      name: 'drop_desc',
      description: 'Drop description for the upload file field'
    }
  ],
  sections: [
    {
      id: 'basic',
      image: `${process.env.PUBLIC_URL}/assets/images/uploadFile/basic.png`,
      code: `
@include('widget::components.design-parts.file_upload', [
    'title' => 'title',
    'desc' => "desc",
    'name' => 'name',
])
    `
    },
  ]
}; 