using { sap.common.CodeList } from '@sap/cds/common';
namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  status : Association to Statuses;
}

entity Statuses: CodeList {
  key ID: Integer;
}
