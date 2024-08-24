// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage {
  uint256 private _tokenIds;
  uint256 private _itemsSold;
  
  int256 listingPrice = 0.025 ether;

  address payable owner;

  mapping(uint256 => MarketItem) private idToMarketItem;

  struct MarketItem {
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  event MarketItemCreated (
    uint256 indexed tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  )

  constructor() {
    owner = payable(msg.sender);
  }
}
