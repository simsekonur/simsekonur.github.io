export default function Section({ title, children }) {
    return (
        <section style={{ width: '100%', maxWidth: '900px', margin: '0 auto 40px', padding: '0 16px' }}>
            {title && (
                <h2 style={{
                    color: '#4A90E2',
                    fontSize: '13px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    borderBottom: '1px solid #3a4056',
                    paddingBottom: '8px',
                    marginBottom: '20px'
                }}>{title}</h2>
            )}
            {children}
        </section>
    );
}

