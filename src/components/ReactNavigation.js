import { useState } from 'react';
import NavigatorOnline from 'react-navigator-online';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModelToast } from './ModelToast';

const ReactNavigation = () => {
  const [status] = useState({
    online: 'en ligne',
    offline: 'hors ligne',
  });

  const handleChange = (props) => {
    if (props) {
      toast.success(status.online);
    } else {
      toast.error(status.offline);
    }
  };

  return (
    <div>
      <ModelToast />
      <NavigatorOnline onChange={handleChange} />
    </div>
  );
};

export default ReactNavigation;
