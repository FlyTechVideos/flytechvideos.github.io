import {
  faDiscord,
  faGithub,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import tw, { styled } from 'twin.macro'
import FlySVG from './assets/fly.svg'
import PillowJPG from './assets/pillow.jpg'

const Link = styled.a`
  ${tw`block text-2xl md:text-4xl text-decoration-line[none] py-2`};

  &:hover {
    ${tw`text-decoration-line[underline]`};
  }
`

const PillowImg = styled.img`
  width: 1em;
  height: 1em;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 0.1em;
`

const HiddenFlyImg = styled.img`
  ${tw`block w-16 h-auto absolute transform top-4 -left-20 rotate-90`};

  &.show {
    transition: all 2s ease-in-out;
    --tw-translate-x: calc(100vw + 6rem);
  }
`

let easterEggCounter = 0

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showHiddenFly: false }
  }

  handleEasterEgg () {
    if (this.state.showHiddenFly) {
      this.setState({ showHiddenFly: false })
      return
    }
    easterEggCounter++
    if (easterEggCounter >= 5) {
      easterEggCounter = 0
      this.setState({ showHiddenFly: true })
    }
  }

  render () {
    return (
      <>
        <div>
          <HiddenFlyImg
            className={this.state.showHiddenFly ? 'show' : ''}
            src={FlySVG}
          />
        </div>
        <div
          css={tw`grid w-full h-full content-center justify-center px-4`}
        >
          <div css={tw`block md:flex items-center mx-auto`}>
            <div css={tw`flex justify-center`}>
              <img
                css={tw`h-auto width[10rem] md:width[15rem]`}
                onClick={() => this.handleEasterEgg()}
                alt='Fly'
                src={FlySVG}
              />
            </div>
            <div css={tw`mt-4 md:mt-0 md:ml-8 text-center md:text-left`}>
              <Link href='https://youtube.com/FlyTechVideos'>
                <FontAwesomeIcon icon={faYoutube} /> FlyTech Videos
              </Link>
              <Link href='https://twitter.com/FlyTechVideos'>
                <FontAwesomeIcon icon={faTwitter} /> @FlyTechVideos
              </Link>
              <Link href='https://twitch.tv/flytech_tv'>
                <FontAwesomeIcon icon={faTwitch} /> flytech_tv
              </Link>
              <Link href='https://github.com/FlyTechVideos'>
                <FontAwesomeIcon icon={faGithub} /> FlyTechVideos
              </Link>
            </div>
          </div>
          <div css={tw`text-center md:mt-4`}>
            <Link href='https://discord.gg/c9PvPu9'>
              <FontAwesomeIcon icon={faDiscord} /> Join{' '}
              <span css={tw`font-bold`}>The Flying Tech</span> Discord Server!
            </Link>
            <Link href='https://store.flytech.video/'>
              <PillowImg alt='Merch' src={PillowJPG} /> Get your FlyTech Merch
              here!
            </Link>
          </div>
        </div>
      </>
    )
  }
}
