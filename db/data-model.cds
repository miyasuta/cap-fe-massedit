using { sap.common.CodeList } from '@sap/cds/common';
namespace my.bookshop;

entity Books {
  key ID : Integer @title: 'Book ID';
  title  : String @title: 'Title';
  stock  : Integer @title: 'Stock';
  status : Association to Statuses @title: 'Stock Status';
}

entity Statuses: CodeList {
  key ID: Integer;
}
