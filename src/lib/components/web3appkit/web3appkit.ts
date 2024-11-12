import { WalletConnectButton, NetworkConnectButton } from './components';
import * as Types from './types';

export const Web3AppKit = {
  WalletConnectButton,
  NetworkConnectButton,
  ...Types, // Spread the types for easy access
} as const;
