using InvoiceService as service from '../../srv/vimtransactions_srv';

annotate service.Invoice_Header with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'CompanyCode',
            Value : CompanyCode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Currency',
            Value : Currency,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DocumentDate',
            Value : DocumentDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DocumentNumber',
            Value : DocumentNumber,
        },
    ]
);
annotate service.Invoice_Header with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CompanyCode',
                Value : CompanyCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Currency',
                Value : Currency,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DocumentDate',
                Value : DocumentDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DocumentNumber',
                Value : DocumentNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DueDate',
                Value : DueDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'InvoiceAmount',
                Value : InvoiceAmount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'InvoicingParty',
                Value : InvoicingParty,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Supplier',
                Value : Supplier,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ReviewedBy',
                Value : ReviewedBy,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ReviewedOn',
                Value : ReviewedOn,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ApprovedBy',
                Value : ApprovedBy,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ApprovedOn',
                Value : ApprovedOn,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ApprovalNotes',
                Value : ApprovalNotes,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DMSDocId',
                Value : DMSDocId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ApprovalStatus',
                Value : ApprovalStatus,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
