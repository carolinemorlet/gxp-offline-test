import { useState } from 'react';
import NavigatorOnline from 'react-navigator-online';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ModelToast } from './ModelToast';

toast.configure();

const ReactNavigation = () => {
  const [status] = useState({
    online: 'Vous êtes en ligne',
    offline: 'Vous êtes hors ligne',
  });

  const handleChange = (msg) => {
    console.log(msg);
    if (msg) {
      toast.success(status.online, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnVisibilityChange: true,
        draggable: true,
        pauseOnHover: true,
      });
    } else {
      toast.error(status.offline, {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnVisibilityChange: true,
        draggable: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div>
      <NavigatorOnline onChange={handleChange} />
    </div>
  );
};

export default ReactNavigation;
