// app/opengraph-image.jsx
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
    return new ImageResponse(
        <div
            style={{
                background: '#0a0e27',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '80px',
                fontFamily: 'monospace',
                backgroundImage:
                    'linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    color: '#4a5568',
                    fontSize: 18,
                    marginBottom: 16,
                }}
            >
                {'> Portfolio loaded'}
            </div>
            <div
                style={{
                    display: 'flex',
                    color: '#00d4ff',
                    fontSize: 64,
                    fontWeight: 700,
                    letterSpacing: '-2px',
                    marginBottom: 16,
                }}
            >
                Pranay Bondugula
            </div>
            <div
                style={{
                    display: 'flex',
                    color: '#8892b0',
                    fontSize: 28,
                    marginBottom: 40,
                }}
            >
                ML Engineer · GenAI · RAG · MLOps
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
                {['99.5% Uptime', '1.2TB/day', '50K+ Devices'].map((m) => (
                    <div
                        key={m}
                        style={{
                            color: '#00ff88',
                            fontSize: 18,
                            fontFamily: 'monospace',
                            display: 'flex',      // ← this is the key fix
                        }}
                    >
                        [ {m} ]
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: 40,
                    right: 80,
                    color: '#4a5568',
                    fontSize: 16,
                }}
            >
                pranayrishith.com
            </div>
        </div>
    )
}