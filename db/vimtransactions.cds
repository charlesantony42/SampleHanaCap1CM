namespace app.vimtransactions;

using { Country } from '@sap/cds/common';
type BusinessKey : String(10);
type SDate : DateTime;
type LText : String(1024);


entity Invoice_Header {
  key ID : Integer;
  ITEMS  : Composition of many Invoice_Items on ITEMS.INTHeader = $self;
  CompanyCode : String(4);
  Currency: String(3);
  DocumentDate: SDate;
  DocumentNumber: String(15);
  DueDate: SDate;
  InvoiceAmount: Integer;
  InvoicingParty: String(15);
  Supplier: String(60);
  ReviewedBy: String(20);
  ReviewedOn: SDate;
  ApprovedBy: String(20);
  ApprovedOn: SDate;
  ApprovalNotes: LText;
  DMSDocId: String(100);
  ApprovalStatus: String(20)

};
entity Invoice_Items {

    key INTHeader : association to Invoice_Header;
    key ItemNumber: BusinessKey;
        CostCenter: String(20);
        Description: String(100);
        GLAccount: String(10);
        NetAmount: Integer;
        Plant: String(20);
        POItem: String(20);
        PurchaseOrder: String(20);
        Quantity: String(20);
        TaxCode: String(20);
        UnitOfMeasure: String(20);
};