'use client'

import { createWeb3Modal } from '@web3modal/wagmi/react'

import { polygonMumbai, polygon } from 'wagmi/chains'

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { LensProvider, LensConfig, development } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const projectId = process.env.NEXT_PUBLIC_WC_ID ?? 'placeholder-project-id'


const { publicClient, chains } = configureChains(
    [polygonMumbai, polygon],
    [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [
      new WalletConnectConnector({ chains, options: { projectId, showQrModal: false, metadata } }),
      new EIP6963Connector({ chains }),
      new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    ],
    publicClient
  })
  
  
const lensConfig: LensConfig = {
    bindings: wagmiBindings(),
    environment: development,
};

createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3ModalProvider({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
        <LensProvider config={lensConfig}>
            {children}
        </LensProvider>
    </WagmiConfig>
  )
}