
export default function productDetailsLayout ({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <h2>Product Layout</h2>
        </>
    );
}