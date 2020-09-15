pragma solidity ^0.5.0;

contract SellAgreementNotary {

    struct SellAgreement {
        string documentID;
        string sellerID;
        string buyerID;
        string documentHash;
    }

    event SellAgreementCreated (
        string documentID,
        string documentHash
    );

    mapping(string => SellAgreement) public sellAgreements;

    function notarizeSellAgreement(string memory _documentID, string memory _sellerID, string memory _buyerID, string memory _documentHash) public {
        sellAgreements[_documentID] = SellAgreement(_documentID, _sellerID, _buyerID, _documentHash);
        emit SellAgreementCreated(_documentID, _documentHash);
    }
}