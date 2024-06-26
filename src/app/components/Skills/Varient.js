export const variants = (delay) => {
    return {
        hidden: {
            y: 40,
            x: 40
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        },
    }
}