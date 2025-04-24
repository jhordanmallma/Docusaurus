import React from 'react';
import OriginalCategory from '@theme-original/DocSidebarItem/Category';
import {
  FaCubes, FaTerminal, FaFileCode, FaNetworkWired, FaTachometerAlt,
  FaMemory, FaAppStore, FaLock, FaLightbulb
} from 'react-icons/fa';
import styles from './styles.module.css';

const ICON_MAP = {
  elements:    <FaCubes />,
  console:     <FaTerminal />,
  sources:     <FaFileCode />,
  network:     <FaNetworkWired />,
  performance: <FaTachometerAlt />,
  memory:      <FaMemory />,
  application: <FaAppStore />,
  security:    <FaLock />,
  lighthouse:  <FaLightbulb />,
};

export default function DocSidebarCategory({ item, ...props }) {
  // Busca el slug de la categoría: puede estar en item.link?.slug o como fallback en item.label
  const slugFromLink = item.link?.slug;
  const slugFromLabel = item.label?.toLowerCase().match(/\((.*?)\)/)?.[1]; // extrae "console" de "Consola (Console)"

  const slug = slugFromLink || slugFromLabel;
  const icon = ICON_MAP[slug];

  console.log('CATEGORY SLUG:', slug, '→ tiene icono?', !!icon);

  return (
    <div className={styles.sidebarItem}>
      {icon && <span className={styles.sidebarIcon}>{icon}</span>}
      <OriginalCategory item={item} {...props} />
    </div>
  );
}
