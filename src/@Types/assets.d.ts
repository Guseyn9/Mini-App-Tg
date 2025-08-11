declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}

declare module '*.jpg' {
    const content: any
    export default content
}

interface BeforeInstallPromptEvent extends Event {
    prompt: () => void
    userChoice: Promise<{
        outcome: 'accepted' | 'dismissed'
    }>
}

declare global {
    interface Window {
        beforeinstallprompt: Event
    }
}
