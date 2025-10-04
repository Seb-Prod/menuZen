
export const TEMPLATE_CONFIGS = {
  component: [
    {
      template: 'component/component.tsx.template',
      filename: (name) => `${name}.tsx`
    },
    {
      template: 'component/styles.module.css.template',
      filename: (name) => `${name}.module.css`
    },
    {
      template: 'component/index.ts.template',
      filename: () => 'index.ts'
    }
  ],
  
  ui: [
    {
      template: 'ui/ui-component.tsx.template',
      filename: (name) => `${name}.tsx`
    },
    {
      template: 'ui/ui-styles.module.css.template',
      filename: (name) => `${name}.module.css`
    },
    {
      template: 'ui/ui-index.ts.template',
      filename: () => 'index.ts'
    },
  ],

  hook: [
    {
      template: 'hook/hook.ts.template',
      filename: (name) => `use${name}.ts`
    },
    {
      template: 'hook/hook-index.ts.template',
      filename: () => 'index.ts'
    }
  ],

  page: [
    {
      template: 'page/page.tsx.template',
      filename: (name) => `${name}Page.tsx`
    },
    {
      template: 'page/page-styles.module.css.template',
      filename: (name) => `${name}Page.module.css`
    },
    {
      template: 'page/page-index.ts.template',
      filename: () => 'index.ts'
    }
  ],

  feature: [
    {
      template: 'feature/feature-index.ts.template',
      filename: () => 'index.ts'
    }
  ]
};