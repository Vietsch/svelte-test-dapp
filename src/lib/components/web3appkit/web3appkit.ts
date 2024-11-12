import { WalletConnectButton, NetworkConnectButton, DisconnectButton } from './components';
import * as Types from './types';

export const Web3AppKit = {
  WalletConnectButton,
  NetworkConnectButton,
  DisconnectButton,
  ...Types, // Spread the types for easy access
} as const;
