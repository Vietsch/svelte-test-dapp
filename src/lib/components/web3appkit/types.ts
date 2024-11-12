// Interface for Wallet Connect modal props
export interface WalletConnectModalProps {
    onConnect?: () => void;  // Optional callback when connection is successful
  }
  
  // Interface for Network Connect modal props
  export interface NetworkConnectModalProps {
    view?: 'Networks';       // Specify 'Networks' to open the network modal directly
    onSwitch?: () => void;    // Optional callback when network switch is successful
  }
  
  // Interface for Reown Metadata (optional if used in reown.js configuration)
  export interface ReownMetadata {
    name: string;
    description: string;
    url: string;
    icons: string[];
  }
  
  // Example configuration object for initializing the Reown modal
  export interface ReownConfig {
    projectId: string;
    networks: Array<any>;       // Define the networks based on Reown's types
    metadata?: ReownMetadata;
    features?: {
      analytics?: boolean;
    };
  }
  