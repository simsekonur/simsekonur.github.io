import React from 'react';

export default function Section({ id, tag, title, children }) {
    return (
        <section id={id} className="section-wrapper">
            <div className="section-header-box">
                {tag && <span className="section-tag">{tag}</span>}
                {title && <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>{title}</h2>}
                <div className="section-line" />
            </div>
            {children}
        </section>
    );
}
