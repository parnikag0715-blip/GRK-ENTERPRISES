import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../data/site.js';

export default function Seo({ title, description }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = title;
    const set = (sel, attr, val) => document.head.querySelector(sel)?.setAttribute(attr, val);
    const url = `${SITE_URL || 'https://YOUR-DOMAIN.example'}${pathname}`;
    set('meta[name="description"]', 'content', description);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', description);
    set('meta[property="og:url"]', 'content', url);
    set('link[rel="canonical"]', 'href', url);
  }, [title, description, pathname]);
  return null;
}
