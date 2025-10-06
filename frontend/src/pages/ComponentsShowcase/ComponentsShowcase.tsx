import { useState } from "react";
import Button from "../../components/ui/Button";
import Spinner from "../../components/ui/Spinner";
import styles from "./ComponentsShowcase.module.css";

const ComponentsShowcase = () => {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const copyToClipboard = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const codeSnippets = {
        button: '<Button variant="primary" size="medium">Cliquez-moi</Button>',
        spinner: '<Spinner>Chargement...</Spinner>',
        spinnerWarning: '<Spinner variant="warning">Chargement...</Spinner>',
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Aperçu des composants</h1>
            </div>

            {/* Boutons - Variantes */}
            <section className={styles.section}>
                <h2>Boutons - Variantes</h2>

                <div className={styles.componentBlock}>
                    <h3>Variantes</h3>
                    <div className={styles.preview}>
                        <h4>primary</h4>
                        <div className={styles.row}>
                            <Button variant="primary" size="small">Small</Button>
                            <Button variant="primary" size="medium">Medium</Button>
                            <Button variant="primary" size="large">Large</Button>
                            <Button variant="primary" size="large" disabled>Désactivé</Button>
                        </div>
                        <h4>secondary</h4>
                        <div className={styles.row}>
                            <Button variant="secondary" size="small">Small</Button>
                            <Button variant="secondary" size="medium">Medium</Button>
                            <Button variant="secondary" size="large">Large</Button>
                            <Button variant="secondary" size="large" disabled>Désactivé</Button>
                        </div>
                        <h4>warning</h4>
                        <div className={styles.row}>
                            <Button variant="warning" size="small">Small</Button>
                            <Button variant="warning" size="medium">Medium</Button>
                            <Button variant="warning" size="large">Large</Button>
                            <Button variant="warning" size="large" disabled>Désactivé</Button>
                        </div>
                        <h4>neutral</h4>
                        <div className={styles.row}>
                            <Button variant="neutral" size="small">Small</Button>
                            <Button variant="neutral" size="medium">Medium</Button>
                            <Button variant="neutral" size="large">Large</Button>
                            <Button variant="neutral" size="large" disabled>Désactivé</Button>
                        </div>
                    </div>
                    <CodeBlock
                        code={codeSnippets.button}
                        onCopy={() => copyToClipboard(codeSnippets.button, 'primary')}
                        copied={copiedCode === 'primary'}
                    />
                    <div className={styles.stateNote}>
                            💡 Survolez les boutons pour voir l'effet hover
                        </div>
                </div>
            </section>

            {/* Spinners */}
            <section className={styles.section}>
                <h2>Spinners</h2>

                <div className={styles.componentBlock}>
                    <h3>Variantes</h3>
                    <div className={styles.preview}>
                        <div className={styles.row}>
                            <Spinner size="small">Primary</Spinner>
                            <Spinner variant="warning" size="medium">Warning</Spinner>
                            <Spinner variant="secondary" size="large">Warning</Spinner>
                            <Spinner variant="neutral">Neutral</Spinner>
                        </div>
                    </div>
                    <CodeBlock
                        code={codeSnippets.spinner}
                        onCopy={() => copyToClipboard(codeSnippets.spinner, 'spinner')}
                        copied={copiedCode === 'spinner'}
                    />
                </div>
            </section>

            {/* Layouts */}
            <section className={styles.section}>
                <h2>Exemples de Layout</h2>

                <div className={styles.componentBlock}>
                    <h3>Actions horizontales</h3>
                    <div className={styles.preview}>
                        <div className={styles.layoutExample}>
                            <Button variant="secondary">Annuler</Button>
                            <Button variant="primary">Confirmer</Button>
                        </div>
                    </div>
                    <CodeBlock
                        code={`<div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
  <Button variant="secondary">Annuler</Button>
  <Button variant="primary">Confirmer</Button>
</div>`}
                        onCopy={() => copyToClipboard('layout1', 'layout1')}
                        copied={copiedCode === 'layout1'}
                    />
                </div>

                <div className={styles.componentBlock}>
                    <h3>Actions avec spinner</h3>
                    <div className={styles.preview}>
                        <div className={styles.layoutExample}>
                            <Spinner variant="neutral">Traitement en cours...</Spinner>
                            <Button variant="secondary" size="small">Annuler</Button>
                        </div>
                    </div>
                    <CodeBlock
                        code={`<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
  <Spinner variant="neutral">Traitement en cours...</Spinner>
  <Button variant="secondary" size="small">Annuler</Button>
</div>`}
                        onCopy={() => copyToClipboard('layout2', 'layout2')}
                        copied={copiedCode === 'layout2'}
                    />
                </div>

                <div className={styles.componentBlock}>
                    <h3>Actions verticales</h3>
                    <div className={styles.preview}>
                        <div className={styles.layoutExampleVertical}>
                            <Button variant="primary" size="large">Action principale</Button>
                            <Button variant="secondary" size="large">Action secondaire</Button>
                            <Button variant="warning" size="large">Action destructive</Button>
                        </div>
                    </div>
                    <CodeBlock
                        code={`<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '200px' }}>
  <Button variant="primary" size="large">Action principale</Button>
  <Button variant="secondary" size="large">Action secondaire</Button>
  <Button variant="warning" size="large">Action destructive</Button>
</div>`}
                        onCopy={() => copyToClipboard('layout3', 'layout3')}
                        copied={copiedCode === 'layout3'}
                    />
                </div>
            </section>
        </div>
    );
};

// Composant CodeBlock
const CodeBlock = ({ code, onCopy, copied }: { code: string; onCopy: () => void; copied: boolean }) => {
    return (
        <div className={styles.codeBlock}>
            <pre className={styles.code}>{code}</pre>
            <button className={styles.copyButton} onClick={onCopy}>
                {copied ? '✓ Copié!' : '📋 Copier'}
            </button>
        </div>
    );
};

export default ComponentsShowcase;