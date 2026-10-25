import { useEffect } from 'react';
import { config } from '../content/config';

export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${config.role}` : config.siteTitle;
  }, [title]);
}
