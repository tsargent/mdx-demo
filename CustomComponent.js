import {Button} from 'react-native';
import React from 'react';
function CustomComponent({title, ...props}) {
  return <Button title={title} {...props} />;
}

export default CustomComponent;
