/**
 * @file Composant DocPageContainer - Conteneur principal des pages de documentation.
 * @module features/documentation/doc-blocks/DocPageContainer
 */

import { useState, type JSX, type ReactNode } from "react";
import styles from './DocPageContainer.module.css';
import DocHeader from "../DocHeader/DocHeader";
import { Accordion, AccordionSection } from "@/components/ui/Accordion";
import UsageExample from "../UsageExample";
import type { Combination, Params } from "../../utils/showcaseHelpers";
import ComponentPlayground from "../ComponentPlayground";
import { DocProps } from '..';
import type { PropInfo } from "../../types/types";

type DocPageContainerProps<T extends Params> = {
    /** Titre de la page de documentation. */
    title: string;
    /** Description au format Markdown affichée sous le titre. */
    description: string;
    /** Contenu personnalisé à insérer dans l'accordion (remplace la section Props par défaut). */
    children?: ReactNode;
    /** Code d'exemple d'utilisation du composant au format string. */
    usageExample?: string;
    /** Objet définissant les paramètres de variation et leurs valeurs possibles. */
    params: T;
    /** Fonction retournant le JSX du composant à prévisualiser. */
    renderPreview?: (combo: Combination<T>) => JSX.Element;
    /** Fonction générant le code TSX correspondant aux paramètres. */
    generateCode?: (combo: Combination<T>) => string;
    /** Liste des propriétés du composant à documenter dans le tableau. */
    props?: readonly PropInfo[];
}

/**
 * Composant DocPageContainer - Structure de page de documentation complète.
 * 
 * Fournit une mise en page standardisée pour les pages de documentation de composants
 * incluant un en-tête, un accordion avec sections pour les props, l'exemple d'utilisation
 * et un playground interactif. Gère l'état des paramètres de variation pour le playground.
 * 
 * @component
 * @version 1.0.0
 * @since 2025-10-20
 * @author Seb-Prod
 * 
 * @template T - Type des paramètres de variation étendant Params.
 * 
 * @param {DocPageContainerProps<T>} props - Les propriétés du composant.
 * @param {string} props.title - Titre principal de la documentation.
 * @param {string} props.description - Description Markdown du composant.
 * @param {ReactNode} [props.children] - Sections personnalisées pour remplacer la section Props par défaut.
 * @param {string} props.usageExample - Code d'exemple formaté en string.
 * @param {T} props.params - Définition des variations possibles (ex: {variant: ['primary', 'secondary']}).
 * @param {Function} props.renderPreview - Fonction de rendu du composant dans le playground.
 * @param {Function} props.generateCode - Fonction générant le code source correspondant.
 * @param {readonly PropInfo[]} [props.props] - Informations sur les props pour le tableau de documentation.
 * 
 * @returns {JSX.Element} La page de documentation complète avec toutes ses sections.
 * 
 * @example
 * // Documentation standard avec tableau de props
 * <DocPageContainer
 *   title="Button"
 *   description="Composant **Button** personnalisable"
 *   usageExample="<Button variant='primary'>Click me</Button>"
 *   params={{ variant: ['primary', 'secondary'], size: ['small', 'large'] }}
 *   renderPreview={(combo) => <Button {...combo}>Test</Button>}
 *   generateCode={(combo) => `<Button variant="${combo.variant}">Test</Button>`}
 *   props={buttonProps}
 * />
 * 
 * @example
 * // Avec sections personnalisées
 * <DocPageContainer
 *   title="AdvancedComponent"
 *   description="Composant avancé"
 *   usageExample="<AdvancedComponent />"
 *   params={{ theme: ['light', 'dark'] }}
 *   renderPreview={(combo) => <AdvancedComponent {...combo} />}
 *   generateCode={(combo) => `<AdvancedComponent theme="${combo.theme}" />`}
 * >
 *   <AccordionSection label="Props Avancées">
 *     <CustomPropsDoc />
 *   </AccordionSection>
 *   <AccordionSection label="Hooks Associés">
 *     <HooksDoc />
 *   </AccordionSection>
 * </DocPageContainer>
 * 
 * @see {@link DocPageContainerProps}
 * @see {@link DocHeader}
 * @see {@link DocProps}
 * @see {@link UsageExample}
 * @see {@link ComponentPlayground}
 */
const DocPageContainer = <T extends Params>({
    title,
    description,
    usageExample,
    children,
    params,
    props,
    renderPreview,
    generateCode
}: DocPageContainerProps<T>): JSX.Element => {
    const initialParams = params
        ? (Object.fromEntries(
            Object.keys(params).map((key) => [key, params[key][0]])
        ) as Combination<T>)
        : ({} as Combination<T>);

    const [selectedParams, setSelectedParams] =
        useState<Combination<T>>(initialParams);

    return (
        <div className={styles.container}>
            <DocHeader title={title} description={description} />
            <hr />
            <Accordion variant="info">
                {children}
                {!children && props && (
                    <AccordionSection label="Props">
                        <DocProps props={props} />
                    </AccordionSection>
                )}
                {usageExample && (
                    <AccordionSection label="Example d'utilisation">
                        <UsageExample code={usageExample} />
                    </AccordionSection>
                )}
                {renderPreview && generateCode && (
                    <AccordionSection label="Playground interactif" defaultOpen>
                        <ComponentPlayground
                            params={params}
                            renderPreview={renderPreview}
                            selectedParams={selectedParams}
                            setSelectedParams={setSelectedParams}
                            generateCode={generateCode}
                        />
                    </AccordionSection>
                )}

            </Accordion>
        </div>
    );
}

export default DocPageContainer;