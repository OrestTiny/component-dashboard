export const segmentedToggleAlignmentData = {
  id: 'segmentedToggleAlignment',
  name: 'Segmented Toggle Alignment',
  category: 'Form',
  description: 'SegmentedToggleAlignment allows the user to select alignment options through a segmented toggle interface with visual alignment controls',
  sections: [
    {
      id: 'basic',
      title: 'Basic Usage',
      description: 'Simple example of using SegmentedToggleAlignment with basic alignment options',
      image: `${process.env.PUBLIC_URL}/assets/images/segmentedToggleAlignment/basic.png`,
      code: `import React, { useState } from 'react';
import { SegmentedToggleAlignment } from './components/SegmentedToggleAlignment';

function App() {
  const [alignment, setAlignment] = useState('left');

  return (
    <div>
      <SegmentedToggleAlignment
        value={alignment}
        onChange={setAlignment}
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' }
        ]}
      />
    </div>
  );
}`
    },
  ]
}; 