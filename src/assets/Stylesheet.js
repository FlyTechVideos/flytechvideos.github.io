import { createGlobalStyle } from 'styled-components/macro'
import tw from 'twin.macro'

export default createGlobalStyle`
  body {
    ${tw`w-full bg-gray-800 text-white bg-gradient-to-tr from-flyGradient-start to-flyGradient-end overflow-hidden`};
    height: 100vh;
  }

  #root {
    ${tw`w-full h-full`};
  }
`
