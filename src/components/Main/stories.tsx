import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
  // Também poderão ser definidos os args aqui sendo que
  //neste caso serão os valores default para todos os stories desta página
  //
  // Na documentação do storybook é possível encontrar
  //referências de arg types que ajudarão a trabalhar com as
  //ferramentas corretas no storybook (ex. seletor de cores)
} as Meta

export const Basic: Story = (args) => <Main {...args} />

// exemplo para definição dos argumento no story
export const Example: Story = (args) => <Main {...args} />
Example.args = {
  title: 'Outro título',
  description: 'Uma nova descrição legal'
}
