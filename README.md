# D3FAULT

### Private DEX on Solana

---

## Built With

![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![Solana](https://img.shields.io/badge/Solana-Web3.js-14F195?style=for-the-badge&logo=solana)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss)

---

## Overview

D3FAULT is a non-custodial, privacy-preserving decentralized exchange (DEX) built on Solana. We enable users to swap and transfer digital assets with complete privacy and security, without sacrificing control of their funds or compromising on performance.

Our mission is to make privacy the default, not a luxury. Every transaction is designed with your security in mind.

## Features

### 🔐 **Complete Privacy**
- Browser-based encrypted wallet generation
- Military-grade AES-256-GCM encryption
- Zero server-side key storage
- No analytics, no tracking, no logs

### 💼 **Non-Custodial Design**
- You control your private keys
- No account registration required
- Instant wallet creation
- Full transparency and auditability

### 🔄 **Private Swaps**
- Throwaway wallet per transaction
- MEV-protected swaps via Jito
- Optimal routing through Jupiter
- Instant execution on Solana

### 💬 **Secure Transfers**
- Commitment-nullifier cryptography
- Claim links with URL hash secrets
- Expiry options for sent funds
- No on-chain identity linking

### ⚡ **High Performance**
- Sub-second swap execution
- Live on Solana Devnet
- Mainnet Beta coming soon
- Powered by Jupiter and Jito

## Getting Started

### For Users

1. Visit [D3FAULT App](https://d3fault.sh)
2. Generate your encrypted wallet
3. Start swapping and transferring privately
4. No account needed, no KYC required

### For Developers

```bash
# Clone the repository
git clone https://github.com/d3faultlabs/d3fault-mainnet.git
cd d3fault-mainnet

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
pnpm start
```

Visit `http://localhost:3000` to see the application.

## How It Works

### 1. **Generate**
Create a wallet locally with AES-256-GCM encryption. Your seed phrase stays on your device.

### 2. **Swap**
Execute private swaps using a new temporary wallet for each transaction. Swaps are MEV-protected and routed through Jupiter for best prices.

### 3. **Send**
Create secure claim links with commitment-nullifier cryptography. Recipients claim funds without ever revealing sender identity.

## Security

Security and privacy are core to D3FAULT's architecture. Key security features include:

- **AES-256-GCM Encryption**: Military-grade encryption for wallet seeds
- **Non-Custodial Design**: Zero private key storage on servers
- **URL Hash Secrets**: Claim link secrets never transmitted over HTTP
- **Commitment-Nullifier Scheme**: Prevents double-spending on private transfers
- **Regular Audits**: Third-party security reviews and penetration testing

For comprehensive security information, see [SECURITY.md](./SECURITY.md)

## Privacy

At D3FAULT, privacy is a fundamental right, not an optional add-on.

**We do NOT:**
- Store or access your private keys
- Track your transactions
- Log your IP addresses
- Collect personal information
- Sell or share any data

**Our Privacy Promise:**
- 100% non-custodial
- 0% data stored
- Zero analytics tracking
- Open-source and auditable

For detailed information, see [SECURITY.md](./SECURITY.md#privacy-policy)

## Network Status

- **Devnet**: ✅ Live and fully operational
- **Mainnet Beta**: 🔄 Coming soon
- **API Access**: Available for integrations

## Pricing

### Demo
- **Free** - Perfect for testing
- Devnet access
- Full functionality

### Mainnet Beta
- **0.2% platform fee** per swap
- Non-custodial DEX
- Jupiter swaps with Jito protection
- Unlimited transactions

### Custom
- API access for projects
- Custom relayer setup
- Batch operations
- Priority support

## Roadmap

### Q2 2026
- [ ] Security audit completion
- [ ] Bug bounty program launch
- [ ] Hardware wallet integration

### Q3 2026
- [ ] Mainnet launch
- [ ] Multi-signature governance
- [ ] Enhanced monitoring

### Q4 2026+
- [ ] Cross-chain bridge
- [ ] Zero-knowledge proofs
- [ ] On-chain governance

## Documentation

- [Getting Started Guide](/docs/overview)
- [API Documentation](/docs/api)
- [Security Policy](./SECURITY.md)
- [Privacy Model](/docs/privacy-model)
- [FAQ](/docs/faq)

## Community

Join our community and stay updated:

- **Discord**: [Join Community](https://discord.gg/d3fault)
- **Twitter**: [@d3faultlabs](https://twitter.com/d3faultlabs)
- **GitHub**: [d3faultlabs](https://github.com/d3faultlabs)
- **Email**: contact@d3fault.sh

## Contributing

We welcome contributions from the community. Please review our security policy before contributing sensitive code.

For bug reports and feature requests:
1. Check existing issues
2. Provide clear descriptions and steps to reproduce
3. Follow the code of conduct

## Support

### Need Help?

- **Documentation**: Visit [d3fault.sh/docs](https://d3fault.sh/docs)
- **Discord**: Ask in our community channel
- **Email**: support@d3fault.sh

### Security Issues?

Please report security vulnerabilities responsibly:
- **Email**: security@d3fault.sh
- **Do NOT** open public GitHub issues
- See [SECURITY.md](./SECURITY.md#reporting-security-vulnerabilities) for details

## License

This project is open source and available under the MIT License. See LICENSE file for details.

## Disclaimer

D3FAULT is a non-custodial application. Users are entirely responsible for:
- Securing their seed phrases
- Verifying transaction details before confirming
- Managing their own funds and private keys
- Complying with local regulations

By using D3FAULT, you acknowledge the inherent risks of blockchain technology and agree to hold D3FAULT harmless for losses due to user error, technical issues, or external attacks.

## Acknowledgments

Built with:
- **Solana Blockchain** - High-performance network
- **Jupiter** - Best-in-class swap aggregation
- **Jito Network** - MEV protection
- **Radix UI** - Accessible component library
- Open-source community

---

**Made with ❤️ for privacy**

[Visit D3FAULT](https://d3fault.sh) | [View Docs](https://d3fault.sh/docs) | [Launch App](https://app.d3fault.sh)
