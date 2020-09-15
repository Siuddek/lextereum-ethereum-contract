const SellAgreementNotary = artifacts.require('SellAgreementNotary.sol')

contract('SellAgreementNotary', (accounts) => {
    before(async () => {
        this.sellAgreementNotary = await SellAgreementNotary.deployed()
    })

    it('deploys successfully', async () => {
        const address = await this.sellAgreementNotary.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('notarizes agreement', async () => {
        const result = await this.sellAgreementNotary.notarizeSellAgreement('document id', 'seller id', 'buyer id', 'document hash')
        const event = result.logs[0].args
        assert.equal(event.documentID, 'document id')
        assert.equal(event.documentHash, 'document hash')
        const sellAgreement = await this.sellAgreementNotary.sellAgreements('document id')
        assert.equal(sellAgreement.documentID, 'document id')
        assert.equal(sellAgreement.sellerID, 'seller id')
        assert.equal(sellAgreement.buyerID, 'buyer id')
        assert.equal(sellAgreement.documentHash, 'document hash')
    })
})