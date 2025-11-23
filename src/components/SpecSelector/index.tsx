import { useState } from 'react'
import { Space, Tag } from '@arco-design/web-react'
import type { ProductSpec } from '../../types'
import './index.css'

interface SpecSelectorProps {
  specs: ProductSpec[]
  onChange?: (selected: Record<string, string>) => void
}

export const SpecSelector = ({ specs, onChange }: SpecSelectorProps) => {
  const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({})

  const handleSelectSpec = (specName: string, option: string) => {
    const newSelected = { ...selectedSpecs, [specName]: option }
    setSelectedSpecs(newSelected)
    onChange?.(newSelected)
  }

  return (
    <div className="spec-selector">
      {specs.map((spec) => (
        <div key={spec.name} className="spec-group">
          <div className="spec-label">{spec.name}</div>
          <Space wrap>
            {spec.options.map((option) => (
              <Tag
                key={option}
                checkable
                checked={selectedSpecs[spec.name] === option}
                onClick={() => handleSelectSpec(spec.name, option)}
                style={{ cursor: 'pointer' }}
              >
                {option}
              </Tag>
            ))}
          </Space>
        </div>
      ))}
    </div>
  )
}