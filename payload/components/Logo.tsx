'use client'

import React from 'react'

export const Logo: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }}>
      <img
        src="/logo/lb-logo.png"
        alt="Louie Bernstein"
        style={{ 
          maxWidth: '180px',
          height: 'auto',
        }}
      />
      <span style={{
        fontSize: '14px',
        fontWeight: 500,
        color: '#0966c2',
        letterSpacing: '0.5px',
      }}>
        Content Admin
      </span>
    </div>
  )
}

export default Logo

