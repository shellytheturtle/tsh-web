import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import '../sass/home.scss';
import { XLink } from './links';

export const Status = () => {
  const [operational, setOperational] = useState(true);

  useEffect(() => {
    // fetch status
    try {
      fetch('https://api.bencuan.me/status')
        .then(response => response.text())
        .then(data => {
          setOperational(data === 'OK');
        });
    } catch {
      setOperational(false);
    }
  });

  return (
    <div className="nav-status">
      <XLink href="https://status.bencuan.me" label="status" className="status-link" hasArrow={false}>
        {operational ? 'all systems operational' : 'service outage - click for details'}
      </XLink>
      <FontAwesomeIcon icon={faCircle} className={`status-circle ${operational ? 'status-green' : 'status-red'}`} />
    </div>
  );
};
