# Security Policy

## Overview

D3FAULT is a non-custodial, privacy-preserving decentralized exchange (DEX) built on Solana. Security and privacy are fundamental design principles. This document outlines our security practices, threat model, and responsible disclosure process.

## Security Architecture

### 1. **Client-Side Encryption**

- **Wallet Encryption**: All wallet seeds are encrypted locally using **AES-256-GCM** before any transmission
- **Key Derivation**: BIP39 standard for secure seed generation and key derivation
- **Local Storage**: Encrypted wallets stored in browser local storage with no server-side copies
- **No Key Transmission**: Private keys never leave the user's device

### 2. **Non-Custodial Design**

- **User-Controlled Keys**: Users maintain full control of their private keys at all times
- **Zero Server Storage**: D3FAULT servers never store, receive, or have access to user private keys
- **Self-Custody**: Users are responsible for their seed phrase backups and security
- **No Account Dependency**: No user accounts or authentication required for basic operations

### 3. **Private Swap Protocol**

- **Throwaway Wallets**: A new temporary wallet is generated for each swap operation
- **Isolated Transactions**: Each swap uses a isolated wallet that is discarded after the transaction
- **MEV Protection**: Integration with Jito for MEV-protected transactions
- **Jupiter Integration**: Leverages Jupiter's routing for optimal swap execution
- **No Transaction History**: No persistent record of individual swaps linked to user identity

### 4. **Private Transfer Mechanism**

- **Commitment-Nullifier Cryptography**: Implements privacy-preserving transfer protocol
- **Secure Claim Links**: Transfers are claimed via cryptographic proofs, not wallet addresses
- **URL Hash Secrets**: Claim link secrets are stored in URL fragments, never transmitted over HTTP
- **Expiry Options**: Transfers can be configured with automatic expiration timestamps
- **No On-Chain Links**: No on-chain data linking transfers to sender or recipient identities

## Threat Model

### Protected Against

- **Wallet Seed Exposure**: AES-256-GCM encryption protects stored seeds even if local storage is compromised
- **Transaction Traceability**: Throwaway wallets prevent transaction linking across swaps
- **Server Breaches**: No private keys stored on servers; breach exposure is minimal
- **Passive Monitoring**: HTTPS + URL hash secrets prevent passive observation of claim links
- **Replay Attacks**: Commitment-nullifier scheme prevents double-spending on private transfers

### Not Protected Against

- **Malware/Compromised Device**: If user's device is compromised, all funds at risk
- **Phishing**: Social engineering attacks targeting users remain a risk
- **Poor Password Management**: Users must secure their seed phrase backups adequately
- **Network-Level Attacks**: While HTTPS is used, determined actors can observe transaction metadata
- **Solana Network Issues**: D3FAULT relies on Solana blockchain security assumptions

## Security Best Practices for Users

### 1. **Seed Phrase Management**

```
✓ Write down your seed phrase and store it in a secure location
✓ Never share your seed phrase with anyone
✓ Never enter your seed phrase on websites or applications you don't trust
✗ Don't store seed phrases in cloud storage or plain text files
✗ Don't take screenshots of your seed phrase
✗ Don't use weak passwords if you encrypt your seed locally
```

### 2. **Device Security**

```
✓ Keep your operating system and browser up to date
✓ Use reputable antivirus/anti-malware software
✓ Be cautious of browser extensions that request broad permissions
✓ Use hardware wallets for large holdings
✗ Don't use D3FAULT on shared or public computers for large transactions
✗ Don't leave your device unlocked and unattended
```

### 3. **Transaction Verification**

```
✓ Always verify transaction details before confirming
✓ Check the amount and recipient carefully
✓ Verify URLs start with https:// and match official domains
✓ Use browser address bar to navigate, not links from emails/messages
✗ Don't confirm transactions you don't recognize
✗ Don't rush through transaction signing
```

### 4. **Fund Management**

```
✓ Start with small amounts to test functionality
✓ Use hardware wallets for cold storage of large amounts
✓ Enable wallet features with additional security (hardware signing)
✗ Don't keep large amounts in hot wallets long-term
✗ Don't reuse recovery phrases across applications
```

## Development Security

### Code Quality

- **Type Safety**: Full TypeScript implementation with strict type checking
- **Linting**: ESLint configuration enforces code quality standards
- **Dependency Management**: Regular updates and security audits of dependencies
- **No Unsafe Operations**: Avoids dangerous crypto operations and unsafe defaults

### Cryptographic Standards

- **Algorithm Selection**: Uses industry-standard, well-tested algorithms
  - AES-256-GCM for encryption (NIST-approved)
  - BIP39 for key derivation (Bitcoin standard)
  - Commitment-nullifier schemes for privacy (academic research)
- **Random Number Generation**: Uses cryptographically secure RNG for all nonces and secrets
- **No Custom Cryptography**: Relies on proven implementations from established libraries

### Dependency Security

```json
Key Security Dependencies:
- @solana/web3.js: Official Solana library
- @radix-ui/*: Security-audited UI components
- date-fns: Well-maintained date utility library
- Next.js: Framework with built-in security features
```

**Dependency Practices:**
- Regular `npm audit` checks
- Automated dependency updates via Renovate/Dependabot
- Pinned versions for critical security dependencies
- Regular security reviews of major dependencies

## Incident Response

### Reporting Security Vulnerabilities

We take security seriously. If you discover a vulnerability:

1. **DO NOT** open a public GitHub issue
2. **Email**: security@d3fault.sh with:
   - Description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact assessment
   - Your contact information and responsible disclosure timeline

3. **Timeline**:
   - We will acknowledge receipt within 48 hours
   - We will investigate and provide updates every 7 days
   - We will work toward a fix and coordinate responsible disclosure
   - CVE assignments will be requested for critical vulnerabilities

### Disclosure Policy

- **Critical**: Published after immediate patch deployment (typically 24-48 hours)
- **High**: Published after patch testing (typically 7 days)
- **Medium**: Published in regular security bulletins (monthly)
- **Low**: Published in quarterly security reports

## Security Audits

### Current Status

- Initial security audit: Planned for Q2 2026
- Smart contract audit: In progress
- Full penetration testing: Scheduled post-mainnet-beta

### Audit Reports

When available, audit reports will be published at:
- Website: https://d3fault.sh/security
- GitHub: `/docs/audits/`

## Privacy Policy

### Data Collection

**Minimal Data Collection Principle**: D3FAULT collects only essential data for operation

**What We DO Collect:**
- User's public Solana addresses (if shared)
- Transaction metadata from public blockchain
- Basic analytics: page views, feature usage (anonymized)
- Error logs for debugging (sanitized of PII)

**What We DO NOT Collect:**
- Private keys or seed phrases
- IP addresses for tracking
- Wallet balance information
- Personal identifying information
- Behavioral tracking across sites

### Data Retention

- Error logs: 30 days
- Anonymous analytics: Aggregated, no individual user tracking
- No long-term user profiles or behavior tracking

### Third-Party Services

**Used Services:**
- Solana RPC endpoints: For blockchain interaction
- Jupiter API: For swap routing
- Jito Network: For MEV protection

**Shared Data:**
- Public transaction details only
- No user identifiers or private information

## Compliance

### Standards and Frameworks

- **OWASP Top 10**: Development follows OWASP secure coding practices
- **CWE Top 25**: Code reviews check against common weakness enumeration
- **SolarWinds Incident Response**: Incident handling procedures in place

### Legal

- **Jurisdiction**: Check local regulations for DEX usage
- **Sanctions Compliance**: D3FAULT does not accept users from OFAC-sanctioned jurisdictions
- **KYC/AML**: D3FAULT is non-custodial; no KYC required for usage

## Security Roadmap

### Near-term (Q2 2026)
- [ ] Security audit completion
- [ ] Formal threat model documentation
- [ ] Hardware wallet integration
- [ ] Transaction rate limiting

### Mid-term (Q3 2026)
- [ ] Bug bounty program launch
- [ ] Enhanced monitoring and alerting
- [ ] Multi-signature governance
- [ ] Staged mainnet rollout

### Long-term (Q4 2026+)
- [ ] Zero-knowledge proof implementation
- [ ] Cross-chain bridge security
- [ ] Full on-chain governance
- [ ] DeFi protocol insurance

## Security Resources

### For Users

- [Seed Phrase Best Practices](/docs/seed-phrase-security)
- [Common Scams and Prevention](/docs/scam-prevention)
- [Hardware Wallet Setup Guide](/docs/hardware-wallets)
- [Solana Security Best Practices](https://docs.solana.com/security)

### For Developers

- [Integration Security Checklist](/docs/developer-security)
- [API Security Documentation](/docs/api-security)
- [Testing Guidelines](/docs/testing-security)

## Contact

- **Security Issues**: security@d3fault.sh
- **General Questions**: support@d3fault.sh
- **Website**: https://d3fault.sh

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-05-03 | Initial security policy |

---

**Last Updated**: May 3, 2026

**Status**: This document is actively maintained. Regular updates occur as the protocol evolves.

**Disclaimer**: This security policy outlines D3FAULT's security practices. However, no system is 100% secure. Users are responsible for their own security practices and fund management. By using D3FAULT, you acknowledge the inherent risks of blockchain technology and agree to hold D3FAULT harmless for losses due to user error or external attacks.
