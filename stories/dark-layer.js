import { storiesOf } from '@storybook/vue'
import DarkLayer from '@/components/dark-layer'
import { text } from '@storybook/addon-knobs'

const stories = storiesOf('Dark Layer', module)

stories.addCodeExampleStory('Demo', () => ({
  template: ` 
        <div class="dark-bg">
        <DarkLayer show>
          <div class="layer-content">Some text in the layer</div>
        </DarkLayer>
        </div>`,
}), DarkLayer)
