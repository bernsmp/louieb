'use client'

export type DeviceType = 'desktop' | 'tablet' | 'mobile'

interface DevicePreviewToggleProps {
  value: DeviceType
  onChange: (device: DeviceType) => void
}

export function DevicePreviewToggle({ value, onChange }: DevicePreviewToggleProps) {
  return (
    <div className="device-preview-toggle">
      <button
        className={`device-preview-toggle__btn ${value === 'desktop' ? 'device-preview-toggle__btn--active' : ''}`}
        onClick={() => onChange('desktop')}
        title="Desktop view"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
        <span>Desktop</span>
      </button>

      <button
        className={`device-preview-toggle__btn ${value === 'tablet' ? 'device-preview-toggle__btn--active' : ''}`}
        onClick={() => onChange('tablet')}
        title="Tablet view"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
        <span>Tablet</span>
      </button>

      <button
        className={`device-preview-toggle__btn ${value === 'mobile' ? 'device-preview-toggle__btn--active' : ''}`}
        onClick={() => onChange('mobile')}
        title="Mobile view"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
        <span>Mobile</span>
      </button>
    </div>
  )
}
