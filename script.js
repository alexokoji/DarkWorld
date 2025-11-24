const productCatalog = [
    {
        id: '1',
        name: 'IP Proxy Box Storage',
        badge: 'Security Hardware',
        category: 'hardware',
        price: 1500,
        frequency: '',
        tagline: 'Professional hardware solution for secure IP proxy storage.',
        description: 'Enterprise-grade hardware device for secure IP proxy storage and management with advanced encryption.',
        highlight: 'Hardware-based security with dedicated storage.',
        tags: ['Hardware', 'Proxy', 'Storage'],
        features: [
            'Dedicated hardware device',
            'Advanced encryption protocols',
            'Secure IP proxy storage',
            'Enterprise-grade security'
        ],
        deliverables: [
            'Hardware device',
            'Setup documentation',
            '1-year warranty',
            'Technical support'
        ],
        longDescription: 'Professional security hardware designed for enterprise use with secure IP proxy storage capabilities.',
        evidence: [
            '📦 Hardware specifications',
            '🔐 Encryption documentation',
            '🛠️ Setup guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qipbox1500storage0x9p', eth: '0x1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P', usdt: 'TIPProxyBoxStorage1500USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/1/index.html'
    },
    {
        id: '2',
        name: 'Encrypted Code Breaker',
        badge: 'Security Software',
        category: 'software',
        price: 1220,
        frequency: '',
        tagline: 'Advanced encryption analysis and code breaking software.',
        description: 'Professional tool for analyzing and breaking encrypted code with advanced algorithms.',
        highlight: 'Advanced encryption analysis capabilities.',
        tags: ['Encryption', 'Code Analysis', 'Security'],
        features: [
            'Advanced encryption algorithms',
            'Code analysis tools',
            'Multi-format support',
            'Real-time processing'
        ],
        deliverables: [
            'Software license',
            'User documentation',
            '6 months support',
            'Update access'
        ],
        longDescription: 'Professional security software for encryption analysis and code breaking with enterprise features.',
        evidence: [
            '📁 Software documentation',
            '🔗 License activation',
            '🛠️ User guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qencrypted1220codebreaker', eth: '0x2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q', usdt: 'TEncryptedCode1220USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/2/index.html'
    },
    {
        id: '3',
        name: 'Bypassing Software',
        badge: 'Security Software',
        category: 'software',
        price: 990,
        frequency: '',
        tagline: 'Professional bypassing tools for security testing.',
        description: 'Advanced software for security testing and bypassing security measures.',
        highlight: 'Professional security testing capabilities.',
        tags: ['Bypass', 'Security Testing', 'Software'],
        features: [
            'Multiple bypass techniques',
            'Security testing tools',
            'Automated scanning',
            'Report generation'
        ],
        deliverables: [
            'Software license',
            'Testing documentation',
            '6 months support',
            'Update access'
        ],
        longDescription: 'Professional security software for bypassing security measures and comprehensive testing.',
        evidence: [
            '📁 Software package',
            '🔗 License key',
            '🛠️ Testing guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qbypass990software0x9p', eth: '0x3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R', usdt: 'TBypassSoftware990USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/3/index.html'
    },
    {
        id: '4',
        name: 'XploitGPT',
        badge: 'AI Security',
        category: 'ai',
        price: 3500,
        frequency: '',
        tagline: 'AI-powered exploitation and security analysis tool.',
        description: 'Advanced AI-driven security tool for exploitation testing and vulnerability analysis.',
        highlight: 'AI-powered security analysis.',
        tags: ['AI', 'Exploitation', 'Security'],
        features: [
            'AI-powered analysis',
            'Automated exploitation',
            'Vulnerability detection',
            'Smart reporting'
        ],
        deliverables: [
            'AI software license',
            'API access',
            '12 months support',
            'Premium updates'
        ],
        longDescription: 'Cutting-edge AI security tool for automated exploitation testing and vulnerability analysis.',
        evidence: [
            '🤖 AI model documentation',
            '🔗 API credentials',
            '🛠️ Integration guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qxploitgpt3500ai0x9p', eth: '0x4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S', usdt: 'TXploitGPT3500USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/4/index.html'
    },
    {
        id: '5',
        name: 'Microsoft Security Copilet',
        badge: 'Network Security',
        category: 'network',
        price: 1320,
        frequency: '',
        tagline: 'Microsoft-based network security solution.',
        description: 'Professional network security tool integrated with Microsoft security ecosystem.',
        highlight: 'Microsoft-integrated security.',
        tags: ['Microsoft', 'Network', 'Security'],
        features: [
            'Microsoft integration',
            'Network monitoring',
            'Threat detection',
            'Automated response'
        ],
        deliverables: [
            'Software license',
            'Microsoft integration',
            '12 months support',
            'Cloud access'
        ],
        longDescription: 'Professional network security solution with deep Microsoft ecosystem integration.',
        evidence: [
            '📁 Integration docs',
            '🔗 Microsoft credentials',
            '🛠️ Setup guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qmscopilet1320network', eth: '0x5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T', usdt: 'TMSecurityCop1320USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/5/index.html'
    },
    {
        id: '6',
        name: 'Bloodhound',
        badge: 'Network Security',
        category: 'network',
        price: 1700,
        frequency: '',
        tagline: 'Advanced network security tracking and analysis.',
        description: 'Professional network security tool for tracking and analyzing network threats.',
        highlight: 'Advanced network tracking.',
        tags: ['Network', 'Tracking', 'Analysis'],
        features: [
            'Network tracking',
            'Threat analysis',
            'Real-time monitoring',
            'Advanced reporting'
        ],
        deliverables: [
            'Software license',
            'Analysis tools',
            '12 months support',
            'Premium features'
        ],
        longDescription: 'Professional network security tool with advanced tracking and threat analysis capabilities.',
        evidence: [
            '📁 Tool documentation',
            '🔗 License activation',
            '🛠️ User manual'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qbloodhound1700network', eth: '0x6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U', usdt: 'TBloodhound1700USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/6/index.html'
    },
    {
        id: '7',
        name: 'Elastic Security+ML',
        badge: 'ML Security',
        category: 'ml',
        price: 1750,
        frequency: '',
        tagline: 'Machine learning-powered security solution.',
        description: 'Advanced ML-based security platform with elastic scaling and intelligent threat detection.',
        highlight: 'ML-powered security intelligence.',
        tags: ['ML', 'Security', 'Elastic'],
        features: [
            'Machine learning algorithms',
            'Elastic scaling',
            'Threat detection',
            'Automated response'
        ],
        deliverables: [
            'ML platform license',
            'API access',
            '12 months support',
            'Model updates'
        ],
        longDescription: 'Cutting-edge ML security platform with elastic scaling and intelligent threat detection.',
        evidence: [
            '🤖 ML model docs',
            '🔗 API credentials',
            '🛠️ Integration guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qelastic1750mlsecurity', eth: '0x7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V', usdt: 'TElasticML1750USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/7/index.html'
    },
    {
        id: '8',
        name: '3D Angry IP Scanner',
        badge: 'Network Tools',
        category: 'network',
        price: 100000,
        frequency: '',
        tagline: 'Premium 3D network scanning and analysis tool.',
        description: 'Advanced 3D visualization network scanner with comprehensive IP analysis capabilities.',
        highlight: '3D network visualization.',
        tags: ['3D', 'IP Scanner', 'Network'],
        features: [
            '3D visualization',
            'Advanced IP scanning',
            'Network mapping',
            'Real-time analysis'
        ],
        deliverables: [
            'Premium license',
            '3D visualization tools',
            'Lifetime support',
            'All updates'
        ],
        longDescription: 'Premium network scanning tool with advanced 3D visualization and comprehensive IP analysis.',
        evidence: [
            '📁 Premium package',
            '🔗 License key',
            '🛠️ 3D tools guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1q3dangryip100kpremium', eth: '0x8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W', usdt: 'T3DAngryIP100KUSDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/8/index.html'
    },
    {
        id: '9',
        name: 'Advanced IP Scanner',
        badge: 'Network Tools',
        category: 'network',
        price: 1921,
        frequency: '',
        tagline: 'Professional IP scanning and network analysis tool.',
        description: 'Advanced IP scanner with comprehensive network analysis and monitoring capabilities.',
        highlight: 'Advanced network scanning.',
        tags: ['IP Scanner', 'Network', 'Analysis'],
        features: [
            'Advanced IP scanning',
            'Network analysis',
            'Port detection',
            'Device identification'
        ],
        deliverables: [
            'Software license',
            'Scanning tools',
            '12 months support',
            'Update access'
        ],
        longDescription: 'Professional IP scanning tool with advanced network analysis and device identification.',
        evidence: [
            '📁 Software package',
            '🔗 License activation',
            '🛠️ User guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qadvancedip1921scanner', eth: '0x9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X', usdt: 'TAdvIPScanner1921USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/9/index.html'
    },
    {
        id: '10',
        name: 'Authorization License',
        badge: 'Enterprise Security',
        category: 'enterprise',
        price: 5520,
        frequency: '',
        tagline: 'Enterprise authorization and licensing solution.',
        description: 'Professional enterprise authorization system with comprehensive licensing management.',
        highlight: 'Enterprise authorization system.',
        tags: ['Enterprise', 'Authorization', 'License'],
        features: [
            'Enterprise authorization',
            'License management',
            'Access control',
            'Audit logging'
        ],
        deliverables: [
            'Enterprise license',
            'Management system',
            '24 months support',
            'Priority updates'
        ],
        longDescription: 'Professional enterprise authorization and licensing solution with comprehensive management tools.',
        evidence: [
            '📁 Enterprise package',
            '🔗 License keys',
            '🛠️ Admin guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qauthlicense5520enterprise', eth: '0x0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y', usdt: 'TAuthLicense5520USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/10/index.html'
    },
    {
        id: '11',
        name: 'Unicornscan',
        badge: 'Network Tools',
        category: 'network',
        price: 500,
        frequency: '',
        tagline: 'Fast and efficient network scanning tool.',
        description: 'Lightweight and fast network scanner for quick port scanning and service detection.',
        highlight: 'Fast network scanning.',
        tags: ['Network', 'Scanner', 'Fast'],
        features: [
            'Fast scanning',
            'Port detection',
            'Service identification',
            'Lightweight design'
        ],
        deliverables: [
            'Software license',
            'Scanning tools',
            '6 months support',
            'Basic updates'
        ],
        longDescription: 'Lightweight and efficient network scanner designed for fast port scanning and service detection.',
        evidence: [
            '📁 Software package',
            '🔗 License key',
            '🛠️ Quick start guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qunicornscan500network', eth: '0x1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z', usdt: 'TUnicornscan500USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/11/index.html'
    },
    {
        id: '12',
        name: 'NetScan Tools',
        badge: 'Network Tools',
        category: 'network',
        price: 720,
        frequency: '',
        tagline: 'Comprehensive network scanning toolkit.',
        description: 'Professional suite of network scanning tools for comprehensive network analysis.',
        highlight: 'Complete network toolkit.',
        tags: ['Network', 'Tools', 'Suite'],
        features: [
            'Multiple scanning tools',
            'Network analysis',
            'Device discovery',
            'Comprehensive reporting'
        ],
        deliverables: [
            'Tool suite license',
            'All tools included',
            '12 months support',
            'Tool updates'
        ],
        longDescription: 'Professional network scanning toolkit with multiple tools for comprehensive network analysis.',
        evidence: [
            '📁 Tool suite',
            '🔗 License activation',
            '🛠️ Complete guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qnetscantools720suite', eth: '0x2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A', usdt: 'TNetScanTools720USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/12/index.html'
    },
    {
        id: '13',
        name: 'Qualys Cloud Platform',
        badge: 'Cloud Security',
        category: 'cloud',
        price: 7500,
        frequency: '',
        tagline: 'Enterprise cloud security and compliance platform.',
        description: 'Comprehensive cloud security platform with vulnerability management and compliance monitoring.',
        highlight: 'Enterprise cloud security.',
        tags: ['Cloud', 'Security', 'Enterprise'],
        features: [
            'Cloud security monitoring',
            'Vulnerability management',
            'Compliance tracking',
            'Automated remediation'
        ],
        deliverables: [
            'Cloud platform access',
            'Enterprise license',
            '24 months support',
            'Premium features'
        ],
        longDescription: 'Enterprise-grade cloud security platform with comprehensive vulnerability management and compliance.',
        evidence: [
            '📁 Platform access',
            '🔗 Cloud credentials',
            '🛠️ Admin console'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qqualys7500cloudplatform', eth: '0x3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B', usdt: 'TQualysCloud7500USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/13/index.html'
    },
    {
        id: '14',
        name: 'SAINT Security Suite',
        badge: 'Security Suite',
        category: 'suite',
        price: 6720,
        frequency: '',
        tagline: 'Comprehensive security assessment suite.',
        description: 'Professional security assessment suite with vulnerability scanning and penetration testing tools.',
        highlight: 'Complete security suite.',
        tags: ['Security', 'Suite', 'Assessment'],
        features: [
            'Vulnerability scanning',
            'Penetration testing',
            'Risk assessment',
            'Comprehensive reporting'
        ],
        deliverables: [
            'Suite license',
            'All tools included',
            '24 months support',
            'Premium updates'
        ],
        longDescription: 'Professional security assessment suite with comprehensive vulnerability scanning and testing tools.',
        evidence: [
            '📁 Complete suite',
            '🔗 License activation',
            '🛠️ Suite documentation'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qsaint6720securitysuite', eth: '0x4N5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C', usdt: 'TSAINT6720USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/14/index.html'
    },
    {
        id: '15',
        name: 'GFI LAN Guide',
        badge: 'Network Management',
        category: 'network',
        price: 4800,
        frequency: '',
        tagline: 'Enterprise network management and monitoring solution.',
        description: 'Professional LAN management tool with comprehensive network monitoring and administration.',
        highlight: 'Enterprise LAN management.',
        tags: ['LAN', 'Management', 'Network'],
        features: [
            'LAN management',
            'Network monitoring',
            'Device administration',
            'Traffic analysis'
        ],
        deliverables: [
            'Management license',
            'Monitoring tools',
            '24 months support',
            'Enterprise features'
        ],
        longDescription: 'Professional LAN management solution with comprehensive network monitoring and administration tools.',
        evidence: [
            '📁 Management suite',
            '🔗 License keys',
            '🛠️ Admin guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qgfilan4800management', eth: '0x5O6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D', usdt: 'TGFILAN4800USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/15/index.html'
    },
    {
        id: '16',
        name: 'Rainbow Crack',
        badge: 'Password Security',
        category: 'password',
        price: 3850,
        frequency: '',
        tagline: 'Advanced password cracking tool with rainbow tables.',
        description: 'Professional password cracking tool using rainbow table technology for fast hash cracking.',
        highlight: 'Rainbow table password cracking.',
        tags: ['Password', 'Cracking', 'Rainbow'],
        features: [
            'Rainbow table technology',
            'Fast hash cracking',
            'Multiple hash support',
            'GPU acceleration'
        ],
        deliverables: [
            'Software license',
            'Rainbow tables',
            '12 months support',
            'Table updates'
        ],
        longDescription: 'Professional password cracking tool with advanced rainbow table technology for efficient hash cracking.',
        evidence: [
            '📁 Software package',
            '🔗 License key',
            '🛠️ Cracking guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qrainbow3850crack', eth: '0x6P7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D1E', usdt: 'TRainbowCrack3850USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/16/index.html'
    },
    {
        id: '17',
        name: 'THC Hydra',
        badge: 'Password Security',
        category: 'password',
        price: 5100,
        frequency: '',
        tagline: 'Fast network login cracker with multiple protocol support.',
        description: 'Professional network login cracker supporting multiple protocols with fast brute-force capabilities.',
        highlight: 'Multi-protocol password cracking.',
        tags: ['Password', 'Network', 'Cracker'],
        features: [
            'Multiple protocol support',
            'Fast brute-force',
            'Network login cracking',
            'Parallel processing'
        ],
        deliverables: [
            'Software license',
            'Protocol modules',
            '12 months support',
            'Module updates'
        ],
        longDescription: 'Professional network login cracker with support for multiple protocols and fast brute-force capabilities.',
        evidence: [
            '📁 Software package',
            '🔗 License activation',
            '🛠️ Protocol guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qthchydra5100password', eth: '0x7Q8R9S0T1U2V3W4X5Y6Z7A8B9C0D1E2F', usdt: 'TTHCHydra5100USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/17/index.html'
    },
    {
        id: '18',
        name: 'L0phtCrack',
        badge: 'Password Security',
        category: 'password',
        price: 2170,
        frequency: '',
        tagline: 'Professional Windows password auditing tool.',
        description: 'Advanced Windows password auditing and recovery tool with comprehensive security testing.',
        highlight: 'Windows password auditing.',
        tags: ['Windows', 'Password', 'Audit'],
        features: [
            'Windows password auditing',
            'Password recovery',
            'Security testing',
            'Hash analysis'
        ],
        deliverables: [
            'Software license',
            'Auditing tools',
            '12 months support',
            'Update access'
        ],
        longDescription: 'Professional Windows password auditing tool with comprehensive security testing capabilities.',
        evidence: [
            '📁 Software package',
            '🔗 License key',
            '🛠️ Audit guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1ql0phtcrack2170windows', eth: '0x8R9S0T1U2V3W4X5Y6Z7A8B9C0D1E2F3G', usdt: 'TL0phtCrack2170USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/18/index.html'
    },
    {
        id: '19',
        name: 'MetaSploit',
        badge: 'Penetration Testing',
        category: 'pentest',
        price: 6201,
        frequency: '',
        tagline: 'Advanced penetration testing framework.',
        description: 'Professional penetration testing framework with extensive exploit database and automation tools.',
        highlight: 'Comprehensive penetration testing.',
        tags: ['Penetration', 'Testing', 'Framework'],
        features: [
            'Extensive exploit database',
            'Automated testing',
            'Post-exploitation tools',
            'Framework flexibility'
        ],
        deliverables: [
            'Framework license',
            'Exploit database',
            '24 months support',
            'Framework updates'
        ],
        longDescription: 'Professional penetration testing framework with extensive exploit database and automation capabilities.',
        evidence: [
            '📁 Framework package',
            '🔗 License activation',
            '🛠️ Testing guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qmetasploit6201pentest', eth: '0x9S0T1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H', usdt: 'TMetaSploit6201USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/19/index.html'
    },
    {
        id: '20',
        name: 'Penetration Testing Tool',
        badge: 'Penetration Testing',
        category: 'pentest',
        price: 3950,
        frequency: '',
        tagline: 'Professional penetration testing and vulnerability assessment.',
        description: 'Comprehensive penetration testing tool with automated vulnerability assessment and reporting.',
        highlight: 'Automated penetration testing.',
        tags: ['Penetration', 'Testing', 'Vulnerability'],
        features: [
            'Automated testing',
            'Vulnerability assessment',
            'Exploit testing',
            'Detailed reporting'
        ],
        deliverables: [
            'Testing license',
            'Assessment tools',
            '12 months support',
            'Tool updates'
        ],
        longDescription: 'Professional penetration testing tool with automated vulnerability assessment and comprehensive reporting.',
        evidence: [
            '📁 Testing suite',
            '🔗 License key',
            '🛠️ Testing manual'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qpentest3950tool', eth: '0x0T1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I', usdt: 'TPenTest3950USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/20/index.html'
    },
    {
        id: '21',
        name: 'Social-Engineer Toolkit (SET)',
        badge: 'Social Engineering',
        category: 'social',
        price: 4950,
        frequency: '',
        tagline: 'Advanced social engineering attack framework.',
        description: 'Professional social engineering toolkit for security testing and awareness training.',
        highlight: 'Social engineering framework.',
        tags: ['Social', 'Engineering', 'Framework'],
        features: [
            'Social engineering attacks',
            'Phishing campaigns',
            'Awareness training',
            'Attack simulation'
        ],
        deliverables: [
            'Framework license',
            'Attack modules',
            '12 months support',
            'Module updates'
        ],
        longDescription: 'Professional social engineering framework for comprehensive security testing and awareness training.',
        evidence: [
            '📁 Framework package',
            '🔗 License activation',
            '🛠️ Framework guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qset4950socialengineering', eth: '0x1U2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I6J', usdt: 'TSET4950USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/21/index.html'
    },
    {
        id: '22',
        name: 'SQLMap',
        badge: 'Database Security',
        category: 'database',
        price: 3267,
        frequency: '',
        tagline: 'Automated SQL injection and database takeover tool.',
        description: 'Professional automated SQL injection tool for database security testing and vulnerability assessment.',
        highlight: 'Automated SQL injection.',
        tags: ['SQL', 'Injection', 'Database'],
        features: [
            'Automated SQL injection',
            'Database takeover',
            'Multiple DB support',
            'Advanced exploitation'
        ],
        deliverables: [
            'Software license',
            'Injection tools',
            '12 months support',
            'Tool updates'
        ],
        longDescription: 'Professional automated SQL injection tool with comprehensive database security testing capabilities.',
        evidence: [
            '📁 Software package',
            '🔗 License key',
            '🛠️ Injection guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qsqlmap3267database', eth: '0x2V3W4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K', usdt: 'TSQLMap3267USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/22/index.html'
    },
    {
        id: '23',
        name: 'Zed Attack Proxy (ZAP)',
        badge: 'Web Security',
        category: 'web',
        price: 6500,
        frequency: '',
        tagline: 'Integrated web application security testing.',
        description: 'Professional web application security scanner with automated vulnerability detection and testing.',
        highlight: 'Web application security.',
        tags: ['Web', 'Security', 'Scanner'],
        features: [
            'Web app scanning',
            'Vulnerability detection',
            'Automated testing',
            'Security reporting'
        ],
        deliverables: [
            'Software license',
            'Scanning tools',
            '24 months support',
            'Premium updates'
        ],
        longDescription: 'Professional web application security scanner with comprehensive vulnerability detection and testing.',
        evidence: [
            '📁 Software suite',
            '🔗 License activation',
            '🛠️ Scanning guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qzap6500websecurity', eth: '0x3W4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L', usdt: 'TZAP6500USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/23/index.html'
    },
    {
        id: '24',
        name: 'Wireless Shark',
        badge: 'Wireless Security',
        category: 'wireless',
        price: 4827,
        frequency: '',
        tagline: 'Advanced wireless network security and analysis.',
        description: 'Professional wireless network security tool with packet capture and analysis capabilities.',
        highlight: 'Wireless network security.',
        tags: ['Wireless', 'Security', 'Analysis'],
        features: [
            'Wireless packet capture',
            'Network analysis',
            'Security testing',
            'Traffic monitoring'
        ],
        deliverables: [
            'Software license',
            'Capture tools',
            '12 months support',
            'Tool updates'
        ],
        longDescription: 'Professional wireless network security tool with advanced packet capture and analysis capabilities.',
        evidence: [
            '📁 Software package',
            '🔗 License key',
            '🛠️ Capture guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qwireless4827shark', eth: '0x4X5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9M', usdt: 'TWirelessShark4827USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/24/index.html'
    },
    {
        id: '25',
        name: 'Routine Keylogger Backdoor',
        badge: 'Security Software',
        category: 'software',
        price: 18543,
        frequency: '',
        tagline: 'Advanced keylogging and backdoor security tool.',
        description: 'Professional keylogging and backdoor tool for security testing and monitoring.',
        highlight: 'Advanced keylogging capabilities.',
        tags: ['Keylogger', 'Backdoor', 'Security'],
        features: [
            'Advanced keylogging',
            'Backdoor access',
            'Stealth operation',
            'Remote monitoring'
        ],
        deliverables: [
            'Software license',
            'Monitoring tools',
            '24 months support',
            'Premium features'
        ],
        longDescription: 'Professional keylogging and backdoor tool with advanced stealth and monitoring capabilities.',
        evidence: [
            '📁 Software package',
            '🔗 License activation',
            '🛠️ Deployment guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qkeylogger18543backdoor', eth: '0x5Y6Z7A8B9C0D1E2F3G4H5I6J7K8L9M0N', usdt: 'TKeylogger18543USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/25/index.html'
    },
    {
        id: '26',
        name: 'Blockchain Nodes',
        badge: 'Blockchain Technology',
        category: 'blockchain',
        price: 13454,
        frequency: '',
        tagline: 'Enterprise blockchain node infrastructure.',
        description: 'Professional blockchain node infrastructure for enterprise blockchain deployments.',
        highlight: 'Enterprise blockchain nodes.',
        tags: ['Blockchain', 'Nodes', 'Infrastructure'],
        features: [
            'Blockchain node setup',
            'Infrastructure management',
            'Network connectivity',
            'Enterprise support'
        ],
        deliverables: [
            'Node infrastructure',
            'Setup services',
            '24 months support',
            'Infrastructure updates'
        ],
        longDescription: 'Professional blockchain node infrastructure with comprehensive enterprise support and management.',
        evidence: [
            '📁 Infrastructure package',
            '🔗 Node credentials',
            '🛠️ Setup documentation'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qblockchain13454nodes', eth: '0x6Z7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O', usdt: 'TBlockchainNodes13454USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/26/index.html'
    },
    {
        id: '27',
        name: 'Malware',
        badge: 'Security Software',
        category: 'software',
        price: 8643,
        frequency: '',
        tagline: 'Advanced malware analysis and testing tool.',
        description: 'Professional malware analysis tool for security research and testing.',
        highlight: 'Malware analysis capabilities.',
        tags: ['Malware', 'Analysis', 'Security'],
        features: [
            'Malware analysis',
            'Behavioral testing',
            'Sandbox environment',
            'Threat research'
        ],
        deliverables: [
            'Software license',
            'Analysis tools',
            '24 months support',
            'Research updates'
        ],
        longDescription: 'Professional malware analysis tool with advanced behavioral testing and research capabilities.',
        evidence: [
            '📁 Analysis suite',
            '🔗 License key',
            '🛠️ Analysis guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qmalware8643analysis', eth: '0x7A8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P', usdt: 'TMalware8643USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/27/index.html'
    },
    {
        id: '28',
        name: 'Blockchain Keybypass',
        badge: 'Blockchain Security',
        category: 'blockchain',
        price: 15643,
        frequency: '',
        tagline: 'Advanced blockchain security bypass tool.',
        description: 'Professional blockchain security testing tool for key management and bypass testing.',
        highlight: 'Blockchain security bypass.',
        tags: ['Blockchain', 'Security', 'Bypass'],
        features: [
            'Key management bypass',
            'Security testing',
            'Blockchain analysis',
            'Vulnerability assessment'
        ],
        deliverables: [
            'Software license',
            'Testing tools',
            '24 months support',
            'Security updates'
        ],
        longDescription: 'Professional blockchain security tool with advanced key management bypass and testing capabilities.',
        evidence: [
            '📁 Security suite',
            '🔗 License activation',
            '🛠️ Testing guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qblockchain15643keybypass', eth: '0x8B9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q', usdt: 'TBlockchainKey15643USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/28/index.html'
    },
    {
        id: '29',
        name: 'Bypass Antivirus',
        badge: 'Security Software',
        category: 'software',
        price: 18643,
        frequency: '',
        tagline: 'Advanced antivirus bypass and evasion tool.',
        description: 'Professional antivirus bypass tool for security testing and evasion techniques.',
        highlight: 'Antivirus bypass capabilities.',
        tags: ['Antivirus', 'Bypass', 'Evasion'],
        features: [
            'Antivirus bypass',
            'Evasion techniques',
            'Stealth operation',
            'Advanced obfuscation'
        ],
        deliverables: [
            'Software license',
            'Bypass tools',
            '24 months support',
            'Evasion updates'
        ],
        longDescription: 'Professional antivirus bypass tool with advanced evasion techniques and stealth capabilities.',
        evidence: [
            '📁 Bypass suite',
            '🔗 License key',
            '🛠️ Evasion guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qbypass18643antivirus', eth: '0x9C0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4R', usdt: 'TBypassAV18643USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/29/index.html'
    },
    {
        id: '30',
        name: 'Blockchain Truffle Suite',
        badge: 'Blockchain Development',
        category: 'blockchain',
        price: 46774,
        frequency: '',
        tagline: 'Comprehensive blockchain development framework.',
        description: 'Professional blockchain development suite with smart contract tools and testing framework.',
        highlight: 'Complete blockchain development suite.',
        tags: ['Blockchain', 'Development', 'Framework'],
        features: [
            'Smart contract development',
            'Testing framework',
            'Deployment tools',
            'Development environment'
        ],
        deliverables: [
            'Development suite',
            'All tools included',
            'Lifetime support',
            'Framework updates'
        ],
        longDescription: 'Professional blockchain development suite with comprehensive smart contract tools and testing framework.',
        evidence: [
            '📁 Complete suite',
            '🔗 License activation',
            '🛠️ Development guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qtruffle46774blockchain', eth: '0x0D1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S', usdt: 'TTruffleSuite46774USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/30/index.html'
    },
    {
        id: '31',
        name: 'Layer 2 Glitch',
        badge: 'Blockchain Technology',
        category: 'blockchain',
        price: 84542,
        frequency: '',
        tagline: 'Advanced Layer 2 blockchain technology solution.',
        description: 'Professional Layer 2 blockchain technology with advanced scaling and optimization.',
        highlight: 'Layer 2 blockchain scaling.',
        tags: ['Layer 2', 'Blockchain', 'Scaling'],
        features: [
            'Layer 2 scaling',
            'Blockchain optimization',
            'Advanced protocols',
            'Enterprise deployment'
        ],
        deliverables: [
            'Technology license',
            'Deployment services',
            'Lifetime support',
            'Protocol updates'
        ],
        longDescription: 'Professional Layer 2 blockchain technology with advanced scaling solutions and enterprise deployment.',
        evidence: [
            '📁 Technology package',
            '🔗 Deployment credentials',
            '🛠️ Technical documentation'
        ],
        cardImage: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qlayer284542blockchain', eth: '0x1E2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T', usdt: 'TLayer2Glitch84542USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/31/index.html'
    },
    {
        id: '32',
        name: 'Elliptic Overlay (Monitoring & Analysis)',
        badge: 'Blockchain Security',
        category: 'blockchain',
        price: 98333,
        frequency: '',
        tagline: 'Advanced blockchain monitoring and analysis platform.',
        description: 'Professional blockchain monitoring and analysis platform with comprehensive security features.',
        highlight: 'Blockchain monitoring platform.',
        tags: ['Blockchain', 'Monitoring', 'Analysis'],
        features: [
            'Blockchain monitoring',
            'Transaction analysis',
            'Security monitoring',
            'Real-time alerts'
        ],
        deliverables: [
            'Platform license',
            'Monitoring tools',
            'Lifetime support',
            'Platform updates'
        ],
        longDescription: 'Professional blockchain monitoring and analysis platform with comprehensive security and real-time monitoring.',
        evidence: [
            '📁 Platform package',
            '🔗 Platform access',
            '🛠️ Monitoring guide'
        ],
        cardImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
        detailImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
        wallets: { btc: 'bc1qelliptic98333monitoring', eth: '0x2F3G4H5I6J7K8L9M0N1O2P3Q4R5S6T7U', usdt: 'TElliptic98333USDT' },
        paymentNote: 'Send exact amount. 2 confirmations for BTC / 12 blocks for ETH / 1 block for USDT.',
        link: 'product/32/index.html'
    }
];

let walletModal = null;
let cartDrawer = null;
let cartItems = [];

// Cart Storage Functions
const CART_STORAGE_KEY = 'darkweb_cart_items';
const CART_JSON_FILE = 'cart-storage.json';

// Save cart to both localStorage and JSON file structure
function saveCartToStorage() {
    try {
        // Save to localStorage
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        
        // Create JSON structure for JSON file
        const cartData = {
            cartItems: cartItems,
            lastUpdated: new Date().toISOString(),
            version: "1.0",
            totalItems: cartItems.length,
            totalValue: cartItems.reduce((sum, item) => sum + (item.price || 0), 0)
        };
        
        // Save to localStorage as JSON structure (for easy export)
        localStorage.setItem(CART_STORAGE_KEY + '_json', JSON.stringify(cartData, null, 2));
        
        console.log('Cart saved to storage:', cartData);
    } catch (error) {
        console.error('Error saving cart to storage:', error);
    }
}

// Load cart from storage (localStorage, with fallback to JSON file)
async function loadCartFromStorage() {
    try {
        // First try localStorage
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            // Validate that stored items still exist in catalog
            cartItems = parsed.filter(item => {
                const exists = productCatalog.find(p => String(p.id) === String(item.id));
                if (!exists) {
                    console.warn('Removed invalid product from cart:', item.id);
                }
                return exists;
            });
            // Update cart items with latest product data from catalog
            cartItems = cartItems.map(item => {
                const product = productCatalog.find(p => String(p.id) === String(item.id));
                return product ? { id: product.id, ...product } : item;
            });
            return;
        }
        
        // Fallback: Try to load from JSON file
        try {
            const response = await fetch(CART_JSON_FILE);
            if (response.ok) {
                const jsonData = await response.json();
                if (jsonData.cartItems && Array.isArray(jsonData.cartItems)) {
                    // Validate that stored items still exist in catalog
                    cartItems = jsonData.cartItems.filter(item => {
                        const exists = productCatalog.find(p => String(p.id) === String(item.id));
                        if (!exists) {
                            console.warn('Removed invalid product from cart:', item.id);
                        }
                        return exists;
                    });
                    // Update cart items with latest product data from catalog
                    cartItems = cartItems.map(item => {
                        const product = productCatalog.find(p => String(p.id) === String(item.id));
                        return product ? { id: product.id, ...product } : item;
                    });
                    // Save to localStorage for faster access next time
                    saveCartToStorage();
                    return;
                }
            }
        } catch (fetchError) {
            console.log('JSON file not found or not accessible, using empty cart');
        }
        
        // If nothing found, start with empty cart
        cartItems = [];
    } catch (error) {
        console.error('Error loading cart from storage:', error);
        cartItems = [];
    }
}

// Export cart to JSON file (download)
function exportCartToJSON() {
    try {
        const cartData = {
            cartItems: cartItems,
            lastUpdated: new Date().toISOString(),
            version: "1.0",
            totalItems: cartItems.length,
            totalValue: cartItems.reduce((sum, item) => sum + (item.price || 0), 0)
        };
        
        const jsonString = JSON.stringify(cartData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cart-storage.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log('Cart exported to JSON file');
        showNotification('Cart exported to JSON file', 'success');
    } catch (error) {
        console.error('Error exporting cart to JSON:', error);
        showNotification('Error exporting cart', 'error');
    }
}

// Import cart from JSON file (upload)
function importCartFromJSON(file) {
    try {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);
                if (jsonData.cartItems && Array.isArray(jsonData.cartItems)) {
                    // Validate that stored items still exist in catalog
                    cartItems = jsonData.cartItems.filter(item => {
                        const exists = productCatalog.find(p => String(p.id) === String(item.id));
                        if (!exists) {
                            console.warn('Removed invalid product from cart:', item.id);
                        }
                        return exists;
                    });
                    // Update cart items with latest product data from catalog
                    cartItems = cartItems.map(item => {
                        const product = productCatalog.find(p => String(p.id) === String(item.id));
                        return product ? { id: product.id, ...product } : item;
                    });
                    
                    saveCartToStorage();
                    updateCartDrawer();
                    showNotification(`Imported ${cartItems.length} item(s) from JSON file`, 'success');
                } else {
                    showNotification('Invalid JSON file format', 'error');
                }
            } catch (parseError) {
                console.error('Error parsing JSON file:', parseError);
                showNotification('Error parsing JSON file', 'error');
            }
        };
        reader.readAsText(file);
    } catch (error) {
        console.error('Error importing cart from JSON:', error);
        showNotification('Error importing cart', 'error');
    }
}

function clearCartStorage() {
    try {
        localStorage.removeItem(CART_STORAGE_KEY);
        localStorage.removeItem(CART_STORAGE_KEY + '_json');
        cartItems = [];
        saveCartToStorage(); // Update JSON structure
        console.log('Cart storage cleared');
    } catch (error) {
        console.error('Error clearing cart storage:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Load cart from storage first (async)
    loadCartFromStorage().then(() => {
        console.log('Cart loaded from storage, items:', cartItems.length);
        initNavigation();
        initSmoothScroll();
        initIntersectionObserver();
        const cards = initProductsGrid();
        initFilterChips(cards);
        initProductDetail();
        initCartPanel();
        initGlobalAddToCart();
        initCartDrawer();
        // Initialize cart drawer display - use setTimeout to ensure DOM is ready
        setTimeout(() => {
            console.log('Initializing cart drawer display...');
            updateCartDrawer();
        }, 100);
    });
});

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }

    const page = document.body.dataset.page;
    const target = page === 'product-detail' ? 'products' : page;
    document.querySelectorAll('.nav-links [data-nav]').forEach(link => {
        if (link.dataset.nav === target) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            const href = anchor.getAttribute('href');
            if (!href || href === '#' || href.length <= 1) return;
            const targetId = href.substring(1);
            const section = document.getElementById(targetId);
            if (section) {
                event.preventDefault();
                scrollToSection(targetId);
            }
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const offset = 80;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}


function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animateTargets = document.querySelectorAll('[data-animate], .feature-card, .feature-panel, .intel-card, .product-card, .cart-summary-card, .success-card');
    animateTargets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initProductsGrid() {
    const grid = document.querySelector('[data-products-grid]');
    if (!grid) return [];

    grid.innerHTML = '';
    const cards = productCatalog.map(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.category = product.category;
        card.innerHTML = `
            <div class="product-card__media">
                <span class="product-card__badge">${product.badge}</span>
                <img src="${product.cardImage}" alt="${product.name} illustration" loading="lazy">
            </div>
            <div class="product-card__body">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <ul class="product-card__tags">
                    ${product.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ul>
            </div>
            <div class="product-card__footer">
                <div class="product-card__price">
                    <span class="currency">$</span>
                    <span class="amount">${product.price}</span>
                    <span class="period">${product.frequency}</span>
                </div>
                <div class="product-card__actions">
                    <a class="btn-secondary" href="${product.link}">View details</a>
                    <button class="btn-primary" type="button" data-add-to-cart data-product-id="${product.id}">
                        Add to cart
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
        return card;
    });

    return cards;
}

function initFilterChips(cards = []) {
    if (!cards.length) return;
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.dataset.filter || 'all';
            cards.forEach(card => {
                const isHidden = filter !== 'all' && card.dataset.category !== filter;
                card.classList.toggle('hidden', isHidden);
            });
        });
    });
}

function initProductDetail() {
    if (document.body.dataset.page !== 'product-detail') return;
    const productId = document.body.dataset.productId;
    const product = productCatalog.find(item => item.id === productId);
    if (!product) {
        showNotification('Product not found. Please return to the catalog.', 'info');
        return;
    }

    updateDetailField('[data-product-name]', product.name);
    updateDetailField('[data-product-description]', product.description);
    updateDetailField('[data-product-badge]', product.badge);
    updateDetailField('[data-product-price]', `$${product.price}`);
    updateDetailField('[data-product-frequency]', product.frequency);
    updateDetailField('[data-product-highlight]', product.highlight);
    updateDetailField('[data-product-long]', product.longDescription);

    const image = document.querySelector('[data-product-image]');
    if (image) {
        image.src = product.detailImage;
        image.alt = `${product.name} dashboard`;
    }

    const tagsContainer = document.querySelector('[data-product-tags]');
    if (tagsContainer) {
        tagsContainer.innerHTML = '';
        product.tags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'detail-tag';
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
    }

    const featureList = document.querySelector('[data-product-features]');
    if (featureList) {
        featureList.innerHTML = '';
        product.features.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            featureList.appendChild(li);
        });
    }

    const deliverablesWrapper = document.querySelector('[data-product-deliverables]');
    if (deliverablesWrapper) {
        deliverablesWrapper.innerHTML = '';
        product.deliverables.forEach(item => {
            const div = document.createElement('div');
            div.className = 'deliverable-card';
            div.textContent = item;
            deliverablesWrapper.appendChild(div);
        });
    }

    document.querySelectorAll('[data-add-to-cart]').forEach(button => {
        button.dataset.productId = product.id;
    });
}

function initCartPanel() {
    // Handle view wallets buttons
    document.addEventListener('click', (event) => {
        const viewWalletsBtn = event.target.closest('[data-view-wallets]');
        if (viewWalletsBtn) {
            const productId = viewWalletsBtn.dataset.productId;
            const product = cartItems.find(item => item.id === productId);
            if (product) {
                showWalletModal(product);
            }
        }
        
        // Handle remove item buttons
        const removeBtn = event.target.closest('[data-remove-item]');
        if (removeBtn) {
            const productId = removeBtn.dataset.productId;
            removeFromCart(productId);
        }
        
        // Handle checkout button
        const checkoutBtn = event.target.closest('[data-checkout-btn]');
        if (checkoutBtn) {
            event.preventDefault();
            handleCheckout();
        }
    });
}

function handleCheckout() {
    if (cartItems.length === 0) {
        showNotification('Your cart is empty.', 'info');
        return;
    }
    
    // Show combined payment modal for all items
    showCombinedWalletModal();
}

function removeFromCart(productId) {
    const product = cartItems.find(item => String(item.id) === String(productId));
    if (!product) return;
    
    cartItems = cartItems.filter(item => String(item.id) !== String(productId));
    saveCartToStorage(); // Save to localStorage
    updateCartDrawer(); // This will also call updateCartTotal()
    showNotification(`${product.name} removed from cart.`, 'info');
}

// Global add to cart handler - use event delegation
let addToCartHandlerAttached = false;

function initGlobalAddToCart() {
    // Only attach once to avoid duplicates
    if (addToCartHandlerAttached) return;
    addToCartHandlerAttached = true;
    
    // Use event delegation to handle all add to cart buttons
    document.addEventListener('click', (event) => {
        const button = event.target.closest('[data-add-to-cart]');
        if (!button) return;
        
        event.preventDefault();
        event.stopPropagation();
        
        const productId = button.getAttribute('data-product-id');
        console.log('Add to cart button clicked, productId:', productId);
        
        if (productId) {
            handleAddToCart(productId);
        } else {
            console.error('Product ID missing on button:', button);
            console.error('Button attributes:', Array.from(button.attributes).map(attr => `${attr.name}="${attr.value}"`));
        }
    });
    
    // Make handleAddToCart globally accessible (for debugging)
    window.handleAddToCart = handleAddToCart;
    
    console.log('✅ Global add to cart handler initialized');
}

function initCartDrawer() {
    cartDrawer = document.querySelector('[data-cart-drawer]');
    if (!cartDrawer) return;

    document.addEventListener('click', (event) => {
        const openTrigger = event.target.closest('[data-open-cart]');
        if (openTrigger) {
            event.preventDefault();
            openCartDrawer();
            return;
        }
        if (event.target.closest('[data-cart-close]')) {
            event.preventDefault();
            closeCartDrawer();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && cartDrawer.classList.contains('open')) {
            closeCartDrawer();
        }
    });
}

function handleAddToCart(productId) {
    console.log('=== handleAddToCart START ===');
    console.log('ProductId received:', productId, 'Type:', typeof productId);
    console.log('Current cartItems count:', cartItems.length);
    console.log('Product catalog count:', productCatalog.length);
    
    if (!productId) {
        console.error('No productId provided!');
        showNotification('Error: No product selected.', 'error');
        return;
    }
    
    // Ensure productId is a string for comparison
    const id = String(productId).trim();
    console.log('Searching for product with id:', id);
    
    // Find product in catalog
    const product = productCatalog.find(item => {
        const itemId = String(item.id).trim();
        const match = itemId === id;
        if (match) console.log('Found matching product:', item.name);
        return match;
    });
    
    if (!product) {
        console.error('❌ Product not found!');
        console.error('Searched ID:', id);
        console.error('Available IDs:', productCatalog.slice(0, 5).map(p => ({ id: p.id, name: p.name })));
        showNotification('Product could not be found.', 'error');
        return;
    }
    
    console.log('✅ Found product:', product.name, 'Price: $' + product.price);
    
    // Check if product is already in cart
    const existingItem = cartItems.find(item => String(item.id).trim() === id);
    if (existingItem) {
        console.log('⚠️ Product already in cart');
        showNotification(`${product.name} is already in your cart.`, 'info');
        return;
    }
    
    // Add to cart
    const cartItem = { id: product.id, ...product };
    cartItems.push(cartItem);
    console.log('✅ Added to cart:', cartItem.name);
    console.log('Cart now has', cartItems.length, 'item(s)');
    
    // Save and update
    saveCartToStorage();
    updateCartDrawer();
    showNotification(`${product.name} added to cart.`, 'success');
    console.log('=== handleAddToCart END ===');
}

function updateCartDrawer() {
    console.log('=== updateCartDrawer START ===');
    console.log('Cart items count:', cartItems.length);
    console.log('Cart items:', cartItems);
    
    const cartItemsContainer = document.querySelector('[data-cart-items]');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const cartSummary = document.querySelector('[data-cart-summary]');
    
    console.log('Elements found:', {
        cartItemsContainer: !!cartItemsContainer,
        cartEmpty: !!cartEmpty,
        cartSummary: !!cartSummary
    });
    
    if (!cartItemsContainer) {
        console.error('❌ cartItemsContainer not found!');
        return;
    }
    
    // Update cart icon badge - update all badges on the page
    const cartBadges = document.querySelectorAll('[data-cart-badge]');
    cartBadges.forEach(cartBadge => {
        cartBadge.textContent = cartItems.length;
        cartBadge.style.display = cartItems.length > 0 ? 'flex' : 'none';
    });
    if (cartBadges.length > 0) {
        console.log('Cart badge(s) updated:', cartItems.length, 'items');
    } else {
        console.warn('Cart badge not found');
    }
    
    if (cartItems.length === 0) {
        console.log('Cart is empty, showing empty state');
        if (cartEmpty) {
            cartEmpty.style.display = 'block';
            console.log('Empty state shown');
        }
        if (cartSummary) {
            cartSummary.style.display = 'none';
            console.log('Summary hidden');
        }
        cartItemsContainer.innerHTML = '';
        console.log('=== updateCartDrawer END (empty) ===');
        return;
    }
    
    console.log('Cart has items, rendering...');
    if (cartEmpty) {
        cartEmpty.style.display = 'none';
        console.log('Empty state hidden');
    }
    if (cartSummary) {
        cartSummary.style.display = 'block';
        console.log('Summary shown');
    }
    
    // Render cart items
    const itemsHTML = cartItems.map((product, index) => {
        console.log(`Rendering item ${index + 1}:`, product.name);
        return `
        <div class="cart-item" data-cart-item-id="${product.id}">
            <div class="cart-item__info">
                <h4>${product.name}</h4>
                <p>${product.tagline}</p>
                <div class="cart-item__price">$${product.price}${product.frequency}</div>
            </div>
            <div class="cart-item__actions">
                <button class="btn-secondary" type="button" data-view-wallets data-product-id="${product.id}">
                    View wallets
                </button>
                <button class="btn-ghost" type="button" data-remove-item data-product-id="${product.id}" aria-label="Remove ${product.name}">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
        `;
    }).join('');
    
    cartItemsContainer.innerHTML = itemsHTML;
    console.log('Items HTML rendered, length:', itemsHTML.length);
    
    // Calculate and update cart total
    updateCartTotal();
    
    console.log('=== updateCartDrawer END ===');
}

function updateCartTotal() {
    // Calculate total sum of all cart items
    const total = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price) || 0;
        return sum + price;
    }, 0);
    
    // Format total with commas for thousands
    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(total);
    
    // Update subtotal and total displays
    const subtotalEl = document.querySelector('[data-cart-subtotal]');
    const totalEl = document.querySelector('[data-cart-total-amount]');
    
    if (subtotalEl) {
        subtotalEl.textContent = formattedTotal;
    }
    if (totalEl) {
        totalEl.textContent = formattedTotal;
    }
    
    console.log('Cart total updated:', formattedTotal, '(', cartItems.length, 'items)');
}

function getWalletModal() {
    if (walletModal) return walletModal;
    walletModal = document.createElement('div');
    walletModal.className = 'wallet-modal';
    walletModal.innerHTML = `
        <div class="wallet-modal__backdrop" data-modal-close></div>
        <div class="wallet-modal__panel">
            <div class="wallet-modal__header">
                <div>
                    <p class="eyebrow">Wallet checkout</p>
                    <h3 data-wallet-product>Cart ready</h3>
                </div>
                <button class="btn-secondary" type="button" data-modal-close>Close</button>
            </div>
            <p class="wallet-note" data-wallet-note></p>
            <div class="wallet-list" data-wallet-list></div>
            <div class="proof-upload" data-proof-upload>
                <label for="proof-file">Upload proof of payment</label>
                <input type="file" id="proof-file" name="proof" accept="image/*,.pdf" data-proof-file>
                <p class="proof-note">Upload a screenshot or PDF of your transaction confirmation</p>
                <div class="proof-file-info" data-proof-file-info style="display: none;">
                    <span data-proof-file-name></span>
                    <button type="button" class="btn-ghost" data-remove-proof>Remove</button>
                </div>
            </div>
            <div class="wallet-actions">
                <button class="btn-secondary" type="button" data-modal-close>Cancel</button>
                <button class="btn-primary" type="button" data-confirm-payment>Payment sent</button>
            </div>
        </div>
    `;
    walletModal.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-close]')) {
            closeWalletModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeWalletModal();
    });
    document.body.appendChild(walletModal);
    return walletModal;
}

function showWalletModal(product) {
    const modal = getWalletModal();
    const nameEl = modal.querySelector('[data-wallet-product]');
    const noteEl = modal.querySelector('[data-wallet-note]');
    const listEl = modal.querySelector('[data-wallet-list]');
    const proofUpload = modal.querySelector('[data-proof-upload]');
    const proofFile = modal.querySelector('[data-proof-file]');
    const proofFileInfo = modal.querySelector('[data-proof-file-info]');

    if (nameEl) nameEl.textContent = product.name;
    if (noteEl) noteEl.textContent = product.paymentNote;
    if (listEl) {
        listEl.innerHTML = '';
        Object.entries(product.wallets).forEach(([network, address]) => {
            const card = document.createElement('div');
            card.className = 'wallet-card';
            card.innerHTML = `
                <header>
                    <span>${network.toUpperCase()}</span>
                    <button type="button" data-copy="${address}">Copy</button>
                </header>
                <p class="wallet-address">${address}</p>
            `;
            listEl.appendChild(card);
        });
    }
    
    // Show proof upload section
    if (proofUpload) {
        proofUpload.classList.add('visible');
    }
    
    // Reset proof file input
    if (proofFile) {
        proofFile.value = '';
        proofFile.dataset.productId = product.id;
    }
    if (proofFileInfo) {
        proofFileInfo.style.display = 'none';
    }
    
    const confirmButton = modal.querySelector('[data-confirm-payment]');
    if (confirmButton) {
        confirmButton.dataset.productId = product.id;
        confirmButton.dataset.isCombined = 'false';
    }
    modal.classList.add('active');
}

function showCombinedWalletModal() {
    const modal = getWalletModal();
    const nameEl = modal.querySelector('[data-wallet-product]');
    const noteEl = modal.querySelector('[data-wallet-note]');
    const listEl = modal.querySelector('[data-wallet-list]');
    const proofUpload = modal.querySelector('[data-proof-upload]');
    const proofFile = modal.querySelector('[data-proof-file]');
    const proofFileInfo = modal.querySelector('[data-proof-file-info]');
    
    // Calculate total amount
    const total = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(total);
    
    // Update header to show total
    if (nameEl) {
        nameEl.textContent = `Pay ${formattedTotal} for ${cartItems.length} item${cartItems.length > 1 ? 's' : ''}`;
    }
    
    // Show payment note
    if (noteEl) {
        noteEl.textContent = `Send the total amount (${formattedTotal}) to any of the wallet addresses below. Payment will be processed for all ${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart.`;
    }
    
    // Show wallet addresses (use first item's wallets as primary, or combine all)
    if (listEl) {
        listEl.innerHTML = '';
        
        // Use the first item's wallet addresses for payment
        // (In a real implementation, you might want to use a dedicated checkout wallet)
        const primaryProduct = cartItems[0];
        
        // Show items summary
        const itemsSummary = document.createElement('div');
        itemsSummary.className = 'wallet-items-summary';
        itemsSummary.innerHTML = `
            <h4>Items in this payment (${cartItems.length}):</h4>
            <ul>
                ${cartItems.map(item => `
                    <li>
                        <strong>${item.name}</strong> - ${new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(item.price)}
                    </li>
                `).join('')}
            </ul>
            <div class="wallet-total">
                <strong>Total: ${formattedTotal}</strong>
            </div>
        `;
        listEl.appendChild(itemsSummary);
        
        // Show wallet addresses
        Object.entries(primaryProduct.wallets).forEach(([network, address]) => {
            const card = document.createElement('div');
            card.className = 'wallet-card';
            card.innerHTML = `
                <header>
                    <span>${network.toUpperCase()}</span>
                    <button type="button" data-copy="${address}">Copy</button>
                </header>
                <p class="wallet-address">${address}</p>
                <p class="wallet-amount">Send: ${formattedTotal}</p>
            `;
            listEl.appendChild(card);
        });
    }
    
    // Show proof upload section
    if (proofUpload) {
        proofUpload.classList.add('visible');
    }
    
    // Reset proof file input
    if (proofFile) {
        proofFile.value = '';
        proofFile.dataset.isCombined = 'true';
    }
    if (proofFileInfo) {
        proofFileInfo.style.display = 'none';
    }
    
    const confirmButton = modal.querySelector('[data-confirm-payment]');
    if (confirmButton) {
        confirmButton.dataset.isCombined = 'true';
        confirmButton.textContent = `Confirm payment for ${cartItems.length} item${cartItems.length > 1 ? 's' : ''}`;
    }
    modal.classList.add('active');
}

function closeWalletModal() {
    if (walletModal) {
        walletModal.classList.remove('active');
    }
}

function openCartDrawer() {
    if (!cartDrawer) return;
    updateCartDrawer();
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
}

function closeCartDrawer() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
}

async function handlePaymentSuccess(product, proofFile = null) {
    // Prepare payment data for Formspree
    const paymentData = {
        isCombined: false,
        total: product.price,
        itemsCount: 1,
        items: [{
            id: product.id,
            name: product.name,
            price: product.price
        }],
        wallets: product.wallets
    };
    
    // Submit proof to Formspree
    if (proofFile) {
        showNotification('Submitting proof of payment...', 'info');
        const submitted = await submitProofToFormspree(paymentData, proofFile);
        if (submitted) {
            showNotification('Proof of payment submitted successfully.', 'success');
        } else {
            showNotification('Payment recorded, but proof submission failed. Please contact support.', 'error');
        }
    }
    
    // Remove item from cart after payment
    cartItems = cartItems.filter(item => String(item.id) !== String(product.id));
    saveCartToStorage(); // Save to localStorage
    updateCartDrawer(); // This will also call updateCartTotal()
    
    showSuccessFeedback(product);
    closeWalletModal();
    closeCartDrawer();
    showNotification(`Payment for ${product.name} recorded.`, 'success');
}

function showSuccessFeedback(product) {
    const titleEls = document.querySelectorAll('[data-success-title]');
    if (!titleEls.length) return;
    titleEls.forEach(el => {
        el.textContent = `${product.name} payment confirmed`;
    });
    document.querySelectorAll('[data-success-note]').forEach(el => {
        el.textContent = `Wallet transfer received for ${product.name}. Evidence delivery and analyst follow-up are now in motion.`;
    });
    const steps = [
        `1. Evidence locker unlocked for ${product.name} with screenshots, dumps, and IOC bundles.`,
        `2. Wallet receipt and transaction hash emailed to your SOC and synced to Slack/Teams.`,
        `3. Analyst on-call engages within 15 minutes to walk through remediation steps.`
    ];
    document.querySelectorAll('[data-success-steps]').forEach(list => {
        list.innerHTML = steps.map(step => `<li>${step}</li>`).join('');
    });
    document.querySelectorAll('[data-proof-upload]').forEach(section => {
        section.classList.add('visible');
        const productSpan = section.querySelector('[data-proof-product]');
        const input = section.querySelector('input[type="file"]');
        if (productSpan) {
            productSpan.textContent = product.name;
        }
        if (input) {
            input.value = '';
        }
    });
}

document.addEventListener('click', (event) => {
    const copyBtn = event.target.closest('button[data-copy]');
    if (!copyBtn) return;
    const value = copyBtn.dataset.copy;
    navigator.clipboard.writeText(value).then(() => {
        showNotification('Wallet address copied to clipboard.', 'success');
    }).catch(() => {
        showNotification('Unable to copy wallet address.', 'info');
    });
});

// Handle proof file upload
document.addEventListener('change', (event) => {
    const proofFile = event.target.closest('[data-proof-file]');
    if (!proofFile || !proofFile.files || proofFile.files.length === 0) return;
    
    const file = proofFile.files[0];
    const proofFileInfo = document.querySelector('[data-proof-file-info]');
    const proofFileName = document.querySelector('[data-proof-file-name]');
    
    if (proofFileInfo && proofFileName) {
        proofFileName.textContent = file.name;
        proofFileInfo.style.display = 'flex';
        proofFileInfo.style.alignItems = 'center';
        proofFileInfo.style.justifyContent = 'space-between';
        proofFileInfo.style.gap = '12px';
        proofFileInfo.style.marginTop = '12px';
        proofFileInfo.style.padding = '12px';
        proofFileInfo.style.borderRadius = '10px';
        proofFileInfo.style.background = 'rgba(15, 23, 42, 0.4)';
    }
});

// Handle remove proof file
document.addEventListener('click', (event) => {
    const removeProofBtn = event.target.closest('[data-remove-proof]');
    if (!removeProofBtn) return;
    
    const proofFile = document.querySelector('[data-proof-file]');
    const proofFileInfo = document.querySelector('[data-proof-file-info]');
    
    if (proofFile) {
        proofFile.value = '';
    }
    if (proofFileInfo) {
        proofFileInfo.style.display = 'none';
    }
    
    showNotification('Proof file removed.', 'info');
});

// Handle payment confirmation with Formspree submission
document.addEventListener('click', (event) => {
    const confirmBtn = event.target.closest('[data-confirm-payment]');
    if (!confirmBtn) return;
    
    // Get proof file
    const proofFile = document.querySelector('[data-proof-file]');
    const file = proofFile && proofFile.files && proofFile.files.length > 0 ? proofFile.files[0] : null;
    
    // Check if this is a combined payment for all items
    const isCombined = confirmBtn.dataset.isCombined === 'true';
    
    if (isCombined) {
        // Handle combined payment for all cart items
        handleCombinedPaymentSuccess(file);
    } else {
        // Handle single item payment
        const productId = confirmBtn.dataset.productId;
        const product = productCatalog.find(item => item.id === productId);
        if (!product) {
            showNotification('Product not found.', 'info');
            return;
        }
        handlePaymentSuccess(product, file);
    }
});

// Formspree submission function
async function submitProofToFormspree(paymentData, proofFile) {
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdkbnlww';
    
    try {
        const formData = new FormData();
        
        // Add payment data
        formData.append('payment_type', paymentData.isCombined ? 'combined' : 'single');
        formData.append('total_amount', paymentData.total);
        formData.append('items_count', paymentData.itemsCount);
        formData.append('items', JSON.stringify(paymentData.items));
        formData.append('wallet_addresses', JSON.stringify(paymentData.wallets));
        formData.append('timestamp', new Date().toISOString());
        
        // Add proof file if provided
        if (proofFile) {
            formData.append('proof', proofFile);
        }
        
        // Submit to Formspree
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            console.log('Proof of payment submitted successfully');
            return true;
        } else {
            console.error('Failed to submit proof:', await response.text());
            return false;
        }
    } catch (error) {
        console.error('Error submitting proof to Formspree:', error);
        return false;
    }
}

async function handleCombinedPaymentSuccess(proofFile = null) {
    if (cartItems.length === 0) {
        showNotification('No items in cart to process payment.', 'info');
        return;
    }
    
    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
    const formattedTotal = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(total);
    
    // Get wallet addresses (from first item)
    const primaryProduct = cartItems[0];
    
    // Prepare payment data for Formspree
    const paymentData = {
        isCombined: true,
        total: total,
        itemsCount: cartItems.length,
        items: cartItems.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price
        })),
        wallets: primaryProduct.wallets
    };
    
    // Submit proof to Formspree
    if (proofFile) {
        showNotification('Submitting proof of payment...', 'info');
        const submitted = await submitProofToFormspree(paymentData, proofFile);
        if (submitted) {
            showNotification('Proof of payment submitted successfully.', 'success');
        } else {
            showNotification('Payment recorded, but proof submission failed. Please contact support.', 'error');
        }
    }
    
    // Store items for success feedback
    const paidItems = [...cartItems];
    const itemsCount = cartItems.length;
    
    // Clear all items from cart
    cartItems = [];
    saveCartToStorage();
    updateCartDrawer();
    
    // Show success feedback
    showCombinedSuccessFeedback(paidItems, formattedTotal);
    closeWalletModal();
    closeCartDrawer();
    showNotification(`Payment of ${formattedTotal} for ${itemsCount} item${itemsCount > 1 ? 's' : ''} recorded.`, 'success');
}

function showCombinedSuccessFeedback(items, total) {
    const titleEls = document.querySelectorAll('[data-success-title]');
    if (!titleEls.length) return;
    
    titleEls.forEach(el => {
        el.textContent = `Payment of ${total} confirmed for ${items.length} item${items.length > 1 ? 's' : ''}`;
    });
    
    const descEls = document.querySelectorAll('[data-success-description]');
    if (descEls.length) {
        descEls.forEach(el => {
            el.textContent = `Your payment has been processed. All ${items.length} item${items.length > 1 ? 's have' : ' has'} been confirmed.`;
        });
    }
    
    // Scroll to success section if it exists
    const successSection = document.querySelector('.checkout-success');
    if (successSection) {
        successSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function updateDetailField(selector, value) {
    const el = document.querySelector(selector);
    if (el && value) {
        el.textContent = value;
    }
}

function showNotification(message, type = 'info') {
    const previous = document.querySelector('.notification');
    if (previous) previous.remove();

    const toast = document.createElement('div');
    toast.className = `notification notification-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('notification-hide');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

