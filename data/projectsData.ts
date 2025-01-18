interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Token Bulk Sender',
    description: `A tool that allow users to bulk send tokens in few minutes with low fees.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.bulksendtokenz.xyz',
  },
  {
    title: 'Ethereum Wallet',
    description: `A simple Ethereum wallet that allow users to send, receive, swap and airdrop tokens.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://codecanyon.net/item/xwallet-an-airdrop-ethereum-wallet/50663324',
  },
]

export default projectsData
