import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import { FaEye, FaDoorOpen } from 'react-icons/fa';
import styles from './styles.module.css';

const ICON_MAP = {
  overview: <FaEye />,
  opening:  <FaDoorOpen />,
  // ❌ No incluir glossary, faq, shortcuts aquí
};

const EXCLUDED_DOCS = ['faq', 'glossary', 'shortcuts'];

export default function DocSidebarItem({ item, ...props }) {
  const key = item.docId ?? item.link?.slug;
  const showIcon = key && !EXCLUDED_DOCS.includes(key);
  const iconElement = showIcon ? ICON_MAP[key] : null;

  return (
    <div className={styles.sidebarItem}>
      {iconElement && (
        <span className={styles.sidebarIcon}>{iconElement}</span>
      )}
      <OriginalDocSidebarItem item={item} {...props} />
    </div>
  );
}
