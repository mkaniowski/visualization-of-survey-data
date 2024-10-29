import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'

import { Button } from '@/shared/components/button/button.tsx'

import { PaletteTree } from './palette'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/Button'>
        <Button label='test btn' />
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews
