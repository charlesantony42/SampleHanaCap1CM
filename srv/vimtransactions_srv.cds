using app.vimtransactions from '../db/vimtransactions';
service InvoiceService {

 entity Invoice_Header
    as projection on vimtransactions.Invoice_Header;

 entity Invoice_Items
    as projection on  vimtransactions.Invoice_Items;

}