
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div>layout here</div>
            {children}
        </>
    )
}