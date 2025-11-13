/**
 * @file Composant Footer
 * @module components/layout/Footer
 */

import type { JSX } from 'react';
import styles from './Footer.module.css';
import { DEFAULTS, type Props } from './Footer.types';
import { Heading, Separator, Text } from '@/components/ui';
import { FOOTER_ICONS } from './Footer.constants';

/**
 * 
 * @returns Composant **Footer** - Élément interactif fondamental du design system.
 * 
 * Affiche les informations principales du projet, les liens de contact
 * (email, LinkedIn, GitHub) et les mentions légales avec copyright.
 * 
 * @component
 * @version 1.1.0
 * @since 2025-11_13
 * @author Seb-Prod
 * 
 * @param {Props} props - Les propriétés du composant.
 * 
 * @returns {JSX.Element} Élément bouton React.
 * 
 * @example
 * <Footer/>
 * 
 * @see {@link Props} Pour les types détaillés des propriétés
 * @see {@link DEFAULTS} Pour les valeurs par défaut
 */

const Footer = (inputProps: Props): JSX.Element => {
  const props = { ...DEFAULTS, ...inputProps };
  const { appName, description, email, linkedIn, gitHub, year } = props

  const currentYear = year || new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        
        <div className={styles.content}>

          <div className={styles.project}>
            <Heading as="h2" variant='neutral'>{appName}</Heading>
            <Text as="p" variant='neutral'>{description}</Text>
          </div>
          <Separator orientation='vertical'/>
          <div className={styles.contact}>
            <Heading as="h4" variant="neutral">Contact</Heading>
            <div className={styles.links}>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className={styles.link}
                  aria-label="Email"
                >
                  {FOOTER_ICONS.email}
                  Email
                </a>
              )}

              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label="LinkedIn"
                >
                  {FOOTER_ICONS.linkedIn}
                  LinkedIn
                </a>
              )}

              {gitHub && (
                <a
                  href={gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label="GitHub"
                >
                  {FOOTER_ICONS.github}
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
        <Separator color='secondary'/>
        <div className={styles.bottom}>
          <a href="/mentions-legales" className={styles.legal}>
            Mentions légales
          </a>
          <Text variant='neutral'>© {currentYear} {appName}. Tous droits réservés.</Text>
        </div>
    </footer>
  );
};

export default Footer;

