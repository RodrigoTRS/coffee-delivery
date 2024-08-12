interface ErrorMessageProps {
    message: string | undefined
}

export function ErrorMessage( {
    message
}: ErrorMessageProps) {
    return (
        <p className="text-sm text-rose-400">
            {message}
        </p>
    )
}