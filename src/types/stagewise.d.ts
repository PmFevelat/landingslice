/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@stagewise/toolbar-next' {
  export const StagewiseToolbar: React.ComponentType<{
    config?: {
      plugins?: any[]
    }
  }>
}

declare module '@stagewise-plugins/react' {
  export const ReactPlugin: any
} 